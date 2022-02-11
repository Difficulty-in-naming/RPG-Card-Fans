// =====================================================================
// Copyright 2013-2017 Fluffy Underware
// All rights reserved
// 
// http://www.fluffyunderware.com
// =====================================================================

using System;
using UnityEngine;
using System.Collections;

namespace FluffyUnderware.DevTools
{
    /// <summary>
    /// A MonoBehaviour with a version number, useful to handle upgrades if needed
    /// </summary>
    public abstract class DTVersionedMonoBehaviour : MonoBehaviour
    {
        [SerializeField, HideInInspector]
        string m_Version;

        /// <summary>
        /// Gets the version of this component
        /// </summary>
        public string Version
        {
            get { return m_Version; }
            protected set { m_Version = value; }
        }

        /// <summary>
        /// Destroys the gameobject
        /// </summary>
        public void Destroy()
        {
            if (Application.isPlaying)
                GameObject.Destroy(gameObject);
            else
                GameObject.DestroyImmediate(gameObject);
        }
    }
}
