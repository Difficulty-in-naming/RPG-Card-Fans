using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[ExecuteInEditMode]
public class ShaderoPlus_SlicedAutoSize : MonoBehaviour {


    public Material material;
    public float ScaleEverything = 1;
    public string VariableNameForScaleX= "SlicedHorizontalBarUV_StretchSize_1";
    public string VariableNameForScaleY= "SlicedVerticalBarUV_StretchSize_1";
    private Transform t;
    // Use this for initialization
    void Start ()
    {
        t = this.GetComponent<Transform>();
	}
	
	// Update is called once per frame
	void Update ()
    {
        Vector3 scale = t.localScale;
        material.SetFloat(VariableNameForScaleX, scale.x * ScaleEverything);
        material.SetFloat(VariableNameForScaleY, scale.y * ScaleEverything);
    }
}
