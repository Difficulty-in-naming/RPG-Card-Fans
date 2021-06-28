using System;
using System.Reflection;

namespace Manager
{
    public class Singleton
    {
        public virtual async void OnRelease()
        {
        }

        public virtual async void OnInit()
        {
        }
    }

    /// <summary>
    /// 用以标记类会单例类
    /// 便于后期管理和搜查问题
    /// 如果热更新需要卸载可以通过方法中的Release卸载资源
    /// 加载单例结束以后会返回加载完成的OnInit的方法
    /// 以代替Unity中的Awake
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class Singleton<T>: Singleton where T : Singleton
    {
        private static T mInst;
        private static object mLock = new object();

        public static T Inst
        {
            get
            {
                if (mInst == null)
                {
                    CreateInstance();
                }

                return mInst;
            }
            //这个做法是不对的但是因为有的存档数据是在Manager里面的.所以不得已设置了可以被set
            set => mInst = value;
        }

        private static void CreateInstance()
        {
            lock (mLock)
            {
                if (mInst == null)
                {
                    Type t = typeof (T);
                    mInst = (T) t.GetConstructors(BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public)[0].Invoke(null);
                    mInst.OnInit();
                }
            }
        }

        public void Dispose()
        {
            OnRelease();
            mInst = null;
        }
    }
}