
using System;
namespace PuertsStaticWrap
{
    public static class FairyGUI_Utils_XMLIterator_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new FairyGUI.Utils.XMLIterator();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(FairyGUI.Utils.XMLIterator), result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Begin(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        FairyGUI.Utils.XMLIterator.Begin(Arg0,Arg1);
                        return;
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        FairyGUI.Utils.XMLIterator.Begin(Arg0);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Begin");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_NextTag(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = FairyGUI.Utils.XMLIterator.NextTag();
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetTagSource(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = FairyGUI.Utils.XMLIterator.GetTagSource();
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetRawText(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.GetBoolean(false);
                        var result = FairyGUI.Utils.XMLIterator.GetRawText(Arg0);
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 0)
                {
                    {
                        var result = FairyGUI.Utils.XMLIterator.GetRawText();
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetRawText");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetText(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.GetBoolean(false);
                        var result = FairyGUI.Utils.XMLIterator.GetText(Arg0);
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 0)
                {
                    {
                        var result = FairyGUI.Utils.XMLIterator.GetText();
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetText");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_HasAttribute(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var result = FairyGUI.Utils.XMLIterator.HasAttribute(Arg0);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetAttribute(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttribute(Arg0);
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetString(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttribute(Arg0,Arg1);
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetAttribute");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetAttributeInt(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttributeInt(Arg0);
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetInt32(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttributeInt(Arg0,Arg1);
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetAttributeInt");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetAttributeFloat(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttributeFloat(Arg0);
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetFloat(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttributeFloat(Arg0,Arg1);
                        Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetAttributeFloat");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetAttributeBool(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttributeBool(Arg0);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttributeBool(Arg0,Arg1);
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetAttributeBool");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetAttributes(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.Dictionary<string, string>), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Collections.Generic.Dictionary<string, string>>(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttributes(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Hashtable), false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Collections.Hashtable>(false);
                        var result = FairyGUI.Utils.XMLIterator.GetAttributes(Arg0);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetAttributes");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_tagName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.Utils.XMLIterator.tagName;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_tagName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                FairyGUI.Utils.XMLIterator.tagName = argHelper.GetString(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_tagType(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.Utils.XMLIterator.tagType;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, (int)result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_tagType(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                FairyGUI.Utils.XMLIterator.tagType = (FairyGUI.Utils.XMLTagType)argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_lastTagName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.Utils.XMLIterator.lastTagName;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_lastTagName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                FairyGUI.Utils.XMLIterator.lastTagName = argHelper.GetString(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        public static Puerts.TypeRegisterInfo GetRegisterInfo()
        {
            return new Puerts.TypeRegisterInfo()
            {
                BlittableCopy = false,
                Constructor = Constructor,
                Methods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {
                    { new Puerts.MethodKey {Name = "Begin", IsStatic = true}, F_Begin },
                    { new Puerts.MethodKey {Name = "NextTag", IsStatic = true}, F_NextTag },
                    { new Puerts.MethodKey {Name = "GetTagSource", IsStatic = true}, F_GetTagSource },
                    { new Puerts.MethodKey {Name = "GetRawText", IsStatic = true}, F_GetRawText },
                    { new Puerts.MethodKey {Name = "GetText", IsStatic = true}, F_GetText },
                    { new Puerts.MethodKey {Name = "HasAttribute", IsStatic = true}, F_HasAttribute },
                    { new Puerts.MethodKey {Name = "GetAttribute", IsStatic = true}, F_GetAttribute },
                    { new Puerts.MethodKey {Name = "GetAttributeInt", IsStatic = true}, F_GetAttributeInt },
                    { new Puerts.MethodKey {Name = "GetAttributeFloat", IsStatic = true}, F_GetAttributeFloat },
                    { new Puerts.MethodKey {Name = "GetAttributeBool", IsStatic = true}, F_GetAttributeBool },
                    { new Puerts.MethodKey {Name = "GetAttributes", IsStatic = true}, F_GetAttributes },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"tagName", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_tagName, Setter = S_tagName} },
                    {"tagType", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_tagType, Setter = S_tagType} },
                    {"lastTagName", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_lastTagName, Setter = S_lastTagName} },
                },
                LazyMethods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {
                },
                LazyProperties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                }
            };
        }
    }
}