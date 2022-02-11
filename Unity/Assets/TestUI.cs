using System.Collections;
using System.Collections.Generic;
using System.IO;
using Panthea.UI;
using UnityEngine;

public class TestUI : MonoBehaviour
{
    public int number;
    public float radius;
    public Vector2 StartPoint;
    public Vector2 EndPoint;
    public Vector2 ControlPoint1;
    public Vector2 ControlPoint2;
    public int PointNumber;
    public List<Transform> Transforms = new List<Transform>();
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        for (var i =0; i<number; i+=1)     
        {
            var angle = (i * Mathf.PI / PointNumber);
            var pos = new Vector3 (Mathf.Cos(angle), Mathf.Sin(angle) *0.33f,0 ) * radius;
            GameObject obj;
            if (Transforms.Count <= i)
            {
                obj = Instantiate(Resources.Load<GameObject>("GameObject"));
                Transforms.Add(obj.transform);
            }
            obj = Transforms[i].gameObject;
            obj.SetActive(true);
            obj.transform.position = pos;
        }

        for (int i = number; i < Transforms.Count; i++)
        {
            Transforms[i].gameObject.SetActive(false);
        }
    }
}
