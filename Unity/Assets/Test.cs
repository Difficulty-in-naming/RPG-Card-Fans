using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using FairyGUI;
using Spine.Unity;
using UnityEngine;
using Object = System.Object;

namespace DefaultNamespace
{
    public class Test : MonoBehaviour
    {
        [Range(0,10)]
        public float xxx;
        public async void Start()
        {
            var color = new Color();
            /*var data = ResourcesManager.LoadSpine(Application.dataPath + "/Res/ironclad/skeleton.atlas",
                Application.dataPath + "/Res/ironclad/skeleton.json",
                Application.dataPath + "/Res/ironclad/ironclad.png");
            var runtimeSkeletonAnimation = SkeletonAnimation.NewSkeletonAnimationGameObject(data);

            // Extra Stuff
            runtimeSkeletonAnimation.Initialize(false);
            var x = FindObjectsOfType<Camera>();
            transform.position = new Vector3(1, 2, -10);*/
            /*File.ReadAllText("xxx", Encoding.UTF8);
            var obj = GameObject.CreatePrimitive(PrimitiveType.Cube);
            var renderer = obj.GetComponent<Renderer>();
            var block = new MaterialPropertyBlock();
            block.SetColor("_Color",new Color(255,0,0));
            renderer.SetPropertyBlock(block);
            block.Clear();
            renderer.SetPropertyBlock(null);*/
        }

        void Update()
        { 
        }
    }
}