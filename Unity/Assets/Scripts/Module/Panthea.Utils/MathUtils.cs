using System;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public static class MathUtils
{
    /// <summary>
    /// 权重算法
    /// </summary>
    /// <param name="list">需要计算权重的列表</param>
    /// <param name="outInt">根据哪个变量计算权重</param>
    /// <param name="nums">返回权重数量</param>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public static List<T> WeightMath<T>(List<T> list, Func<T, int> outInt, int nums, int? seed = null)
    {
        if (seed.HasValue)
        {
            Random.InitState(seed.Value);
        }

        if (list == null || list.Count <= 0 || nums == 0)
        {
            return new List<T>();
        }

        int listCount = list.Count;
        nums = Mathf.Min(list.Count, nums);

        int totalWeight = 0;

        for (int i = 0; i < listCount; i++)
        {
            totalWeight += outInt(list[i]);
        }

        List<KeyValuePair<int, T>> keyList = new List<KeyValuePair<int, T>>();
        for (int i = 0; i < listCount; i++)
        {
            var random = Random.Range(1, totalWeight);
            var value = list[i];
            keyList.Add(new KeyValuePair<int, T>(outInt(value) + random, value));
        }

        keyList.Sort((pair, valuePair) => valuePair.Key - pair.Key);

        List<T> newList = new List<T>(nums);
        for (int i = 0; i < nums; i++)
        {
            newList.Add(keyList[i].Value);
        }

        return newList;
    }

    /// <summary>
    /// 权重算法
    /// </summary>
    /// <param name="list">需要计算权重的列表</param>
    /// <param name="outInt">根据哪个变量计算权重</param>
    /// <param name="nums">返回权重数量</param>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public static T WeightMath<T>(List<T> list, Func<T, int> outInt, int? seed = null)
    {
        var result = WeightMath(list, outInt, 1, seed);
        if (result.Count > 0)
        {
            return result[0];
        }

        return default;
    }
}