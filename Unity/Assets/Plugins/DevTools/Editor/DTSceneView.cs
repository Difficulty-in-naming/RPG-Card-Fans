// =====================================================================
// Copyright 2013-2017 Fluffy Underware
// All rights reserved
// 
// http://www.fluffyunderware.com
// =====================================================================

using UnityEngine;
using UnityEditor;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using FluffyUnderware.DevTools.Extensions;
using System;

namespace FluffyUnderware.DevToolsEditor
{
    public class DTSceneView : SceneView
    {

        #region ### Serialized fields ###
        #endregion

        #region ### Public Properties ###

        public bool In2DMode
        {
            get { return in2DMode; }
            set
            {
                in2DMode = value;
            }
        }

        public SceneViewState State
        {
            get
            {
                return mStateField.GetValue(this) as SceneViewState;
            }
            set
            {
                mStateField.SetValue(this, value);
            }
        }

        #endregion

        #region ### Privates Fields ###

        FieldInfo mStateField;

        #endregion

        #region ### Unity Callbacks ###
        /*! \cond UNITY */

        public override void OnEnable()
        {
            base.OnEnable();
            getInternals();
            SceneView.
#if UNITY_2019_1_OR_NEWER
duringSceneGui
#else
onSceneGUIDelegate
#endif
 += onScene;
        }

        public override void OnDisable()
        {
            SceneView.
#if UNITY_2019_1_OR_NEWER
duringSceneGui
#else
onSceneGUIDelegate
#endif
 -= onScene;
            base.OnDisable();
        }

        /*! \endcond */
        #endregion

        #region ### Public Static Methods ###
        #endregion

        #region ### Public Methods ###

        protected virtual void OnSceneGUI()
        {
        }

        #endregion

        #region ### Privates & Internals ###
        /*! \cond PRIVATE */

        void onScene(SceneView view)
        {
            if (EditorApplication.isCompiling)
            {
                SceneView.
#if UNITY_2019_1_OR_NEWER
duringSceneGui
#else
onSceneGUIDelegate
#endif
 -= onScene;
                Close();
                GUIUtility.ExitGUI();
            }
            if (view == this)
                OnSceneGUI();
        }

        void getInternals()
        {
            mStateField = GetType().FieldByName("m_SceneViewState", true, true);
        }



        /*! \endcond */
        #endregion

    }
}
