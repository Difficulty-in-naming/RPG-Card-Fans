// =====================================================================
// Copyright 2013-2017 Fluffy Underware
// All rights reserved
// 
// http://www.fluffyunderware.com
// =====================================================================

using UnityEngine;
using UnityEditor;
using UnityEditor.AnimatedValues;
using UnityEngine.Events;

namespace FluffyUnderware.DevToolsEditor.Data{
    [System.Serializable]
    public class AnimVector2 : BaseAnimValue<Vector2>
    {
        [SerializeField]
        private Vector3 m_Value;
        public AnimVector2()
            : base(Vector2.zero)
        {
        }
        public AnimVector2(Vector3 value)
            : base(value)
        {
        }
        public AnimVector2(Vector2 value, UnityAction callback)
            : base(value, callback)
        {
        }
        protected override Vector2 GetValue()
        {
            this.m_Value = Vector2.Lerp(base.start, base.target, base.lerpPosition);
            return this.m_Value;
        }
    }
}
