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
/// SetMaterial方法在UnityObjectMaterialExtensions类中.这是一个扩展类
/// </summary>
public partial class UnityObject
{
    //Unity 不会再一帧内迅速刷新GameObject的状态.所以我们需要加入一个自己的状态
    private bool mDisposed = false;
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
    internal Transform Transform
    {
        get
        {
            if (!mCachedTransform)
            {
                mCachedTransform = GameObject.transform;
            }

            return mCachedTransform;
        }
    }

    /// <summary>
    /// 禁止暴露这个变量！！
    /// </summary>
    internal GameObject GameObject { get; }

    private UnityObject mParent;

    public UnityObject Parent
    {
        get
        {
            return mParent ??= new UnityObject(Transform.parent.gameObject);
        }
        set
        {
            mParent = value;
            Transform.parent = value.Transform;
        }
    }

    private Dictionary<Type, WrapComponents> mComponents { get; } = new Dictionary<Type, WrapComponents>();
    //需要经常访问名字的会存储在这
    private Dictionary<string, UnityObject> mFindChildCache = new Dictionary<string, UnityObject>();
    //为了避免GC我们在这里存储不常访问名字的列表
    private List<UnityObject> mAllChildren;
    private Dictionary<Type, List<AUnityModule>> mModule { get; } = new Dictionary<Type, List<AUnityModule>>();
    
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
    
    public float X
    {
        get => Transform.position.x;
        set
        {
            var pos = Transform.position;
            pos.x = value;
            Transform.position = pos; 
        }
    }

    public float Y
    {
        get => Transform.position.y;
        set
        {
            var pos = Transform.position;
            pos.y = value;
            Transform.position = pos; 
        }
    }
    
    public float Z
    {
        get => Transform.position.z;
        set
        {
            var pos = Transform.position;
            pos.z = value;
            Transform.position = pos; 
        }
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
    
    public float LocalScaleX
    {
        get => Transform.localScale.x;
        set
        {
            var scale = Transform.localScale;
            scale.x = value;
            Transform.localScale = scale;
        }
    }
    
    public float LocalScaleY
    {
        get => Transform.localScale.y;
        set
        {
            var scale = Transform.localScale;
            scale.y = value;
            Transform.localScale = scale;
        }
    }

    
    public float LocalScaleZ
    {
        get => Transform.localScale.z;
        set
        {
            var scale = Transform.localScale;
            scale.z = value;
            Transform.localScale = scale;
        }
    }


    public Vector3 Forward
    {
        get => Transform.forward;
    }
    
    public Vector3 Up
    {
        get => Transform.up;
    }

    public Matrix4x4 WorldMatrix
    {
        get => Transform.localToWorldMatrix;
    }
    
    /// <summary>
    /// TODO 添加set方法
    /// </summary>
    public Vector3 LossyScale => Transform.lossyScale;

    public void RemoveComponents<T>() where T : UnityEngine.Object
    {
        Type t = typeof(T);
        var components = this.GetComponents<T>();
        foreach (var node in components)
        {
            Object.Destroy(node);
        }

        mComponents.Remove(t);
    }

    public UnityObject(GameObject go)
    {
        GameObject = go;
        Awake();
        Start();
    }

    public UnityObject(string name)
    {
        GameObject = new GameObject(name);
        Awake();
        Start();
    }

    protected virtual void Awake()
    {
    }

    protected virtual void Start()
    {
    }
    
    public Vector3 TransformPoint(Vector3 vec)
    {
        return Transform.TransformPoint(vec);
    }

    public Vector3 TransformPoint(float x, float y, float z)
    {
        return Transform.TransformPoint(x, y, z);
    }

    public T GetComponent<T>() where T : Object
    {
        var type = typeof (T);
        WrapComponents wc = null;
        if (mComponents.TryGetValue(type, out wc))
        {
            return (T) wc.First();
        }
        else
        {
            var result = GameObject.GetComponent<T>() as Object;
            if (result)
            {
                wc = new WrapComponents();
                mComponents.Add(type, wc);
                wc.Components.Add(result);
            }
            return (T)result;
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
        mFindChildCache.TryGetValue(path, out var obj);
        if(obj == null || obj.IsDisposed())
        {
            Transform transform = Transform.Find(path);
            if (transform)
            {
                obj = new UnityObject(transform.gameObject);
                mFindChildCache[path] = obj;
            }
        }

        return obj;
    }

    public void SetLayer(int layer,bool includeChildren)
    {
        if (includeChildren)
        {
            foreach (var node in GetChildren())
            {
                node.Layer = layer;
            }
        }

        Layer = layer;
    }
    
    public void AddChild(Transform transform)
    {
        transform.parent = Transform;
        if (mAllChildren != null)
            mAllChildren.Add(new UnityObject(transform.gameObject));
    }
    
    public void AddChild(UnityObject uo)
    {
        uo.Parent = this;
        if(mAllChildren != null)
            mAllChildren.Add(uo);
    }

    public UnityObject GetChild(string name)
    {
        return Find(name);
    }

    public void SetParent(UnityObject uo)
    {
        Parent = uo;
    }
    
    public List<T> GetComponentsInChildren<T>(bool includeInactive = false) where T : UnityEngine.Object
    {
        var list = GetChildren();
        list.Insert(0, this);
        var com = new List<T>();
        foreach (var node in list)
        {
            if (!includeInactive)
            {
                if (!node.Active)
                    continue;
            }
            var t = node.GetComponent<T>();
            if(t != null)
                com.Add(t);
        }
        return com;
    }

    public List<UnityObject> GetChildren()
    {
        if (mAllChildren == null)
        {
            InternalGetChildren(this);
        }

        return mAllChildren;
    }

    private List<UnityObject> InternalGetChildren(UnityObject parent)
    {
        mAllChildren ??= new List<UnityObject>();
        foreach (object node in parent.Transform)
        {
            var transform = ((Transform) node);
            var gameObject = transform.gameObject;
            if (!gameObject)
            {
                Log.Error("物体丢失:" + transform);
            }
            else
            {
                var uo = new UnityObject(gameObject)
                {
                    Parent = this
                };
                mAllChildren.Add(uo);
                mAllChildren.AddRange(uo.InternalGetChildren(uo));
            }

        }
        return mAllChildren;
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

    public void Rotate(Vector3 vec)
    {
        Transform.Rotate(vec);
    }

    public bool Equals(GameObject obj)
    {
        return obj == GameObject;
    }

    public bool Equals(Transform obj)
    {
        return obj == Transform;
    }

    public virtual void Dispose()
    {
        if (GameObject)
        {
            mParent?.mAllChildren?.Remove(this);
            Object.Destroy(GameObject);
            mDisposed = true;
        }
    }

    public bool IsDisposed()
    {
        return !GameObject || mDisposed;
    }

    public UnityObject Clone()
    {
        return new UnityObject(Object.Instantiate(GameObject));
    }

    public int GetInstanceID()
    {
        return Transform.GetInstanceID();
    }
    
    public void DontDestoryOnLoad()
    {
        Object.DontDestroyOnLoad(GameObject);
    }
}