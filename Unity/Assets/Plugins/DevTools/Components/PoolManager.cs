// =====================================================================
// Copyright 2013-2017 Fluffy Underware
// All rights reserved
// 
// http://www.fluffyunderware.com
// =====================================================================

using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System;
using FluffyUnderware.DevTools.Extensions;

namespace FluffyUnderware.DevTools
{
    /// <summary>
    /// Manages the object's pools components
    /// </summary>
    [HelpURL(DTUtility.HelpUrlBase + "dtpoolmanager")]
    [ExecuteInEditMode]
    [DisallowMultipleComponent]
    public class PoolManager : MonoBehaviour
    {
        [Section("General")]
        [SerializeField]
        bool m_AutoCreatePools = true;

        [AsGroup(Expanded = false)]
        [SerializeField]
        PoolSettings m_DefaultSettings = new PoolSettings();

        public bool AutoCreatePools
        {
            get { return m_AutoCreatePools; }
            set
            {
                if (m_AutoCreatePools != value)
                    m_AutoCreatePools = value;
            }
        }

        public PoolSettings DefaultSettings
        {
            get { return m_DefaultSettings; }
            set
            {
                if (m_DefaultSettings != value)
                    m_DefaultSettings = value;
                if (m_DefaultSettings != null)
                    m_DefaultSettings.OnValidate();
            }
        }

        public bool IsInitialized { get; private set; }
        public int Count { get { return Pools.Count + TypePools.Count; } }

        public Dictionary<string, IPool> Pools = new Dictionary<string, IPool>();

        public Dictionary<Type, IPool> TypePools = new Dictionary<Type, IPool>();

        IPool[] mPools = new IPool[0];

#if UNITY_EDITOR
        void OnValidate()
        {
            DefaultSettings = m_DefaultSettings;
        }
#endif

        void OnDisable()
        {
            IsInitialized = false;
        }

        void Update()
        {
#if UNITY_EDITOR
            if (!Application.isPlaying)
                Initialize();
#endif
            if (!IsInitialized)
                Initialize();

            if (mPools.Length != TypePools.Count)
            {
                System.Array.Resize(ref mPools, TypePools.Count);
                TypePools.Values.CopyTo(mPools, 0);
            }
            for (int i = 0; i < mPools.Length; i++)
                mPools[i].Update();
        }

        void Initialize()
        {
            Pools.Clear();
            IPool[] goPools = GetComponents<IPool>();
            foreach (IPool p in goPools)
            {
                if (p is ComponentPool)
                {
                    if(Pools.ContainsKey(p.Identifier) == false)
                        Pools.Add(p.Identifier, p);
                    else
                    {
                        DTLog.Log("[DevTools] Found a duplicated ComponentPool for type " + p.Identifier + ". The duplicated pool will be destroyed");
#if UNITY_EDITOR
                        if (!Application.isPlaying)
                            DestroyImmediate(p as ComponentPool);
                        else
#endif
                            Destroy(p as ComponentPool);
                    }
                }
                else
                {
                    p.Identifier = GetUniqueIdentifier(p.Identifier);
                    Pools.Add(p.Identifier, p);
                }
            }

            IsInitialized = true;
        }

        public string GetUniqueIdentifier(string ident)
        {
            int num = 0;
            string id = ident;
            while (Pools.ContainsKey(id))
                id = ident + (++num).ToString();
            return id;
        }


        public Pool<T> GetTypePool<T>()
        {
            IPool res = null;

            if (!TypePools.TryGetValue(typeof(T), out res))
            {
                if (AutoCreatePools)
                {
                    res = CreateTypePool<T>();
                }
            }
            return (Pool<T>)res;
        }

        public ComponentPool GetComponentPool<T>() where T : Component
        {
            if (!IsInitialized)
                Initialize();
            IPool res = null;

            if (!Pools.TryGetValue(typeof(T).AssemblyQualifiedName, out res))
            {
                if (AutoCreatePools)
                {
                    res = CreateComponentPool<T>();
                }
            }
            return (ComponentPool)res;
        }

        public PrefabPool GetPrefabPool(string identifier, params GameObject[] prefabs)
        {
            if (!IsInitialized)
                Initialize();
            IPool pool;
            if (!Pools.TryGetValue(identifier, out pool))
            {
                if (AutoCreatePools)
                    pool = CreatePrefabPool(identifier, null, prefabs);
            }
            return (PrefabPool)pool;
        }

        public Pool<T> CreateTypePool<T>(PoolSettings settings = null)
        {
            PoolSettings s = settings ?? new PoolSettings(DefaultSettings);
            IPool res = null;
            if (!TypePools.TryGetValue(typeof(T), out res))
            {
                res = new Pool<T>(s);
                TypePools.Add(typeof(T), res);
            }
            return (Pool<T>)res;
        }

        public ComponentPool CreateComponentPool<T>(PoolSettings settings = null) where T : Component
        {
            if (!IsInitialized)
                Initialize();
            PoolSettings s = settings ?? new PoolSettings(DefaultSettings);
            IPool res = null;

            if (!Pools.TryGetValue(typeof(T).AssemblyQualifiedName, out res))
            {
                res = gameObject.AddComponent<ComponentPool>();
                ((ComponentPool)res).Initialize(typeof(T), s);
                Pools.Add(res.Identifier, res);
            }
            return (ComponentPool)res;
        }

        public PrefabPool CreatePrefabPool(string name, PoolSettings settings = null, params GameObject[] prefabs)
        {
            if (!IsInitialized)
                Initialize();
            PoolSettings s = settings ?? new PoolSettings(DefaultSettings);

            IPool pool = null;
            if (!Pools.TryGetValue(name, out pool))
            {
                PrefabPool p = gameObject.AddComponent<PrefabPool>();
                p.Initialize(name, s, prefabs);
                Pools.Add(name, p);
                return p;
            }
            return (PrefabPool)pool;
        }

        public List<IPool> FindPools(string identifierStartsWith)
        {
            List<IPool> res = new List<IPool>();
            foreach (KeyValuePair<string, IPool> kv in Pools)
                if (kv.Key.StartsWith(identifierStartsWith))
                    res.Add(kv.Value);
            return res;
        }

        public void DeletePools(string startsWith)
        {
            List<IPool> toDelete = FindPools(startsWith);
            for (int i = toDelete.Count - 1; i >= 0; i--)
                DeletePool(toDelete[i]);

        }

        public void DeletePool(IPool pool)
        {
            if (pool is PrefabPool || pool is ComponentPool)
            {
#if UNITY_EDITOR
                if (!Application.isPlaying)
                    Component.DestroyImmediate((MonoBehaviour)pool);
                else
#endif
                    Component.Destroy((MonoBehaviour)pool);

                Pools.Remove(pool.Identifier);
            }
        }

        public void DeletePool<T>()
        {
            TypePools.Remove(typeof(T));
        }
    }
}
