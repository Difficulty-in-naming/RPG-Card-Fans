using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class MessageKit<T>
{
    private static MessageKit<T> _inst;
    public static MessageKit<T> Inst => _inst ??= new MessageKit<T>();
    public delegate void EventDelegate(T e);

    private readonly List<EventDelegate> mEvents = new(4);
    public void Add(EventDelegate del)
    {
        mEvents.Add(del);
    }

    public void Remove(EventDelegate del)
    {
        mEvents.Remove(del);
    }

    public void Send(T value)
    {
        for (int i = 0; i < mEvents.Count; i++)
        {
            mEvents[i](value);
        }
    }
}

public class MessageKit
{
    public delegate void EventDelegate<in T>(T e);
    private readonly Dictionary<Delegate, object> mHandleDispatcherLookup = new();
    private readonly Dictionary<EventKey, List<Action>> mEmptyKeyDispatcher = new(4);
    private readonly Dictionary<EventKey, List<Action<object>>> mAdvanceKeyHandlerDispatcher = new(4);
    
    private static MessageKit _inst;
    public static MessageKit Inst => _inst ??= new MessageKit();

    private MessageKit()
    {
    }

    public void Add<T>(EventDelegate<T> del)
    {
        if (mHandleDispatcherLookup.ContainsKey(del))
        {
            return;
        }

        // ReSharper disable once ConvertToLocalFunction
        MessageKit<T>.EventDelegate internalDelegate = e => del(e);
        mHandleDispatcherLookup[del] = internalDelegate;
        MessageKit<T>.Inst.Add(internalDelegate);
    }
    
    public void Add(EventKey key,Action<object> action)
    {
        if (!mAdvanceKeyHandlerDispatcher.TryGetValue(key, out var list))
        {
            list = new List<Action<object>>();
            mAdvanceKeyHandlerDispatcher.Add(key, list);
        }

        list.Add(action);
    }

    public void Add(EventKey key, Action action)
    {
        if (!mEmptyKeyDispatcher.TryGetValue(key, out var list))
        {
            list = new List<Action>();
            mEmptyKeyDispatcher.Add(key, list);
        }

        list.Add(action);
    }

    public void Remove<T>(EventDelegate<T> del)
    {
        if (mHandleDispatcherLookup.TryGetValue(del, out var internalDelegate))
        {
            MessageKit<T>.Inst.Remove((MessageKit<T>.EventDelegate)internalDelegate);
            mHandleDispatcherLookup.Remove(del);
        }
    }

    public void Remove(EventKey key, Action action)
    {
        if (mEmptyKeyDispatcher.TryGetValue(key, out var list))
        {
            list.Remove(action);
        }
    }
    
    public void Remove(EventKey key, Action<object> action)
    {
        if (mAdvanceKeyHandlerDispatcher.TryGetValue(key, out var list))
        {
            list.Remove(action);
        }
    }

    public void Send<T>(T value)
    {
        MessageKit<T>.Inst.Send(value);
    }

    public void Send(EventKey key)
    {
        if (mEmptyKeyDispatcher.TryGetValue(key, out var list))
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
        if (mAdvanceKeyHandlerDispatcher.TryGetValue(key, out var list))
        {
            for (var index = 0; index < list.Count; index++)
            {
                var node = list[index];
                node(value);
            }
        }
    }
}