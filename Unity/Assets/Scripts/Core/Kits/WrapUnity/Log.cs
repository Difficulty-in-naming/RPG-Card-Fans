using UnityEngine;
using System.Diagnostics;
using Object = UnityEngine.Object;

public static class Log
{
    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void Assert(bool condition)
    {
        UnityEngine.Debug.Assert(condition);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void Assert(bool condition, Object context)
    {
        UnityEngine.Debug.Assert(condition, context);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void Assert(bool condition, object message)
    {
        UnityEngine.Debug.Assert(condition, message);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void Assert(bool condition, object message, Object context)
    {
        UnityEngine.Debug.Assert(condition, message, context);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void AssertFormat(bool condition, string format, params object[] args)
    {
        UnityEngine.Debug.AssertFormat(condition, format, args);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void AssertFormat(bool condition, Object context, string format, params object[] args)
    {
        UnityEngine.Debug.AssertFormat(condition, context, format, args);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void Break()
    {
        UnityEngine.Debug.Break();
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void ClearDeveloperConsole()
    {
        UnityEngine.Debug.ClearDeveloperConsole();
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void DrawLine(Vector3 start, Vector3 end, Color color = default, float duration = 0.0f, bool depthTest = true)
    {
        UnityEngine.Debug.DrawLine(start, end, color, duration, depthTest);
    }

    //[Conditional("DEVELOPMENT_BUILD")]
    //[Conditional("UNITY_EDITOR")]
    public static void DrawRay(Vector3 start, Vector3 dir, Color color = default, float duration = 0.0f, bool depthTest = true)
    {
        UnityEngine.Debug.DrawRay(start, dir, color, duration, depthTest);
    }

   // [Conditional("DEVELOPMENT_BUILD")]
   // [Conditional("UNITY_EDITOR")]
    public static void Print(object message, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.Log(message);
        }
    }

   // [Conditional("DEVELOPMENT_BUILD")]
   // [Conditional("UNITY_EDITOR")]
    public static void Print(object message, Object context, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.Log(message, context);
        }
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void Assertion(object message, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.LogAssertion(message);
        }
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void Assertion(object message, Object context, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.LogAssertion(message, context);
        }
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void AssertionFormat(string format, params object[] args)
    {
        UnityEngine.Debug.LogAssertionFormat(format, args);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void AssertionFormat(string format, bool condition = true, params object[] args)
    {
        if (condition)
        {
            UnityEngine.Debug.LogAssertionFormat(format, args);
        }
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void AssertionFormat(Object context, string format, params object[] args)
    {
        UnityEngine.Debug.LogAssertionFormat(context, format, args);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    [Conditional("UNITY_ASSERTIONS")]
    public static void AssertionFormat(Object context, string format, bool condition = true, params object[] args)
    {
        if (condition)
        {
            UnityEngine.Debug.LogAssertionFormat(context, format, args);
        }
    }

    public static void Error(object message, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.LogError(message);
        }
    }

    public static void Error(object message, Object context, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.LogError(message, context);
        }
    }

    public static void ErrorFormat(string format, params object[] args)
    {
        UnityEngine.Debug.LogErrorFormat(format, args);
    }

    public static void ErrorFormat(string format, bool condition = true, params object[] args)
    {
        if (condition)
        {
            UnityEngine.Debug.LogErrorFormat(format, args);
        }
    }

    public static void ErrorFormat(Object context, string format, params object[] args)
    {
        UnityEngine.Debug.LogErrorFormat(context, format, args);
    }

    public static void ErrorFormat(Object context, string format, bool condition = true, params object[] args)
    {
        if (condition)
        {
            UnityEngine.Debug.LogErrorFormat(context, format, args);
        }
    }

    public static void Exception(System.Exception exception, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.LogException(exception);
        }
    }

    public static void Exception(System.Exception exception, Object context, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.LogException(exception, context);
        }
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void Format(string format, params object[] args)
    {
        UnityEngine.Debug.LogFormat(format, args);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void Format(string format, bool condition = true, params object[] args)
    {
        if (condition)
        {
            UnityEngine.Debug.LogFormat(format, args);
        }
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void Format(Object context, string format, params object[] args)
    {
        UnityEngine.Debug.LogFormat(context, format, args);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void Format(Object context, string format, bool condition = true, params object[] args)
    {
        if (condition)
        {
            UnityEngine.Debug.LogFormat(context, format, args);
        }
    }

    //[Conditional("DEVELOPMENT_BUILD")]
    //[Conditional("UNITY_EDITOR")]
    public static void Warning(object message, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.LogWarning(message);
        }
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void Warning(object message, Object context, bool condition = true)
    {
        if (condition)
        {
            UnityEngine.Debug.LogWarning(message, context);
        }
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void WarningFormat(string format, params object[] args)
    {
        UnityEngine.Debug.LogWarningFormat(format, args);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void WarningFormat(string format, bool condition = true, params object[] args)
    {
        if (condition)
        {
            UnityEngine.Debug.LogWarningFormat(format, args);
        }
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void WarningFormat(Object context, string format, params object[] args)
    {
        UnityEngine.Debug.LogWarningFormat(context, format, args);
    }

    [Conditional("DEVELOPMENT_BUILD")]
    [Conditional("UNITY_EDITOR")]
    public static void WarningFormat(Object context, string format, bool condition = true, params object[] args)
    {
        if (condition)
        {
            UnityEngine.Debug.LogWarningFormat(context, format, args);
        }
    }
}