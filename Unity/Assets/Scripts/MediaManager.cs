using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Cysharp.Threading.Tasks;
using DG.Tweening;
using FairyGUI;
using Manager;
using Panthea.Asset;
using UnityEngine;
using UnityEngine.Video;
using Object = UnityEngine.Object;

/// <summary>
/// 多媒体管理器
/// 负责视频的播放
/// 或者声音的播放
/// </summary>
public static class MediaManager
{
    public class Callback
    {
        public int Handle;
    }

    private class TempClip
    {
        public AudioSource Source;
        public AudioClip Clip;
        public string PlayMediaPath; //播放媒体得文件路径
        public OnEnd EndCallback;

        public TempClip(AudioSource source)
        {
            Source = source;
        }
    }

    public delegate void OnEnd(Callback data);

    /// <summary>
    /// 缓存使用过的声效
    /// </summary>
    private static Dictionary<string, AudioClip> VoiceCache = new Dictionary<string, AudioClip>();

    /// <summary>
    /// 缓存使用过的音乐
    /// </summary>
    private static Dictionary<string, AudioClip> MusicCache = new Dictionary<string, AudioClip>();

    /// <summary>
    /// 因为这个声效可能正在播放中.如果这时候我们调整了音效的音量.我们无法从池里面拿到所有的音效(因为这个音效正在使用中我们无法把他放到池中)
    /// </summary>
    private static List<TempClip> TempVoicePool = new List<TempClip>();

    private static Dictionary<string, int> AliasMap = new Dictionary<string, int>();

    private static float mSoundEffectVolume = 1;

    public static float SoundEffectVolume
    {
        get => mSoundEffectVolume;
        set
        {
            //mVoiceVolume = value;
            ControlVoice(value);
            Stage.inst.soundVolume = value;

            mSoundEffectVolume = value;
        }
    }

    private static float mMusicVolume = 1;

    public static float MusicVolume
    {
        get => mMusicVolume;
        set
        {
            ControlMuisc(value);

            mMusicVolume = value;
        }
    }

    private static AudioSource mMuiscSource;

    private static AudioSource MusicSource
    {
        get
        {
            if (mMuiscSource == null)
            {
                var music = new GameObject("Music");
                Object.DontDestroyOnLoad(music);
                mMuiscSource = music.AddComponent<AudioSource>();
                mMuiscSource.loop = true;
            }

            return mMuiscSource;
        }
    }

    private static float mPlayPitch;

    public static float PlayPitch
    {
        get => mPlayPitch;
        set => mPlayPitch = value;
    }

    public static void Init()
    {
        mPlayPitch = 1.0f;

        //注册Update用于清理回收池
        UnityLifeCycleKit.Inst.AddUpdate(XUpdate);

        //先压十个音效进入回收池
        AudioSource[] sources = new AudioSource[10];
        for (int i = 0; i < 10; i++)
        {
            sources[i] = VoicePool.Inst.Rent();
        }

        for (int i = 0; i < 10; i++)
        {
            VoicePool.Inst.Return(sources[i]);
        }
    }

    private static float XUpdate()
    {
        for (var index = TempVoicePool.Count - 1; index >= 0; index--)
        {
            var node = TempVoicePool[index];
            if (!node.Source.isPlaying && !node.Source.loop)
            {
                VoiceReturnToPool(node.Source);
            }
        }

        return 1;
    }

    public class VoicePool: ObjectPool<AudioSource>
    {
        private static VoicePool mInst;

        private static GameObject mContainer { get; set; }

        public static VoicePool Inst
        {
            get
            {
                if (mInst == null)
                {
                    mContainer = new GameObject("Voice");
                    Object.DontDestroyOnLoad(mContainer);
                    mInst = new VoicePool();
                }

                return mInst;
            }
        }

        protected override void OnBeforeRent(AudioSource Inst)
        {
        }

        protected override void OnBeforeReturn(AudioSource Inst)
        {
        }

        public void Apply(Action<AudioSource> method)
        {
            if (q != null)
            {
                foreach (var node in q)
                {
                    method(node);
                }
            }
        }

        protected override AudioSource CreateInstance()
        {
            var source = mContainer.AddComponent<AudioSource>();
            source.volume = SoundEffectVolume;
            return source;
        }
    }

    //播放视频
    /*public async UniTask PlayViedo(string videoName, string prefix = ".mov")
    {
        var video = Camera.main.gameObject.GetComponent<VideoPlayer>();
        if (video == null)
        {
            video = Camera.main.gameObject.AddComponent<VideoPlayer>();
            video.aspectRatio = VideoAspectRatio.Stretch;
            video.renderMode = VideoRenderMode.CameraNearPlane;
            video.targetCamera = Camera.main;
        }
#if UNITY_ANDROID || UNITY_IPHONE || REALGAME
        video.url = FindSource(mViedoPath, videoName + prefix);
#else
        //video.url = AssetsConfig.WWWLocalzation + "Movie/" + videoName + prefix;
#endif
        video.enabled = true;

        await UniTask.WaitUntil(() => video.isPrepared);

        await UniTask.WaitUntil(() =>
        {
            if (video.isPlaying == false)
            {
                video.enabled = false;
                return true;
            }

            return false;
        });
    }*/

    /// <summary>
    /// 为返回的HashId 设置别名.通过别名进行查找
    /// 使用完后需要自己手动移除映射.
    /// </summary>
    /// <param name="alias"></param>
    /// <param name="id"></param>
    public static void SetAlias(string alias, int id)
    {
        if (id != 0 && !string.IsNullOrEmpty(alias))
        {
            AliasMap[alias] = id;
        }
    }

    public static int GetIdByAlias(string alias)
    {
        if (string.IsNullOrEmpty(alias))
        {
            return 0;
        }

        int id;
        if (AliasMap.TryGetValue(alias, out id))
        {
            return id;
        }

        return 0;
    }

    public static void RemoveMap(string alias)
    {
        if (AliasMap.ContainsKey(alias))
        {
            AliasMap.Remove(alias);
        }
    }

    //==================================================================================================================
    // 用文件名播放音效
    public static async Task<int> PlayVoice(string path, bool loop = false, float pitch = 1,OnEnd end = null)
    {
        AudioClip clip;
        if (string.IsNullOrEmpty(path))
        {
            Log.Error("播放声音使用的路径不能为空");
            return 0;
        }

        bool temp3 = VoiceCache.TryGetValue(path, out clip);

        if (!temp3 || clip == null)
        {
            clip = await ResourcesManager.LoadAudioClip(path);

            if (clip == null)
            {
                return 0;
            }

            VoiceCache[path] = clip;
        }

        var source = VoicePool.Inst.Rent();
        var temp = new TempClip(source) { Clip = clip, EndCallback = end, Source = source, PlayMediaPath = path };
        TempVoicePool.Add(temp);

        //        Debugger.Log("播放声音" + name);
        source.clip = clip;
        source.Play();
        source.loop = loop;
        source.pitch = mPlayPitch;
        int code = source.GetHashCode();
        return code;
    }

    //用组件播放音效
    public static int PlayVoice(AudioClip clip, bool loop = false, OnEnd end = null)
    {
        var source = VoicePool.Inst.Rent();

        var temp = new TempClip(source) { Clip = clip, EndCallback = end, Source = source, PlayMediaPath = clip.name };
        TempVoicePool.Add(temp);

        source.clip = clip;
        source.Play();
        source.loop = loop;
        source.pitch = mPlayPitch;
        int code = source.GetHashCode();

        return code;
    }

    //暂停指定音效
    public static void PauseVoice(int id)
    {
        for (int i = 0; i < TempVoicePool.Count; i++)
        {
            if (TempVoicePool[i].Source.GetHashCode() == id)
            {
                TempVoicePool[i].Source.Pause();
            }
        }
    }

    //继续指定音效
    public static void ResumeVoice(int id)
    {
        for (int i = 0; i < TempVoicePool.Count; i++)
        {
            if (TempVoicePool[i].Source.GetHashCode() == id)
            {
                TempVoicePool[i].Source.UnPause();
            }
        }
    }

    //继续指定音效
    public static void ResumeVoice(string fileName)
    {
        for (int i = 0; i < TempVoicePool.Count; i++)
        {
            if (string.Equals(TempVoicePool[i].PlayMediaPath, fileName))
            {
                TempVoicePool[i].Source.UnPause();
            }
        }
    }

    //停止指定音效
    public static void StopVoice(int id)
    {
        for (int i = 0; i < TempVoicePool.Count; i++)
        {
            if (TempVoicePool[i].Source.GetHashCode() == id)
            {
                var source = TempVoicePool[i];
                VoiceReturnToPool(source.Source);
            }
        }
    }

    //暂停所有音效
    public static void PauseAllVoice()
    {
        for (int i = 0; i < TempVoicePool.Count; i++)
        {
            TempVoicePool[i].Source.Pause();
        }
    }

    //继续所有音效
    public static void ResumeAllVoice()
    {
        for (int i = 0; i < TempVoicePool.Count; i++)
        {
            TempVoicePool[i].Source.UnPause();
        }
    }

    //停止所有音效
    public static void StopAllVoice()
    {
        for (int i = 0; i < TempVoicePool.Count; i++)
        {
            var source = TempVoicePool[i];
            VoicePool.Inst.Return(source.Source);
            source.Source.Stop();
            source.EndCallback?.Invoke(new Callback { Handle = source.Source.GetHashCode() });
        }

        TempVoicePool.Clear();
    }

    //设置音乐的播放速度
    public static void SetVoicePitch(int id)
    {
        for (int i = 0; i < TempVoicePool.Count; i++)
        {
            if (TempVoicePool[i].Source.GetHashCode() == id)
            {
                var source = TempVoicePool[i];
                source.Source.pitch = mPlayPitch;
            }
        }
    }

    //==================================================================================================================
    //用文件名播放音乐文件
    public static async Task PlayMusic(string name, bool loop = true)
    {
        if (string.IsNullOrEmpty(name))
        {
            MusicSource.clip = null;
            MusicSource.Stop();
            return;
        }

        AudioClip clip;
        name = "Sound/" + name;
        if (!MusicCache.TryGetValue(name, out clip) || clip == null)
        {
            clip = await ResourcesManager.LoadAudioClip(name);
            if (clip == null)
            {
                return;
            }

            MusicCache[name] = clip;
        }

        MusicSource.pitch = 1.0f;
        MusicSource.clip = clip;
        MusicSource.loop = loop;
        MusicSource.volume = MusicVolume;
        //      pitchBendGroup.audioMixer.SetFloat("pitchBend", 1f / 1.5f);
        MusicSource.Play();
    }

    //设置音乐的播放速度
    public static void SetMusicPitch(float pitch)
    {
        MusicSource.pitch = pitch;
        mPlayPitch = pitch;
    }

    //暂停音乐
    public static void PauseMusic()
    {
        //        DOTween.To(() => MusicSource.volume, t1 => MusicSource.volume = t1, 0, 0.5f).SetUpdate(true).OnComplete(()=>{ MusicSource.Pause();});
        MusicSource.Pause();
    }

    //继续音乐
    public static void ResumeMusic()
    {
        MusicSource.UnPause();
        //        if (mMusicVolume > 0)
        //        {
        //            MusicSource.volume = 0;
        //            DOTween.To(() => MusicSource.volume, t1 => MusicSource.volume = t1, mMusicVolume, 0.5f).SetUpdate(true);
        //        }
    }

    //停止音乐
    public static void StopMusic()
    {
        MusicSource.Stop();
    }

    //开始音乐
    public static void PlayMusic()
    {
        MusicSource.Play();
    }

    //=====================================================================================================================    
    //私有成员
    private static string FindSource(string[] searchPath, string name)
    {
        for (int i = 0; i < searchPath.Length; i++)
        {
            var path = searchPath[i] + name;
            if (File.Exists(path))
            {
                Log.Print("查找到文件！" + "    " + path);
                return path;
            }
            else
            {
                Log.Error("未查找到视频文件！" + "    " + path);
                return string.Empty;
            }
        }

        return string.Empty;
    }

    private static void VoiceReturnToPool(AudioSource source)
    {
        //        Debugger.Log("回收声音:" + source.clip.name);
        if (source == null)
        {
            return;
        }

        VoicePool.Inst.Return(source);
        for (int i = 0; i < TempVoicePool.Count; i++)
        {
            if (TempVoicePool[i].Source == source)
            {
                var tempClip = TempVoicePool[i];
                tempClip.Source.Stop();
                tempClip.EndCallback?.Invoke(new Callback { Handle = tempClip.Source.GetHashCode() });
                TempVoicePool.RemoveAt(i);
                return;
            }
        }
    }

    private static void ControlVoice(float value)
    {
        var tempVal = mSoundEffectVolume;
        VoicePool.Inst.Apply(source =>
        {
            DOTween.Kill(source);
            DOTween.To(() => tempVal, t1 => tempVal = source.volume = t1, value, 0.5f).SetUpdate(true).SetTarget(source);
        });
        foreach (TempClip node in TempVoicePool)
        {
            DOTween.Kill(node);
            DOTween.To(() => tempVal, t1 => tempVal = node.Source.volume = t1, value, 0.5f).SetUpdate(true).SetTarget(node);
        }
    }

    private static void ControlMuisc(float value)
    {
        var tempVal = mMusicVolume;
        DOTween.Kill(MusicSource);
        DOTween.To(() => tempVal, t1 => tempVal = MusicSource.volume = t1, value, 0.5f).SetUpdate(true).SetTarget(MusicSource);
        //MusicSource.volume = MusicVolume;
    }
}