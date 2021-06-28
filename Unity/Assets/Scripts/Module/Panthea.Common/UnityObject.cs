using System;
using System.Collections.Generic;
using UnityEngine;
using Object = UnityEngine.Object;

/// <summary>
/// 这是对Unity GameObject 方法的再封装.
/// 因为Unity再处理GameObject.xxx的时候并不是直接拿的缓存或者指针中的数据
/// 而是直接重新包装一个新的指针或者数据发送给c#.比如GameObject.transform.实际再底层等同于 GameObject.GetComponent<Transform>()
/// 而这个类就是为了避免这种情况的发生
/// 其次.通过使用这个类.我们能够很精确的知道GameObject中的Position和Rotation等方法是从何处调用的.方便调试
/// </summary>
public partial class UnityObject
{
    private class WrapComponents
    {
        /// <summary>
        /// 是否调用过GetComponents
        /// 通过添加这个接口我们避免AddComponent和GetComponent的时候也需要调用GetComponents生成列表.可以在一定程度提升性能
        /// </summary>
        public bool HasGetComponents = false;

        public List<object> Components = new List<object>();

        public object First()
        {
            if (Components.Count == 0)
            {
                return null;
            }

            return Components[0];
        }
    }

    private Transform mCachedTransform = null;

    /// <summary>
    /// 禁止暴露这个变量！！
    /// </summary>
    private Transform Transform
    {
        get
        {
            if (mCachedTransform == null)
            {
                mCachedTransform = GameObject.transform;
            }

            return mCachedTransform;
        }
    }

    /// <summary>
    /// 禁止暴露这个变量！！
    /// </summary>
    private GameObject GameObject { get; }

    private UnityObject mParent;

    public UnityObject Parent
    {
        get => mParent;
        set
        {
            mParent = value;
            Transform.parent = value.Transform;
        }
    }

    private Dictionary<Type, WrapComponents> mComponents { get; } = new Dictionary<Type, WrapComponents>();
    private Dictionary<string, UnityObject> mChild = new Dictionary<string, UnityObject>();
    private Dictionary<Type, List<IUnityModule>> mModule { get; } = new Dictionary<Type, List<IUnityModule>>();

    public Vector3 LocalPosition
    {
        get => Transform.localPosition;
        set => Transform.localPosition = value;
    }

    private string mName;

    public string Name
    {
        get
        {
            mName ??= GameObject.name;
            return mName;
        }
        set
        {
            mName = value;
            GameObject.name = value;
        }
    }

    public bool Active
    {
        get => GameObject.activeSelf;
        set
        {
            if (Active != value)
            {
                GameObject.SetActive(value);
            }
        }
    }

    public Vector3 Right
    {
        get => Transform.right;
        set => Transform.right = value;
    }

    public Vector3 Position
    {
        get => Transform.position;
        set => Transform.position = value;
    }

    public Quaternion LocalRotation
    {
        get => Transform.localRotation;
        set => Transform.localRotation = value;
    }

    public Quaternion Rotation
    {
        get => Transform.rotation;
        set => Transform.rotation = value;
    }

    public Vector3 EulerAngles
    {
        get => Transform.eulerAngles;
        set => Transform.eulerAngles = value;
    }

    public int Layer
    {
        get => GameObject.layer;
        set => GameObject.layer = value;
    }

    public Vector3 LocalEulerAngles
    {
        get => Transform.localEulerAngles;
        set => Transform.localEulerAngles = value;
    }

    public Vector3 LocalScale
    {
        get => Transform.localScale;
        set => Transform.localScale = value;
    }

    /// <summary>
    /// TODO 添加set方法
    /// </summary>
    public Vector3 LossyScale => Transform.lossyScale;

    public UnityObject(GameObject go)
    {
        GameObject = go;
    }

    public UnityObject(string name)
    {
        GameObject = new GameObject(name);
    }

    public Vector3 TransformPoint(Vector3 vec)
    {
        return Transform.TransformPoint(vec);
    }

    public Vector3 TransformPoint(float x, float y, float z)
    {
        return Transform.TransformPoint(x, y, z);
    }

    public T GetComponent<T>()
    {
        var type = typeof (T);
        WrapComponents wc = null;
        if (mComponents.TryGetValue(type, out wc))
        {
            return (T) wc.First();
        }
        else
        {
            var result = GameObject.GetComponent<T>();
            wc = new WrapComponents();
            mComponents.Add(type, wc);
            wc.Components.Add(result);
            return result;
        }
    }

    public List<T> GetComponents<T>()
    {
        var type = typeof (T);
        WrapComponents wc = null;
        List<T> result = new List<T>();
        if (mComponents.TryGetValue(type, out wc))
        {
            if (wc.HasGetComponents)
            {
                foreach (var node in wc.Components)
                {
                    result.Add((T) node);
                }

                return result;
            }
            else
            {
                wc.Components.Clear();
            }
        }

        var com = GameObject.GetComponents<T>();
        if (wc == null)
        {
            wc = new WrapComponents();
            mComponents.Add(type, wc);
        }

        foreach (var node in com)
        {
            wc.Components.Add(node);
            result.Add(node);
        }

        return result;
    }

    public T AddComponent<T>() where T : Component
    {
        var type = typeof (T);
        WrapComponents wc = null;
        if (!mComponents.TryGetValue(type, out wc))
        {
            wc = new WrapComponents();
            mComponents.Add(type, wc);
        }

        var result = GameObject.AddComponent<T>();
        wc.Components.Add(result);
        return result;
    }

    public UnityObject Find(string path)
    {
        UnityObject obj = null;
        if (!mChild.TryGetValue(path, out obj))
        {
            Transform transform = Transform.Find(path);
            if (transform != null)
            {
                obj = new UnityObject(transform.gameObject);
                mChild[path] = obj;
            }
        }

        return obj;
    }

    public void AddChild(Transform transform)
    {
        transform.parent = Transform;
    }

    /// <summary>
    /// 尽量少使用这个函数.因为牵扯的内容过多.所以不做缓存处理.建议代码再自己获取之后自己做好缓存
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public T[] GetComponentsInChildren<T>(bool includeInactive)
    {
        return GameObject.GetComponentsInChildren<T>(includeInactive);
    }

    public void LookAt(UnityObject target, Vector3? worldUp = null)
    {
        if (worldUp.HasValue)
        {
            Transform.LookAt(target.Transform, worldUp.Value);
        }
        else
        {
            Transform.LookAt(target.Transform);
        }
    }

    public void LookAt(Vector3 pos, Vector3? worldUp = null)
    {
        if (worldUp.HasValue)
        {
            Transform.LookAt(pos, worldUp.Value);
        }
        else
        {
            Transform.LookAt(pos);
        }
    }

    public bool Equals(GameObject obj)
    {
        return obj == GameObject;
    }

    public bool Equals(Transform obj)
    {
        return obj == Transform;
    }

    public void Dispose()
    {
        Object.Destroy(GameObject);
        return;
    }

    public bool IsDisposed()
    {
        return GameObject == null;
    }

    public UnityObject Clone()
    {
        return new UnityObject(Object.Instantiate(GameObject));
    }

    /// <summary>
    /// 添加模组,这个与Component不同.Component是实在的Unity Component
    /// 而Module则是与UnityObject 存在绑定关系的特殊类
    /// 比如VFX
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public void AddModule<T>(T module) where T : IUnityModule
    {
        var type = typeof (T);
        List<IUnityModule> modules = null;
        if (!mModule.TryGetValue(type, out modules))
        {
            modules = new List<IUnityModule>();
            mModule.Add(type, modules);
        }

        modules.Add(module);
    }

    public T GetModule<T>() where T : IUnityModule
    {
        var type = typeof (T);
        List<IUnityModule> modules = null;
        if (mModule.TryGetValue(type, out modules))
        {
            if (modules != null && modules.Count > 0)
            {
                return (T) modules[0];
            }
        }

        return default;
    }

    public List<T> GetModules<T>() where T : IUnityModule
    {
        var type = typeof (T);
        List<IUnityModule> modules = null;
        List<T> result = new List<T>();
        if (mModule.TryGetValue(type, out modules))
        {
            if (modules != null && modules.Count > 0)
            {
                foreach (var node in modules)
                {
                    result.Add((T) node);
                }
            }
        }

        return result;
    }

    public void DestoryModule(IUnityModule module)
    {
        var type = module.GetType();
        List<IUnityModule> modules = null;
        if (mModule.TryGetValue(type, out modules))
        {
            if (modules != null && modules.Count > 0)
            {
                for (var index = 0; index < modules.Count; index++)
                {
                    var node = modules[index];
                    if (node == module)
                    {
                        modules.RemoveAt(index);
                        break;
                    }
                }
            }
        }
    }
    public void DontDestoryOnLoad()
    {
        Object.DontDestroyOnLoad(GameObject);
    }
}