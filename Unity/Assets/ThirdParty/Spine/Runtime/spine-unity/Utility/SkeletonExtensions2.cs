using System.Collections;
using System.Collections.Generic;
using Spine;
using UnityEngine;

namespace Spine.Unity
{
    public static class SkeletonExtensions2
    {
        #region Transform Modes

        public static bool InheritsRotation(this TransformMode mode)
        {
            const int RotationBit = 0;
            return ((int) mode & (1U << RotationBit)) == 0;
        }

        public static bool InheritsScale(this TransformMode mode)
        {
            const int ScaleBit = 1;
            return ((int) mode & (1U << ScaleBit)) == 0;
        }

        #endregion
    }
}