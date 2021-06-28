using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MessageKit
{
    public delegate void EventDelegate<T>(T e) where T : IEventHandle;

    private delegate void EventDelegate(IEventHandle e);

    private readonly Dictionary<Type, EventDelegate> mHandleDispatcher = new Dictionary<Type, EventDelegate>();
    private readonly Dictionary<Delegate, EventDelegate> mHandleDispatcherLookup = new Dictionary<Delegate, EventDelegate>();
    private readonly Dictionary<EventKey, List<Action>> mEmptyKeyDispatcher = new Dictionary<EventKey, List<Action>>();
    private readonly Dictionary<EventKey, List<Action<object>>> mAdvanceKeyHandlerDispatcher = new Dictionary<EventKey, List<Action<object>>>();

    
    private static MessageKit _inst;
    public static MessageKit Inst => _inst ??= new MessageKit();

    private MessageKit()
    {
    }

    public void Add<T>(EventDelegate<T> del) where T : IEventHandle
    {
        var type = typeof (T);
        if (mHandleDispatcherLookup.ContainsKey(del))
        {
            return;
        }

        EventDelegate internalDelegate = (e) => del((T) e);
        mHandleDispatcherLookup[del] = internalDelegate;

        if (mHandleDispatcher.ContainsKey(type))
        {
            mHandleDispatcher[type] += internalDelegate;
        }
        else
        {
            mHandleDispatcher[type] = internalDelegate;
        }
    }
    
    public void Add(EventKey key,Action<object> action)
    {
        List<Action<object>> list;
        if (!mAdvanceKeyHandlerDispatcher.TryGetValue(key, out list))
        {
            list = new List<Action<object>>();
            mAdvanceKeyHandlerDispatcher.Add(key, list);
        }

        list.Add(action);
    }

    public void Add(EventKey key, Action action)
    {
        List<Action> list;
        if (!mEmptyKeyDispatcher.TryGetValue(key, out list))
        {
            list = new List<Action>();
            mEmptyKeyDispatcher.Add(key, list);
        }

        list.Add(action);
    }

    public void Remove<T>(EventDelegate<T> del) where T : IEventHandle
    {
        if (mHandleDispatcherLookup.TryGetValue(del, out var internalDelegate))
        {
            if (mHandleDispatcher.TryGetValue(typeof (T), out var tempDel))
            {
                tempDel -= internalDelegate;
                if (tempDel == null)
                {
                    mHandleDispatcher.Remove(typeof (T));
                }
                else
                {
                    mHandleDispatcher[typeof (T)] = tempDel;
                }
            }

            mHandleDispatcherLookup.Remove(del);
        }
    }

    public void Remove(EventKey key, Action action)
    {
        List<Action> list;
        if (mEmptyKeyDispatcher.TryGetValue(key, out list))
        {
            list.Remove(action);
        }
    }
    
    public void Remove(EventKey key, Action<object> action)
    {
        List<Action<object>> list;
        if (mAdvanceKeyHandlerDispatcher.TryGetValue(key, out list))
        {
            list.Remove(action);
        }
    }

    public void Send<T>(T value) where T : IEventHandle
    {
        var type = typeof (T);
        EventDelegate ed;
        if (mHandleDispatcher.TryGetValue(type, out ed))
        {
            ed(value);
        }
    }

    public void Send(EventKey key)
    {
        List<Action> list;
        if (mEmptyKeyDispatcher.TryGetValue(key, out list))
        {
            for (var index = 0; index < list.Count; index++)
            {
                var node = list[index];
                node();
            }
        }
    }
    
    public void Send(EventKey key,object value)
    {
        List<Action<object>> list;
        if (mAdvanceKeyHandlerDispatcher.TryGetValue(key, out list))
        {
            for (var index = 0; index < list.Count; index++)
            {
                var node = list[index];
                node(value);
            }
        }
    }
}