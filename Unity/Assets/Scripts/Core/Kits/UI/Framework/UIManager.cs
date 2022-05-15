using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using Core;
using Core.Utils;
using Cysharp.Threading.Tasks;
using FairyGUI;
using Panthea.Asset;
using TMPro;
using UnityEngine;
using UnityEngine.Profiling;
using UnityEngine.Scripting;
using AssetBundleRequest = Panthea.Asset.AssetBundleRequest;

public class UIManager
{
    private Dictionary<Type, UIWidget> CacheWidget { get; } = new Dictionary<Type, UIWidget>(50);
    private List<UIBase> Stack { get; } = new List<UIBase>(20);
    private Dictionary<Type, UIBase> Dictionary { get; } = new Dictionary<Type, UIBase>(20);
    private Dictionary<Type, List<UIBase>> RepeatUI { get; } = new Dictionary<Type, List<UIBase>>(20);

    /// <summary>
    /// 我们存储UI的Dictionary的Keys类型,以便再后面Update中使用它
    /// </summary>
    private readonly List<Type> DictKeys = new List<Type>(50);

    /// <summary>
    /// 同上,这个是用于Update中使用的映射
    /// </summary>
    private readonly List<Type> RepeatKeys = new List<Type>(50);

    private UnityBehaviour mUnityBehaviour { get; }
    private IAssetsLocator mAssetsLocator { get; }

    /// <summary>
    ///     在这里加载所有的非热更新的UI包
    /// </summary>
    [Preserve]
    public UIManager()
    {
        mUnityBehaviour = UnityLifeCycleKit.Inst;
        mAssetsLocator = AssetsKit.Inst;
        //UIPackage.AddPackage("UI/InternalResources");
    }

    public void RefreshLocalization()
    {
    }

    public async UniTask Init()
    {
        mUnityBehaviour.AddUpdate(Update);
        mUnityBehaviour.AddLateUpdate(LateUpdate);
        //加载字体
        //FontManager.RegisterFont(new DynamicFont("Source MSFont", Resources.Load<Font>("Fonts/Source MSFont")),"Source MSFont");
        UIConfig.defaultFont = "SourceHanSansHWSC-Bold";
        UIConfig.bringWindowToFrontOnClick = false;
        /*TMPFont font = new TMPFont();
        font.name = "MSFont"; //这个名字要和编辑器里字体资源的名字一致
        font.fontAsset = Resources.Load<TMP_FontAsset>("Fonts/MSFont");
        FontManager.RegisterFont(font, "MSFont");*/

        if (!GameConfig.MobileRuntime)
        {
#if UNITY_EDITOR
            var assets = UnityEditor.AssetDatabase.FindAssets("t:" + nameof (TextAsset) + " " + "_fui");
            foreach (var node in assets)
            {
                var path = UnityEditor.AssetDatabase.GUIDToAssetPath(node);
                var dir = PathUtils.FormatFilePath(new DirectoryInfo(path).Parent?.FullName)?.Replace(Application.dataPath, "Assets");
                var data = UnityEditor.AssetDatabase.LoadAssetAtPath<TextAsset>(path);
                var dataName = Path.GetFileNameWithoutExtension(path).Replace("_fui", "");
                if (string.IsNullOrEmpty(dataName))
                {
                    continue;
                }

                UIPackage.AddPackage(data.bytes, dataName, (string name, string extension, Type type, out DestroyMethod method) =>
                {
                    method = DestroyMethod.Unload;
                    var sprite = UnityEditor.AssetDatabase.LoadAssetAtPath($"{dir}/{name}{extension}", type);
                    return sprite;
                });
            }
#endif
        }
        else
        {
            List<UniTask> tasks = new List<UniTask>();
            var ui = AssetsKit.Inst.GetFilterAssetBundle(new string[] { "UI/" });
            foreach (var node in ui)
            {
                tasks.Add(LoadPackage(node, Path.GetFileNameWithoutExtension(node)));
            }
            /*tasks.Add(LoadPackage("UI/Common/Common", "Common"));
            tasks.Add(LoadPackage("UI/Common/GameBegins", "GameBegins"));
            tasks.Add(LoadPackage("UI/Kitchen/GamingUI", "GamingUI"));
            tasks.Add(LoadPackage("UI/Common/Log_in", "Log_in"));
            tasks.Add(LoadPackage("UI/Common/Effect", "Effect"));*/
            await UniTask.WhenAll(tasks);
        }
    }

    private async UniTask LoadPackage(string path, string name)
    {
        path = path.ToLower();
        name = name.ToLower();
        AssetBundleRequest ab = await mAssetsLocator.LoadAssetBundleFromABKey(path);
        ab.MarkPersistence(true);
        //path += "/";
        var text = await ab.LoadAssetAsync<TextAsset>(PathUtils.RemoveFileExtension(path) + "/" + name + "_fui");
        path = PathUtils.RemoveFileExtension(path) + "/";
        UIPackage.AddPackage(text.bytes, "", (string file, string extension, Type type, out DestroyMethod method) =>
        {
            method = DestroyMethod.None;
            if (file.Contains("!a")) //我们没有Alpha通道文件.直接上ETC2了.
            {
                return null;
            }

            return ab.LoadAssetSync(path + name + "_" + file, type);
        });
    }

    public void UnloadPackage(string path, string assetName)
    {
    }

    public UIBase GetLastUI()
    {
        if (Stack.Count > 0)
        {
            return Stack[Stack.Count - 1];
        }

        return null;
    }

    public List<UIBase> GetAllStack()
    {
        return Stack;
    }

    /// <summary>
    ///     这个方法提供了更多得功能
    ///     目前提供了实现在打开界面之前弹出菊花.等待界面加载
    /// </summary>
    /// <param name="p"></param>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public async Task<T> SuperCreate<T>(IUIParams p = null) where T : UIBase, new()
    {
        var t = typeof (T);
        return (T) await Create(t, true, p);
    }

    public T Create<T>(IUIParams p = null) where T : UIBase
    {
        Profiler.BeginSample("FairyManager.Create");
        var t = typeof (T);
        var ui = (T) Create(t, false, p).Result;
        Profiler.EndSample();
        return ui;
    }
    
    public UIBase Create(Type type,IUIParams p = null)
    {
        Profiler.BeginSample("FairyManager.Create");
        var ui = Create(type, false, p).Result;
        Profiler.EndSample();
        return ui;
    }

    private void AddNormalUi(Type t, UIBase uiBase)
    {
        Dictionary.Add(t, uiBase);
        if (!DictKeys.Contains(t))
        {
            DictKeys.Add(t);
        }
    }

    private void RemoveNormalUi(UIBase uiBase)
    {
        var t = uiBase.Type;
        Dictionary.Remove(t);
        DictKeys.Remove(t);
    }

    private void AddRepeatUi(Type t, UIBase uiBase)
    {
        if (!RepeatUI.ContainsKey(t))
        {
            RepeatUI.Add(t, new List<UIBase>(8));
        }

        RepeatUI[t].Add(uiBase);
        if (!RepeatKeys.Contains(t))
        {
            RepeatKeys.Add(t);
        }
    }

    private void RemoveRepeatUi(UIBase uiBase)
    {
        var t = uiBase.Type;
        if (RepeatUI.ContainsKey(t))
        {
            var list = RepeatUI[t];
            list.Remove(uiBase);
            if (list.Count == 0)
            {
                RepeatUI.Remove(t);
                RepeatKeys.Remove(t);
            }
        }
    }

    public async Task<UIBase> Create(Type t, bool async, IUIParams p = null)
    {
        //开始加载界面
        UIBase uiBase = null;
        UIWidget widget = null;
        List<UIBase> repeatList;
        try
        {
            if (RepeatUI.TryGetValue(t, out repeatList))
            {
                var count = repeatList.Count;
                for (var i = count - 1; i >= 0; i--)
                {
                    var value = repeatList[i];
                    var com = value.GComponent;
                    if (com != null)
                    {
                        if (com.isDisposed == false)
                        {
                            if (value.OnStage == false)
                            {
                                uiBase = value;
                                break;
                            }
                        }
                        else
                        {
                            repeatList.RemoveAt(i);
                        }
                    }
                    else
                    {
                        repeatList.RemoveAt(i);
                    }
                }
            }

            if (uiBase != null || Dictionary.TryGetValue(t, out uiBase))
            {
                widget = uiBase.Widget;
                var go = uiBase.GComponent.displayObject;
                uiBase.Visible = true;
                go.gameObject.hideFlags = HideFlags.None;
                if (!widget.GetControl)
                {
                    if(!Stack.Contains(uiBase))
                        Stack.Add(uiBase);
                }
            }
            else
            {
                //首先查找类型是否重写了UIConfig属性
                if (!CacheWidget.TryGetValue(t, out widget))
                {
                    var attribute = (UIWidget[]) t.GetCustomAttributes(typeof (UIWidget), true);
                    widget = attribute.Length > 0? attribute[0] : UIWidget.Default;
                    CacheWidget[t] = widget;
                }

                //mContainer.BindInstance(uiBase).AsSingle();
                uiBase = (UIBase) Activator.CreateInstance(t);
                uiBase.Widget = widget;
                uiBase.Type = t;
                if (!widget.GetControl)
                {
                    Stack.Add(uiBase);
                }

                if (!widget.Repeat)
                {
                    AddNormalUi(t, uiBase);
                }
                else
                {
                    AddRepeatUi(t, uiBase);
                }

                if (widget is UIWindow window)
                {
                    uiBase.Window = new NormalWindow(uiBase) { contentPane = uiBase.GComponent };
                    uiBase.Window.EnterWindowAnim = window.Enter;
                    uiBase.Window.ExitWindowAnim = window.Exit;
                    uiBase.Window.sortingOrder = (short) widget.Depth;
                    uiBase.Window.data = uiBase;
                    uiBase.Window.CloseCallback = (t1) =>
                    {
                        var anonymousUi = t1.Base;
                        OnRemoveWindow(anonymousUi);
                    };
                }
                else
                {
                    uiBase.GComponent.sortingOrder = (short) widget.Depth;
                }
                if (async)
                {
                    //TODO 这里添加转菊花界面
                    var result = await uiBase.Prepared();
                    if (result == false)
                    {
                        Destroy(uiBase, true);
                        return null;
                    }
                }

                uiBase.BaseStart(p);
            }

            if (uiBase.IsDisposed) //有可能在Start的时候就销毁了这个界面.我们这里判断一下.如果销毁了这里就要及时阻止往下执行
            {
                return null;
            }

            if (widget is UIWindow)
            {
                uiBase.Window.Show();
            }
            else
            {
                GRoot.inst.AddChild(uiBase.GComponent);
            }

            uiBase.BaseEnable(p);
            if(uiBase.Active)
                SetBackground(uiBase);
            
            return uiBase;
        }
        catch (Exception e)
        {
            Debug.LogError($"加载类型为{t}的界面错误\n{e}");
            return null;
        }
    }

    private bool SetBackground(UIBase ui)
    {
        if (ui.Widget.Background)
        {
            //var background = Create<UI_BlackBackground>();
            //background.Visible = true;
            //var index = GRoot.inst.GetChildIndex(ui.Window ?? ui.GComponent);
            //GRoot.inst.SetChildIndex(background.Window, Mathf.Max(0,index));
            return true;
        }

        return false;
    }

    /// <summary>
    ///     移除Window,这个比较特殊.我们使用OnRemoveFromStage去检测,因为Window得话可能有动画.我们必须等待动画播放结束了这个界面才是真的销毁了
    /// </summary>
    /// <param name="uiBase"></param>
    private void OnRemoveWindow(UIBase uiBase)
    {
        var widget = uiBase.Widget;
        Stack.Remove(uiBase);
        uiBase.BaseDisable();
        if (!widget.Pool || uiBase.IsDisposed)
        {
            if (widget.Repeat)
            {
                RemoveRepeatUi(uiBase);
            }
            else
            {
                RemoveNormalUi(uiBase);
            }
            uiBase.BaseDestroy();
        }
        else
        {
            uiBase.Visible = false;
        }
        SetBackground();
    }

    /// <summary>
    /// 这个方法会移除当前界面的上一个界面.
    /// </summary>
    public void RemoveParent()
    {
        var index = Stack.Count - 2;
        if (index < 0)
        {
            return;
        }

        var ui = Stack[index];
        Destroy(ui);
    }

    /// <summary>
    /// 这个方法会移除所有非GetControl的界面.可以快速的回到主界面窗口
    /// </summary>
    public void RemoveAll()
    {
        for (int i = Stack.Count - 2; i >= 0; i--)
        {
            if (i >= Stack.Count)
            {
                i = Stack.Count - 2; //有的UI面板会移除多个UI，这里还需要矫正一下下标
            }

            var index = i;
            if (index < 0)
            {
                return;
            }

            var ui = Stack[index];
            Destroy(ui);
        }
    }

    public T Find<T>(bool needActive = true) where T : UIBase
    {
        var type = typeof (T);
        return (T) Find(type,needActive);
    }

    public UIBase Find(Type type,bool needActive = true)
    {
        if (Dictionary.TryGetValue(type, out var result))
        {
            if (result.Active || !needActive)
            {
                return result;
            }
        }

        return null;
    }
    
    public UIBase Find(string name)
    {
        foreach (var node in Dictionary)
        {
            var value = node.Value;
            if (value.Name == name)
            {
                if (value.Active)
                    return value;
            }
        }
        return null;
    }

    public List<UIBase> FindAll<T>() where T : UIBase
    {
        var type = typeof (T);
        return FindAll(type);
    }

    public List<UIBase> FindAll(Type type)
    {
        List<UIBase> list;
        if (RepeatUI.TryGetValue(type, out list))
        {
            return list;
        }

        return null;
    }

    /// <summary>
    ///     Window得销毁不在这里调用而在OnRemoveWindow中触发.这里仅触发Window得动画和Window得池处理
    /// </summary>
    /// <param name="base"></param>
    /// <param name="force">强制卸载</param>
    public void Destroy(UIBase @base, bool force = false)
    {
        try
        {
            if (@base == null)
            {
                Log.Warning("销毁的UI界面不能为空,检查是否出现逻辑错误！！！");
                return;
            }

            if (@base.IsDisposed)
            {
                Stack.Remove(@base);
                RemoveNormalUi(@base);
                RemoveRepeatUi(@base);
                return;
            }

            if (@base.Widget.Pool && force == false)
            {
                var com = @base.GComponent;
                if (@base.Widget is UIWindow)
                {
                    GRoot.inst.HideWindow(@base.Window);
                    return;
                }
                else
                {
                    Stack.Remove(@base);
                    @base.BaseDisable();
                    GRoot.inst.RemoveChild(com, false);
                    //com.visible = false;
                }

                //com.displayObject.gameObject.hideFlags = HideFlags.HideInHierarchy;
            }
            else
            {
                //检测是否是重复类型的如果是则从另一个字典中进入
                if (@base.Widget.Repeat)
                {
                    RemoveRepeatUi(@base);
                }
                else
                {
                    if (Dictionary.ContainsKey(@base.Type) && !(@base.Widget is UIWindow))
                    {
                        RemoveNormalUi(@base);
                    }
                }

                if (@base.Widget is UIWindow)
                {
                    if (force == false)
                    {
                        GRoot.inst.HideWindow(@base.Window);
                        return;
                    }
                    else
                    {
                        @base.Window.OnClose(force);
                    }
                }
                else
                {
                    Stack.Remove(@base);
                    @base.BaseDisable();
                    @base.BaseDestroy();
                    @base.GComponent.Dispose();
                }
            }
            SetBackground();
        }
        catch (Exception e)
        {
            Debug.LogError("卸载UI发生错误,如果你是关闭Unity发生得问题可以无视,如果不是请截图给我\n" + e);
        }
    }

    public void SetBackground()
    {
        /*bool setBackgroud = false;
        for (int i = Stack.Count - 1; i >= 0; i--)
        {
            setBackgroud = SetBackground(Stack[i]);
            if (setBackgroud)
                break;
        }

        if (setBackgroud == false)
        {
            //不能走Destory避免堆栈溢出(递归调用)
            var blackground = Find<UI_BlackBackground>();
            if (blackground != null)
                blackground.CloseMySelf();
        }*/
    }

    public void Destroy<T>() where T : UIBase
    {
        var type = typeof (T);
        Destroy(type);
    }

    public void Destroy(Type type)
    {
        UIBase @base;
        Dictionary.TryGetValue(type, out @base);
        Destroy(@base);
    }

    public void DestroyAll<T>() where T : UIBase
    {
        var type = typeof (T);
        DestroyAll(type);
    }

    public void DestroyAll(Type type)
    {
        UIBase ui;
        if (Dictionary.TryGetValue(type, out ui))
        {
            Destroy(ui);
        }

        List<UIBase> uiList;
        if (RepeatUI.TryGetValue(type, out uiList))
        {
            int count = uiList.Count;
            for (int i = count - 1; i >= 0; i--)
            {
                Destroy(uiList[i]);
            }
        }
    }

    /// <summary>
    /// 切换场景的时候调用的函数.受到DontDestoryOnLoad影响
    /// </summary>
    public void UnLoadAllUI(bool affectDontDestory = true)
    {
        int pass = 0;
        for (var index = DictKeys.Count - 1; index >= 0; index--)
        {
            Type node = DictKeys[index];
            UIBase value = Dictionary[node];
            if (!value.Widget.DontDestroyOnLoad || affectDontDestory == false)
            {
                Destroy(value, true);
            }
            else
            {
                pass++;
            }

            //因为有的UI会自己移除他的附加UI.有可能会导致数组越界.
            index = DictKeys.Count - pass;
        }

        for (var index = RepeatKeys.Count - 1; index >= 0; index--)
        {
            var node = RepeatKeys[index];
            var list = RepeatUI[node];
            int count = list.Count;
            for (int i = count - 1; i >= 0; i--)
            {
                var value = list[i];
                if (!value.Widget.DontDestroyOnLoad || affectDontDestory == false)
                {
                    Destroy(value, true);
                }
            }
        }
    }

    private float Update()
    {
        int listCount = DictKeys.Count;
        for (var index = listCount - 1; index >= 0; index--)
        {
            var node = DictKeys[index];
            var value = Dictionary[node];
            if (value.GComponent != null && value.GComponent.isDisposed == false && value.Active)
            {
                value.Update();
            }
        }

        listCount = RepeatKeys.Count;
        for (var i = listCount - 1; i >= 0; i--)
        {
            var repeat = RepeatKeys[i];
            var list = RepeatUI[repeat];
            int count = list.Count;
            for (var index = count - 1; index >= 0; index--)
            {
                var value = list[index];
                if (value.GComponent != null && value.GComponent.isDisposed == false && value.Active)
                {
                    value.Update();
                }
            }
        }

        return 0;
    }

    private float LateUpdate()
    {
        int listCount = DictKeys.Count;
        for (var index = listCount - 1; index >= 0; index--)
        {
            var node = DictKeys[index];
            var value = Dictionary[node];
            if (value.GComponent != null && value.GComponent.isDisposed == false && value.Active)
            {
                value.LateUpdate();
            }
        }

        listCount = RepeatKeys.Count;
        for (var i = listCount - 1; i >= 0; i--)
        {
            var repeat = RepeatKeys[i];
            var list = RepeatUI[repeat];
            int count = list.Count;
            for (var index = count - 1; index >= 0; index--)
            {
                var value = list[index];
                if (value.GComponent != null && value.GComponent.isDisposed == false && value.Active)
                {
                    value.LateUpdate();
                }
            }
        }

        return 0;
    }

#if UNITY_EDITOR
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    private static void EDITOR_Reset()
    {
        /*FontManager.Clear();
        //GRoot._inst = null;
        NTexture.DisposeEmpty();
        var type = typeof(LineMesh);
        type.GetField("points", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new List<Vector3>());
        type.GetField("ts", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new List<float>());
        type = typeof(CaptureCamera);
        type.GetField("_main", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, null);
        type.GetField("_hiddenLayer", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, -1);
        type.GetField("_layer", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, -1);
        type = typeof(Image);
        type.GetField("gridX", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new float[4]);
        type.GetField("gridY", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new float[4]);
        type.GetField("gridTexX", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new float[4]);
        type.GetField("gridTexY", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new float[4]);
        type = typeof(GoWrapper);
        type.GetField("helperTransformList", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new List<Transform>());
        type = typeof(VertexBuffer);
        type.GetField("_pool", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new Stack<VertexBuffer>());
        type.GetField("helperV4List", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new List<Vector4>(4) { Vector4.zero, Vector4.zero, Vector4.zero, Vector4.zero });
        type = typeof(HitTestContext);
        type.GetField("raycastHits", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new Dictionary<Camera, RaycastHit?>());
        type = typeof(Stage);
        type.GetField("_inst", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, null);
        type.GetField("_clickTestThreshold", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, 0);
        type.GetField("_keyboard", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, null);
        type.GetField("sTempList1", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, null);
        type.GetField("sTempList2", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, null);
        type.GetField("sTempDict", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, null);
        type = typeof(EventContext);
        type.GetField("pool", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new Stack<EventContext>());
        type = typeof(GPath);
        type.GetField("helperList", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new List<GPathPoint>());
        type.GetField("splinePoints", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new List<Vector3>());
        type = typeof(PolygonMesh);
        type.GetField("sRestIndices", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, new List<int>());
        type = typeof(Controller);
        type.GetField("_nextPageId", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, (uint)0);
        type = typeof(BaseFont);
        type.GetField("textRebuildFlag", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, false);
        type = typeof(Timers);
        type.GetField("_inst", BindingFlags.Static | BindingFlags.NonPublic).SetValue(null, null);
        
        StageCamera.main = null;
        StageCamera.screenSizeVer = 1;
        StageCamera.DefaultCameraSize = 5;
        StageCamera.DefaultUnitsPerPixel = 0.02f;
        
        TranslationHelper.strings = new Dictionary<string, Dictionary<string, string>>();
        Stats.GraphicsCount = 0;
        Stats.ObjectCount = 0;
        Stats.LatestObjectCreation = 0;
        Stats.LatestGraphicsCreation = 0;
        HitTestContext.screenPoint =  Vector3.zero;
        HitTestContext.worldPoint = Vector3.zero;
        HitTestContext.direction = Vector3.zero;
        HitTestContext.forTouch = false;
        HitTestContext.camera = null;
        HitTestContext.layerMask = -1;
        HitTestContext.maxDistance = Mathf.Infinity;
        HitTestContext.cachedMainCamera = null;
        UpdateContext.current = null;
        UpdateContext.working = false;
        StageEngine.beingQuit = false;*/
    }
#endif
}