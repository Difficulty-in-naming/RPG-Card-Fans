using System;
using System.Collections.Generic;

namespace Core.Utils.Collections
{
    public static class DictionaryUtils
    {
        public static void RenameKey<TKey, TValue>(this IDictionary<TKey, TValue> dic,
            TKey fromKey, TKey toKey)
        {
            TValue value = dic[fromKey];
            dic.Remove(fromKey);
            dic[toKey] = value;
        }
        public static Dictionary<T1, T2> Combine<T1, T2>(Dictionary<T1, T2> source, Dictionary<T1, T2> target, Func<T2, T2, T2> compare)
        {
            Dictionary<T1, T2> temp = new Dictionary<T1, T2>();
            foreach (var node in source)
            {
                if (!target.TryGetValue(node.Key, out var outValue))
                {
                    temp.Add(node.Key, node.Value);
                }
                else
                {
                    var result = compare(node.Value, outValue);
                    temp.Add(node.Key, result);
                }
            }

            foreach (var node in target)
            {
                if (!temp.ContainsKey(node.Key))
                {
                    temp.Add(node.Key, node.Value);
                }
            }

            return temp;
        }
    }
}