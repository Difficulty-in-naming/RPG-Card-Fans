
using System;
namespace PuertsStaticWrap
{
    public static class FairyGUI_CaptureCamera_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new FairyGUI.CaptureCamera();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(FairyGUI.CaptureCamera), result);
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
        private static void F_CheckMain(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    {
                        FairyGUI.CaptureCamera.CheckMain();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_CreateRenderTexture(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        var Arg1 = argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.GetBoolean(false);
                        var result = FairyGUI.CaptureCamera.CreateRenderTexture(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Capture(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                    {
                        var Arg0 = argHelper0.Get<FairyGUI.DisplayObject>(false);
                        var Arg1 = argHelper1.Get<UnityEngine.RenderTexture>(false);
                        var Arg2 = argHelper2.GetFloat(false);
                        var Arg3 = argHelper3.Get<UnityEngine.Vector2>(false);
                        FairyGUI.CaptureCamera.Capture(Arg0,Arg1,Arg2,Arg3);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_layer(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.CaptureCamera.layer;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_hiddenLayer(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.CaptureCamera.hiddenLayer;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_cachedTransform(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.CaptureCamera;
                var result = obj.cachedTransform;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_cachedTransform(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.CaptureCamera;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.cachedTransform = argHelper.Get<UnityEngine.Transform>(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_cachedCamera(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.CaptureCamera;
                var result = obj.cachedCamera;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_cachedCamera(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.CaptureCamera;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.cachedCamera = argHelper.Get<UnityEngine.Camera>(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Name(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.CaptureCamera.Name;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_LayerName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.CaptureCamera.LayerName;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_HiddenLayerName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = FairyGUI.CaptureCamera.HiddenLayerName;
                Puerts.PuertsDLL.ReturnString(isolate, info, result);
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
                    { new Puerts.MethodKey {Name = "CheckMain", IsStatic = true}, F_CheckMain },
                    { new Puerts.MethodKey {Name = "CreateRenderTexture", IsStatic = true}, F_CreateRenderTexture },
                    { new Puerts.MethodKey {Name = "Capture", IsStatic = true}, F_Capture },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"layer", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_layer, Setter = null} },
                    {"hiddenLayer", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_hiddenLayer, Setter = null} },
                    {"cachedTransform", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_cachedTransform, Setter = S_cachedTransform} },
                    {"cachedCamera", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_cachedCamera, Setter = S_cachedCamera} },
                    {"Name", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_Name, Setter = null} },
                    {"LayerName", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_LayerName, Setter = null} },
                    {"HiddenLayerName", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_HiddenLayerName, Setter = null} },
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