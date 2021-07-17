using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class SuperText : TextMeshPro
{
    public float Width
    {
        get
        {
            return tran.sizeDelta.x;
        }
        set
        {
            var size = tran.sizeDelta;
            size.x = value;
            tran.sizeDelta = size;
        }
    }

    public float Height
    {
        get
        {
            return tran.sizeDelta.y;
        }
        set
        {
            var size = tran.sizeDelta;
            size.y = value;
            tran.sizeDelta = size;
        }
    }

    public float X
    {
        get
        {
            return tran.position.x;
        }
        set
        {
            var pos = tran.position;
            pos.x = value;
            tran.position = pos;
        }
    }
    public float Y
    {
        get
        {
            return tran.position.y;
        }
        set
        {
            var pos = tran.position;
            pos.y = value;
            tran.position = pos;
        }
    }
    
    public float Z
    {
        get
        {
            return tran.position.z;
        }
        set
        {
            var pos = tran.position;
            pos.z = value;
            tran.position = pos;
        }
    }
    private RectTransform tran;
    public TextAnimation Animation { get; private set; }
    protected override void Awake()
    {
        base.Awake();
        tran = GetComponent<RectTransform>();
        Animation = GetComponent<TextAnimation>();
    }
}
