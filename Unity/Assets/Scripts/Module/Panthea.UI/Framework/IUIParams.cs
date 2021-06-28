using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IUIParams
{
}

public class StringParams: IUIParams
{
    public string Key;

    public StringParams(string key)
    {
        Key = key;
    }
}