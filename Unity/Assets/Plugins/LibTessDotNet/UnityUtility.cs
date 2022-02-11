using UnityEngine;


namespace FluffyUnderware.Curvy.ThirdParty.LibTessDotNet
{
    public static class LibTessVector3Extension
    {
        public static Vec3 Vec3(this Vector3 v)
        {
            return new Vec3() { X = v.x, Y = v.y, Z = v.z };
        }

        public static ContourVertex ContourVertex(this Vector3 v)
        {
            var r = new ContourVertex();
            r.Position = v.Vec3();
            return r;
        }

    }

    public static class LibTessV3Extension
    {
        public static Vector3 Vector3(this Vec3 v)
        {
            return new Vector3(v.X, v.Y, v.Z);
        }
    }

    


    public static class UnityLibTessUtility
    {
        public static ContourVertex[] ToContourVertex(Vector3[] v, bool zeroZ=false)
        {
            var res = new ContourVertex[v.Length];
            for (int i = 0; i < v.Length; i++)
            {
                res[i].Position.X = v[i].x;
                res[i].Position.Y = v[i].y;
                res[i].Position.Z = (zeroZ) ? 0 : v[i].z;
            }
            return res;
        }

        public static Vector3[] FromContourVertex(ContourVertex[] v)
        {
            var res = new Vector3[v.Length];
            SetFromContourVertex(ref res, ref v);
            return res;
        }

        public static void SetFromContourVertex(ref Vector3[] v3Array, ref ContourVertex[] cvArray)
        {
            System.Array.Resize(ref v3Array, cvArray.Length);
            for (int i = 0; i < v3Array.Length; i++)
            {
                v3Array[i].x = cvArray[i].Position.X;
                v3Array[i].y = cvArray[i].Position.Y;
                v3Array[i].z = cvArray[i].Position.Z;
            }
        }

        public static void SetToContourVertex(ref ContourVertex[] cvArray, ref Vector3[] v3Array)
        {
            System.Array.Resize(ref cvArray, v3Array.Length);
            for (int i = 0; i < cvArray.Length; i++)
            {
                cvArray[i].Position.X = v3Array[i].x;
                cvArray[i].Position.Y = v3Array[i].y;
                cvArray[i].Position.Z = v3Array[i].z;
            }
        }
        
    }
}