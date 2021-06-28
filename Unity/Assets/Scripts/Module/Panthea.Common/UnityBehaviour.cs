using System;
using System.Collections.Generic;
using UnityEngine;

public class UnityBehaviour: MonoBehaviour
{
    private static bool ApplicationIsQuitting = false;

    private void Start()
    {
        UnityLifeCycleKit.Inst = this;
        DontDestroyOnLoad(gameObject);
    }

    private UnityBehaviour()
    {
    }

    private void OnDestroy()
    {
        ApplicationIsQuitting = true;
    }

    #region TimeControl

    private int mCountingUpdateNum = 0;
    private int mCountingFixedUpdateNum = 0;
    private int mCountingLateUpdateNum = 0;

    public class UpdateData
    {
        public ulong InstanceId;
        public float Count;
        public Func<float> Func;
        public object[] Args;
    }

    private List<UpdateData> mUpdateFunc = new List<UpdateData>();
    private List<UpdateData> mFixedUpdate = new List<UpdateData>();
    private List<UpdateData> mLateUpdate = new List<UpdateData>();
    private ulong mGuidCounting;

    public event Action ApplicationQuitEvent;

    public UpdateData AddUpdate(Func<float> func, params object[] args)
    {
        mCountingUpdateNum++;
        return AddUpdate(mUpdateFunc, func, args);
    }

    public UpdateData AddFixedUpdate(Func<float> func, params object[] args)
    {
        mCountingFixedUpdateNum++;
        return AddUpdate(mFixedUpdate, func, args);
    }

    public UpdateData AddLateUpdate(Func<float> func, params object[] args)
    {
        mCountingLateUpdateNum++;
        return AddUpdate(mLateUpdate, func, args);
    }

    private UpdateData AddUpdate(List<UpdateData> list, Func<float> func, params object[] args)
    {
        var data = new UpdateData { Func = func, Args = args, InstanceId = mGuidCounting++ };
        list.Add(data);
        return data;
    }

    public void RemoveUpdate(Func<float> func)
    {
        for (int i = 0; i < mCountingUpdateNum; i++)
        {
            if (mUpdateFunc[i].Func.Equals(func))
            {
                mCountingUpdateNum--;
                mUpdateFunc.RemoveAt(i);
                return;
            }
        }
    }

    public void RemoveFixedUpdate(Func<float> func)
    {
        for (int i = 0; i < mCountingFixedUpdateNum; i++)
        {
            if (mFixedUpdate[i].Func == func)
            {
                mCountingFixedUpdateNum--;
                mFixedUpdate.RemoveAt(i);
                return;
            }
        }
    }

    public void RemoveLateUpdate(Func<float> func)
    {
        for (int i = 0; i < mCountingLateUpdateNum; i++)
        {
            if (mLateUpdate[i].Func == func)
            {
                mCountingLateUpdateNum--;
                mLateUpdate.RemoveAt(i);
                return;
            }
        }
    }

    public void RemoveUpdate(UpdateData data)
    {
        if (data?.Func != null)
        {
            RemoveUpdate(data.Func);
        }
    }

    public void RemoveFixedUpdate(UpdateData data)
    {
        if (data?.Func != null)
        {
            RemoveFixedUpdate(data.Func);
        }
    }

    public void RemoveLateUpdate(UpdateData data)
    {
        if (data?.Func != null)
        {
            RemoveLateUpdate(data.Func);
        }
    }

    private void Update()
    {
        UpdateData data;
        for (int i = mCountingUpdateNum - 1; i >= 0; i--)
        {
            data = mUpdateFunc[i];
            if (data.Count > 0)
            {
                data.Count -= Time.deltaTime;
                mUpdateFunc[i] = data;
                continue;
            }

            data.Count = data.Func();
            if (data.Count == -1)
            {
                RemoveUpdate(data);
            }
            else if (data.Count > i)
            {
                mUpdateFunc[i] = data;
            }
        }
    }

    private void FixedUpdate()
    {
        UpdateData data;
        for (int i = mCountingFixedUpdateNum - 1; i >= 0; i--)
        {
            data = mFixedUpdate[i];
            if (data.Count > 0)
            {
                data.Count -= Time.deltaTime;
                mFixedUpdate[i] = data;
                continue;
            }

            data.Count = data.Func();
            if (data.Count == -1)
            {
                RemoveFixedUpdate(data);
            }
            else if (data.Count > i)
            {
                mFixedUpdate[i] = data;
            }
        }
    }

    private void LateUpdate()
    {
        UpdateData data;
        for (int i = mCountingLateUpdateNum - 1; i >= 0; i--)
        {
            data = mLateUpdate[i];
            if (data.Count > 0)
            {
                data.Count -= Time.deltaTime;
                mLateUpdate[i] = data;
                continue;
            }

            data.Count = data.Func();
            if (data.Count == -1)
            {
                RemoveLateUpdate(data);
            }
            else if (data.Count > i)
            {
                mLateUpdate[i] = data;
            }
        }
    }

    #endregion

    private void OnApplicationQuit()
    {
        if (ApplicationQuitEvent != null)
        {
            ApplicationQuitEvent();
        }
    }
}