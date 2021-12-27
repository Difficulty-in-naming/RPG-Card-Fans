
using System;
namespace PuertsStaticWrap
{
    public static class FairyGUI_Utils_XMLList_Enumerator_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.List<FairyGUI.Utils.XML>), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<System.Collections.Generic.List<FairyGUI.Utils.XML>>(false);
                        var Arg1 = argHelper1.GetString(false);
                        var result = new FairyGUI.Utils.XMLList.Enumerator(Arg0,Arg1);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(FairyGUI.Utils.XMLList.Enumerator), result);
                    }
                }
                if (paramLen == 0)
                {
                    {
                        var result = new FairyGUI.Utils.XMLList.Enumerator();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(FairyGUI.Utils.XMLList.Enumerator), result);
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to FairyGUI.Utils.XMLList.Enumerator constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_MoveNext(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (FairyGUI.Utils.XMLList.Enumerator)Puerts.Utils.GetSelf((int)data, self);
                {
                    {
                        var result = obj.MoveNext();
                        Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Erase(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (FairyGUI.Utils.XMLList.Enumerator)Puerts.Utils.GetSelf((int)data, self);
                {
                    {
                        obj.Erase();
                        Puerts.Utils.SetSelf((int)data, self, obj);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Reset(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (FairyGUI.Utils.XMLList.Enumerator)Puerts.Utils.GetSelf((int)data, self);
                {
                    {
                        obj.Reset();
                        Puerts.Utils.SetSelf((int)data, self, obj);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Current(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (FairyGUI.Utils.XMLList.Enumerator)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Current;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
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
                    { new Puerts.MethodKey {Name = "MoveNext", IsStatic = false}, M_MoveNext },
                    { new Puerts.MethodKey {Name = "Erase", IsStatic = false}, M_Erase },
                    { new Puerts.MethodKey {Name = "Reset", IsStatic = false}, M_Reset },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"Current", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Current, Setter = null} },
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