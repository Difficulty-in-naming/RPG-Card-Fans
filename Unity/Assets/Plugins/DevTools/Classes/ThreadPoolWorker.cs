// =====================================================================
// Copyright 2013-2017 Fluffy Underware
// All rights reserved
// 
// http://www.fluffyunderware.com
// =====================================================================

using UnityEngine;
using System.Collections;
using System;
using System.Collections.Generic;
using UnityEngine.Assertions;
#if !UNITY_WSA && !UNITY_WEBGL
using System.Threading;
#endif

namespace FluffyUnderware.DevTools
{
    /// <summary>
    /// A class to execute actions in a multi-threaded way
    /// </summary>
    /// <typeparam name="T">The type of the action input</typeparam>
    public class ThreadPoolWorker<T> : IDisposable
    {
        //TODO use Windows.System.Threading.ThreadPool.RunAsync(workItem => SomeMethod()); #if NETFX_CORE
#if !UNITY_WSA && !UNITY_WEBGL
        private readonly SimplePool<QueuedCallback> queuedCallbackPool = new SimplePool<QueuedCallback>(4);
        private readonly SimplePool<LoopState<T>> loopStatePool = new SimplePool<LoopState<T>>(4);

        private int _remainingWorkItems = 1;
        private ManualResetEvent _done = new ManualResetEvent(false);
        private WaitCallback handleWorkItemCallBack;
        private WaitCallback handleLoopCallBack;

        public ThreadPoolWorker()
        {
            handleWorkItemCallBack = o =>
            {
                QueuedCallback queuedCallback = (QueuedCallback)o;
                try
                {
                    queuedCallback.Callback(queuedCallback.State);
                }
                finally
                {
                    lock (queuedCallbackPool)
                        queuedCallbackPool.ReleaseItem(queuedCallback);
                    DoneWorkItem();
                }
            };

            handleLoopCallBack = state =>
            {
                LoopState<T> loopS = (LoopState<T>)state;
                for (int i = loopS.StartIndex; i <= loopS.EndIndex; i++)
                {
                    loopS.Action(loopS.Items[i]);
                }
                lock (loopStatePool)
                    loopStatePool.ReleaseItem(loopS);
            };
        }

        public void ParralelFor(Action<T> action, List<T> list)
        {
            int threadsToUseCount;
            {
                int availableThreads;
#if NET_4_6
                int temp;
                ThreadPool.GetAvailableThreads(out availableThreads, out temp);
#else
                availableThreads = Environment.ProcessorCount - 1;
#endif
                threadsToUseCount = 1 /*main thread*/ + Math.Min(availableThreads, Environment.ProcessorCount - 1 /*keep one processor for the main thead*/);
            }
            int iterationsCount = list.Count;
            //BUG a bug in iterationPerThread leads to sometimes not using all available threads. For example, if you have 5 items and 4 cores, only 3 cores will be used
            int iterationPerThread = threadsToUseCount == 1
                ? iterationsCount
                : (int)Math.Ceiling((float)iterationsCount / threadsToUseCount);
#if CURVY_SANITY_CHECKS
            Assert.IsTrue(iterationPerThread * threadsToUseCount >= iterationsCount);
#endif
            int currentIndex = 0;
            while (currentIndex < iterationsCount)
            {
                int endEndex = Math.Min(currentIndex + iterationPerThread - 1, iterationsCount - 1);

                if (endEndex == iterationsCount - 1)
                {
                    //Debug.LogError("Main thread " + " from " + currentIndex + " to " + endEndex);

                    for (int i = currentIndex; i <= endEndex; i++)
                        action(list[i]);
                }
                else
                {

                    QueuedCallback queuedCallback;
                    {
                        lock (queuedCallbackPool)
                            queuedCallback = queuedCallbackPool.GetItem();
                    }


                    LoopState<T> loopState;
                    {
                        lock (loopStatePool)
                            loopState = loopStatePool.GetItem();
                    }

                    loopState.StartIndex = (short)currentIndex;
                    loopState.EndIndex = (short)endEndex;
                    loopState.Action = action;
                    loopState.Items = list;

                    queuedCallback.State = loopState;
                    queuedCallback.Callback = handleLoopCallBack;

                    ThrowIfDisposed();
                    //Debug.LogWarning("New thread " + " from "+ loopState.StartIndex +  " to " + loopState.EndIndex);
                    lock (_done)
                        _remainingWorkItems++;
                    ThreadPool.QueueUserWorkItem(handleWorkItemCallBack, queuedCallback);
                }
                currentIndex = endEndex + 1;
            }

            WaitAll(-1, false);
        }

        bool WaitAll(int millisecondsTimeout, bool exitContext)
        {
            ThrowIfDisposed();
            DoneWorkItem();
            bool rv = _done.WaitOne(millisecondsTimeout, exitContext);
            lock (_done)
            {
                if (rv)
                {
                    _remainingWorkItems = 1;
                    _done.Reset();
                }
                else
                    _remainingWorkItems++;
            }
            return rv;
        }

        private void ThrowIfDisposed()
        {
            if (_done == null)
                throw new ObjectDisposedException(GetType().Name);
        }

        private void DoneWorkItem()
        {
            lock (_done)
            {
                --_remainingWorkItems;
                if (_remainingWorkItems == 0)
                    _done.Set();
            }
        }

        public void Dispose()
        {
            if (_done != null)
            {
                ((IDisposable)_done).Dispose();
                _done = null;
            }
        }
#else
        public ThreadPoolWorker()
        {
        }

        public void ParralelFor(Action<T> action, List<T> list)
        {
            for (var i = 0; i < list.Count; i++)
                action(list[i]);
        }

        public void Dispose()
        {
        }
#endif
    }

    internal class SimplePool<T> where T : new()
    {
        private readonly List<T> freeItemsBackfield;

        public SimplePool(int preCreatedElementsCount)
        {
            freeItemsBackfield = new List<T>();
            for (int i = 0; i < preCreatedElementsCount; i++)
                freeItemsBackfield.Add(new T());
        }

        public T GetItem()
        {
            T item;
            if (freeItemsBackfield.Count == 0)
                item = new T();
            else
            {
                int lastIndex = freeItemsBackfield.Count - 1;
                item = freeItemsBackfield[lastIndex];
                freeItemsBackfield.RemoveAt(lastIndex);
            }
            return item;
        }

        public void ReleaseItem(T item)
        {
            freeItemsBackfield.Add(item);
        }
    }

#if !UNITY_WSA && !UNITY_WEBGL
    internal class QueuedCallback
    {
        public WaitCallback Callback;
        public object State;
    }

    internal class LoopState<T>
    {
        public short StartIndex;
        public short EndIndex;
        public List<T> Items;
        public Action<T> Action;
    }
#endif


    /// <summary>
    /// This class is not very optimized. For better performance, use the generic version of ThreadPoolWorker instead
    /// </summary>
#if !UNITY_WSA && !UNITY_WEBGL
    public class ThreadPoolWorker : IDisposable
    {
        private int _remainingWorkItems = 1;
        private ManualResetEvent _done = new ManualResetEvent(false);

        public void QueueWorkItem(WaitCallback callback)
        {
            QueueWorkItem(callback, null);
        }

        public void QueueWorkItem(Action act)
        {
            QueueWorkItem(act, null);
        }

        public void ParralelFor<T>(Action<T> action, List<T> list)
        {
            int threadsToUseCount;
            {
                int availableThreads;
#if NET_4_6
                int temp;
                ThreadPool.GetAvailableThreads(out availableThreads, out temp);
#else
                availableThreads = Environment.ProcessorCount - 1;
#endif
                threadsToUseCount = 1 /*main thread*/ + Math.Min(availableThreads, Environment.ProcessorCount - 1 /*keep one processor for the main thead*/);
            }
            int iterationsCount = list.Count;
            if (threadsToUseCount == 1 || iterationsCount == 1)
            {
                for (int i = 0; i < iterationsCount; i++)
                {
                    action(list[i]);
                }
            }
            else
            {
                int iterationPerThread = (int)Math.Ceiling((float)iterationsCount / threadsToUseCount);
                int currentIndex = 0;
                while (currentIndex < iterationsCount)
                {
                    QueuedCallback queuedCallback = new QueuedCallback();

                    int endEndex = Math.Min(currentIndex + iterationPerThread, iterationsCount - 1);

                    LoopState<T> loopState = new LoopState<T>();
                    loopState.StartIndex = (short)currentIndex;
                    loopState.EndIndex = (short)endEndex;
                    loopState.Action = action;
                    loopState.Items = list;
                    queuedCallback.State = loopState;

                    queuedCallback.Callback = state =>
                    {
                        LoopState<T> loopS = (LoopState<T>)state;
                        for (int i = loopS.StartIndex; i <= loopS.EndIndex; i++)
                        {
                            loopS.Action(loopS.Items[i]);
                        }
                    };


                    QueueWorkItem(queuedCallback);

                    currentIndex = endEndex + 1;
                }
            }
        }

        private void QueueWorkItem(QueuedCallback callback)
        {
            ThrowIfDisposed();
            lock (_done)
                _remainingWorkItems++;
            ThreadPool.QueueUserWorkItem(new WaitCallback(HandleWorkItem), callback);
        }

        public void QueueWorkItem(WaitCallback callback, object state)
        {
            QueuedCallback qc = new QueuedCallback();
            qc.Callback = callback;
            qc.State = state;
            QueueWorkItem(qc);
        }

        public void QueueWorkItem(Action act, object state)
        {
            QueuedCallback qc = new QueuedCallback();
            qc.Callback = (x => act());
            qc.State = state;
            QueueWorkItem(qc);
        }

        public bool WaitAll()
        {
            return WaitAll(-1, false);
        }

        public bool WaitAll(TimeSpan timeout, bool exitContext)
        {
            return WaitAll((int)timeout.TotalMilliseconds, exitContext);
        }

        public bool WaitAll(int millisecondsTimeout, bool exitContext)
        {
            ThrowIfDisposed();
            DoneWorkItem();
            bool rv = _done.WaitOne(millisecondsTimeout, exitContext);
            lock (_done)
            {
                if (rv)
                {
                    _remainingWorkItems = 1;
                    _done.Reset();
                }
                else
                    _remainingWorkItems++;
            }
            return rv;
        }

        private void HandleWorkItem(object state)
        {
            QueuedCallback qc = (QueuedCallback)state;
            try
            {
                qc.Callback(qc.State);
            }
            finally
            {
                DoneWorkItem();
            }
        }

        private void DoneWorkItem()
        {
            lock (_done)
            {
                --_remainingWorkItems;
                if (_remainingWorkItems == 0)
                    _done.Set();
            }
        }

        private void ThrowIfDisposed()
        {
            if (_done == null)
                throw new ObjectDisposedException(GetType().Name);
        }

        public void Dispose()
        {
            if (_done != null)
            {
                ((IDisposable)_done).Dispose();
                _done = null;
            }
        }
    }
#else
    public class ThreadPoolWorker{}
#endif

}
