using System.Text;
using UnityEngine;

public static class SkinnedMeshRendererExtensions
{
    public static void SetRootBone(this SkinnedMeshRenderer meshRenderer, UnityObject uo)
    {
        meshRenderer.rootBone = uo.Transform;
    }
    
    public static void SetBones(this SkinnedMeshRenderer originMeshRenderer,UnityObject uo,string[] paths )
    {
        Transform[] bones = new Transform[paths.Length];
        for (int i = 0; i < paths.Length; i++)
        {
            bones[i] = uo.Find(paths[i])?.Transform;
        }

        originMeshRenderer.bones = bones;
    }
    
    public static string GetObjPath(Transform root, Transform me)
    {
        Transform parent = me;
        StringBuilder path = new StringBuilder(me.name);
        while (true)
        {
            parent = parent.parent;
            if (parent == root)
            {
                return path.ToString();
            }

            if (parent == null)
            {
                return path.ToString();
            }
            else
            {
                path.Insert(0, parent.name + "/");
            }
        }
    }
}
