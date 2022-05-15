using UnityEngine;

namespace Core.Utils.Unity
{
    public static class MeshUtils
    {
        public static Vector3 GetRandomPointOnMesh(Mesh mesh)
        {
            float[] sizes = GetTriSizes(mesh.triangles, mesh.vertices);
            float[] cumulativeSizes = new float[sizes.Length];
            float total = 0;
    
            for (int i = 0; i < sizes.Length; i++)
            {
                total += sizes[i];
                cumulativeSizes[i] = total;
            }
    
            //so everything above this point wants to be factored out
    
            float randomsample = Random.value* total;
    
            int triIndex = -1;
            
            for (int i = 0; i < sizes.Length; i++)
            {
                if (randomsample <= cumulativeSizes[i])
                {
                    triIndex = i;
                    break;
                }
            }
    
            if (triIndex == -1) Debug.LogError("triIndex should never be -1");
    
            Vector3 a = mesh.vertices[mesh.triangles[triIndex * 3]];
            Vector3 b = mesh.vertices[mesh.triangles[triIndex * 3 + 1]];
            Vector3 c = mesh.vertices[mesh.triangles[triIndex * 3 + 2]];
    
            //generate random barycentric coordinates
    
            float r = Random.value;
            float s = Random.value;
    
            if(r + s >=1)
            {
                r = 1 - r;
                s = 1 - s;
            }
            //and then turn them back to a Vector3
            Vector3 pointOnMesh = a + r*(b - a) + s*(c - a);
            return pointOnMesh;
    
        }
    
        private static float[] GetTriSizes(int[] tris, Vector3[] verts)
        {
            int triCount = tris.Length / 3;
            float[] sizes = new float[triCount];
            for (int i = 0; i < triCount; i++)
            {
                sizes[i] = .5f*Vector3.Cross(verts[tris[i*3 + 1]] - verts[tris[i*3]], verts[tris[i*3 + 2]] - verts[tris[i*3]]).magnitude;
            }
            return sizes;
        }
    }
}
