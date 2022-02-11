// =====================================================================
// Copyright 2013-2017 Fluffy Underware
// All rights reserved
// 
// http://www.fluffyunderware.com
// =====================================================================

using UnityEngine;
using System.Collections;

namespace FluffyUnderware.DevTools
{
    /// <summary>
    /// A component to display notes in the inspector
    /// </summary>
    [HelpURL(DTUtility.HelpUrlBase + "dtinspectornode")]
    public class InspectorNote : MonoBehaviour 
    {

        [TextArea(5,20)]
        [SerializeField]
        string m_Note;
    }
}
