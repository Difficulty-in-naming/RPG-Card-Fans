using System.Collections;
using System.Collections.Generic;
using System.Text;
using UnityEngine;

public class GameObjectUtils
{
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