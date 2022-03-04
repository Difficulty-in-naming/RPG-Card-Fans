
using System;

namespace PuertsStaticWrap
{
    public static class Cysharp_Threading_Tasks_UniTask_Wrap
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
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(Cysharp.Threading.Tasks.IUniTaskSource), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Cysharp.Threading.Tasks.IUniTaskSource>(false);
                    
                        var Arg1 = argHelper1.GetInt16(false);
                    
                        var result = new Cysharp.Threading.Tasks.UniTask(Arg0, Arg1);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Cysharp.Threading.Tasks.UniTask), result);
                    
                    }
                
                }
            
                if (paramLen == 0)
                
                {
            
                    {
                
                        var result = new Cysharp.Threading.Tasks.UniTask();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Cysharp.Threading.Tasks.UniTask), result);
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Cysharp.Threading.Tasks.UniTask constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ToCoroutine(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.ToCoroutine(Arg0);
                
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
        private static void M_GetAwaiter(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Cysharp.Threading.Tasks.UniTask)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    {
                
                        var result = obj.GetAwaiter();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
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
        private static void M_SuppressCancellationThrow(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Cysharp.Threading.Tasks.UniTask)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    {
                
                        var result = obj.SuppressCancellationThrow();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
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
        private static void M_ToString(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Cysharp.Threading.Tasks.UniTask)Puerts.Utils.GetSelf((int)data, self);
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = obj.ToString();
                
                        Puerts.PuertsDLL.ReturnString(isolate, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ToString");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Preserve(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Cysharp.Threading.Tasks.UniTask)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    {
                
                        var result = obj.Preserve();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
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
        private static void M_AsAsyncUnitUniTask(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Cysharp.Threading.Tasks.UniTask)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    {
                
                        var result = obj.AsAsyncUnitUniTask();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
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
        private static void F_Yield(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.Yield();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper0.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Yield(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Yield(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Yield(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Yield");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_NextFrame(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.NextFrame();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper0.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.NextFrame(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.NextFrame(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.NextFrame(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to NextFrame");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_WaitForEndOfFrame(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.WaitForEndOfFrame();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitForEndOfFrame(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to WaitForEndOfFrame");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_WaitForFixedUpdate(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.WaitForFixedUpdate();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitForFixedUpdate(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to WaitForFixedUpdate");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_DelayFrame(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.DelayFrame(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper1.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.DelayFrame(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.DelayFrame(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to DelayFrame");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Delay(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.DelayType)argHelper1.GetInt32(false);
                    
                        var Arg2 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.DelayType)argHelper1.GetInt32(false);
                    
                        var Arg2 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper2.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper2.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.DelayType)argHelper1.GetInt32(false);
                    
                        var Arg2 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper2.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.DelayType)argHelper1.GetInt32(false);
                    
                        var Arg2 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper2.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.DelayType)argHelper1.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.DelayType)argHelper1.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.TimeSpan), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.TimeSpan>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Delay(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Delay");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_FromException(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Exception>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.FromException(Arg0);
                
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
        private static void F_FromCanceled(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.FromCanceled(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.FromCanceled();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to FromCanceled");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Create(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Create(Arg0);
                
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
        private static void F_Lazy(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Lazy(Arg0);
                
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
        private static void F_Void(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<Cysharp.Threading.Tasks.UniTaskVoid>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTaskVoid>>(false);
                    
                        Cysharp.Threading.Tasks.UniTask.Void(Arg0);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<System.Threading.CancellationToken, Cysharp.Threading.Tasks.UniTaskVoid>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<System.Threading.CancellationToken, Cysharp.Threading.Tasks.UniTaskVoid>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        Cysharp.Threading.Tasks.UniTask.Void(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Void");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Action(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<Cysharp.Threading.Tasks.UniTaskVoid>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTaskVoid>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Action(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<System.Threading.CancellationToken, Cysharp.Threading.Tasks.UniTaskVoid>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<System.Threading.CancellationToken, Cysharp.Threading.Tasks.UniTaskVoid>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Action(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Action");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_UnityAction(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<Cysharp.Threading.Tasks.UniTaskVoid>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTaskVoid>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.UnityAction(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<System.Threading.CancellationToken, Cysharp.Threading.Tasks.UniTaskVoid>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<System.Threading.CancellationToken, Cysharp.Threading.Tasks.UniTaskVoid>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.UnityAction(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to UnityAction");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Defer(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Defer(Arg0);
                
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
        private static void F_Never(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Never(Arg0);
                
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
        private static void F_Run(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = argHelper2.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action<System.Object>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action<System.Object>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = argHelper2.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action<System.Object>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action<System.Object>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<Cysharp.Threading.Tasks.UniTask>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action<System.Object>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action<System.Object>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var Arg3 = argHelper3.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var Arg3 = argHelper3.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.Run(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Run");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_RunOnThreadPool(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = argHelper2.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action<System.Object>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action<System.Object>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var Arg2 = argHelper2.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action<System.Object>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action<System.Object>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<Cysharp.Threading.Tasks.UniTask>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action<System.Object>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action<System.Object>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var Arg3 = argHelper3.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper3.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<System.Object, Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetBoolean(false);
                    
                        var Arg3 = argHelper3.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.RunOnThreadPool(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to RunOnThreadPool");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_SwitchToMainThread(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.SwitchToMainThread(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper0.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.SwitchToMainThread(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.SwitchToMainThread();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.SwitchToMainThread(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SwitchToMainThread");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ReturnToMainThread(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.ReturnToMainThread(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper0.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.ReturnToMainThread(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.ReturnToMainThread();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.ReturnToMainThread(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ReturnToMainThread");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Post(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action>(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper1.GetInt32(false);
                    
                        Cysharp.Threading.Tasks.UniTask.Post(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Action), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Action>(false);
                    
                        Cysharp.Threading.Tasks.UniTask.Post(Arg0);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Post");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_SwitchToThreadPool(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.SwitchToThreadPool();
                
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
        private static void F_SwitchToTaskPool(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.SwitchToTaskPool();
                
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
        private static void F_SwitchToSynchronizationContext(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Threading.SynchronizationContext), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.SynchronizationContext>(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.SwitchToSynchronizationContext(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Threading.SynchronizationContext), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.SynchronizationContext>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.SwitchToSynchronizationContext(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SwitchToSynchronizationContext");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ReturnToSynchronizationContext(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Threading.SynchronizationContext), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.SynchronizationContext>(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.ReturnToSynchronizationContext(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Threading.SynchronizationContext), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.SynchronizationContext>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.ReturnToSynchronizationContext(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ReturnToSynchronizationContext");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ReturnToCurrentSynchronizationContext(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Boolean, null, false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetBoolean(false);
                    
                        var Arg1 = argHelper1.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.ReturnToCurrentSynchronizationContext(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Boolean, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetBoolean(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.ReturnToCurrentSynchronizationContext(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.ReturnToCurrentSynchronizationContext();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ReturnToCurrentSynchronizationContext");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_WaitUntil(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<bool>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<bool>>(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitUntil(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<bool>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<bool>>(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper1.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitUntil(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<bool>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<bool>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitUntil(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to WaitUntil");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_WaitWhile(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<bool>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false) && argHelper2.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<bool>>(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitWhile(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<bool>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<bool>>(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper1.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitWhile(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(System.Func<bool>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Func<bool>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitWhile(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to WaitWhile");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_WaitUntilCanceled(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var Arg1 = (Cysharp.Threading.Tasks.PlayerLoopTiming)argHelper1.GetInt32(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitUntilCanceled(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(System.Threading.CancellationToken), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Threading.CancellationToken>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WaitUntilCanceled(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to WaitUntilCanceled");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_WhenAll(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen >= 0)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatchParams(Puerts.JsValueType.NativeObject, typeof(Cysharp.Threading.Tasks.UniTask), 0, paramLen))
                
                    {
                
                        var Arg0 = argHelper0.GetParams<Cysharp.Threading.Tasks.UniTask>(info, 0, paramLen);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WhenAll(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.WhenAll();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.IEnumerable<Cysharp.Threading.Tasks.UniTask>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Collections.Generic.IEnumerable<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WhenAll(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to WhenAll");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_WhenAny(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen >= 0)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatchParams(Puerts.JsValueType.NativeObject, typeof(Cysharp.Threading.Tasks.UniTask), 0, paramLen))
                
                    {
                
                        var Arg0 = argHelper0.GetParams<Cysharp.Threading.Tasks.UniTask>(info, 0, paramLen);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WhenAny(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = Cysharp.Threading.Tasks.UniTask.WhenAny();
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.IEnumerable<Cysharp.Threading.Tasks.UniTask>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Collections.Generic.IEnumerable<Cysharp.Threading.Tasks.UniTask>>(false);
                    
                        var result = Cysharp.Threading.Tasks.UniTask.WhenAny(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to WhenAny");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Status(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (Cysharp.Threading.Tasks.UniTask)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.Status;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, (int)result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_CompletedTask(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = Cysharp.Threading.Tasks.UniTask.CompletedTask;
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
                    { new Puerts.MethodKey {Name = "ToCoroutine", IsStatic = true}, F_ToCoroutine },
{ new Puerts.MethodKey {Name = "GetAwaiter", IsStatic = false}, M_GetAwaiter },
{ new Puerts.MethodKey {Name = "SuppressCancellationThrow", IsStatic = false}, M_SuppressCancellationThrow },
{ new Puerts.MethodKey {Name = "ToString", IsStatic = false}, M_ToString },
{ new Puerts.MethodKey {Name = "Preserve", IsStatic = false}, M_Preserve },
{ new Puerts.MethodKey {Name = "AsAsyncUnitUniTask", IsStatic = false}, M_AsAsyncUnitUniTask },
{ new Puerts.MethodKey {Name = "Yield", IsStatic = true}, F_Yield },
{ new Puerts.MethodKey {Name = "NextFrame", IsStatic = true}, F_NextFrame },
{ new Puerts.MethodKey {Name = "WaitForEndOfFrame", IsStatic = true}, F_WaitForEndOfFrame },
{ new Puerts.MethodKey {Name = "WaitForFixedUpdate", IsStatic = true}, F_WaitForFixedUpdate },
{ new Puerts.MethodKey {Name = "DelayFrame", IsStatic = true}, F_DelayFrame },
{ new Puerts.MethodKey {Name = "Delay", IsStatic = true}, F_Delay },
{ new Puerts.MethodKey {Name = "FromException", IsStatic = true}, F_FromException },
{ new Puerts.MethodKey {Name = "FromCanceled", IsStatic = true}, F_FromCanceled },
{ new Puerts.MethodKey {Name = "Create", IsStatic = true}, F_Create },
{ new Puerts.MethodKey {Name = "Lazy", IsStatic = true}, F_Lazy },
{ new Puerts.MethodKey {Name = "Void", IsStatic = true}, F_Void },
{ new Puerts.MethodKey {Name = "Action", IsStatic = true}, F_Action },
{ new Puerts.MethodKey {Name = "UnityAction", IsStatic = true}, F_UnityAction },
{ new Puerts.MethodKey {Name = "Defer", IsStatic = true}, F_Defer },
{ new Puerts.MethodKey {Name = "Never", IsStatic = true}, F_Never },
{ new Puerts.MethodKey {Name = "Run", IsStatic = true}, F_Run },
{ new Puerts.MethodKey {Name = "RunOnThreadPool", IsStatic = true}, F_RunOnThreadPool },
{ new Puerts.MethodKey {Name = "SwitchToMainThread", IsStatic = true}, F_SwitchToMainThread },
{ new Puerts.MethodKey {Name = "ReturnToMainThread", IsStatic = true}, F_ReturnToMainThread },
{ new Puerts.MethodKey {Name = "Post", IsStatic = true}, F_Post },
{ new Puerts.MethodKey {Name = "SwitchToThreadPool", IsStatic = true}, F_SwitchToThreadPool },
{ new Puerts.MethodKey {Name = "SwitchToTaskPool", IsStatic = true}, F_SwitchToTaskPool },
{ new Puerts.MethodKey {Name = "SwitchToSynchronizationContext", IsStatic = true}, F_SwitchToSynchronizationContext },
{ new Puerts.MethodKey {Name = "ReturnToSynchronizationContext", IsStatic = true}, F_ReturnToSynchronizationContext },
{ new Puerts.MethodKey {Name = "ReturnToCurrentSynchronizationContext", IsStatic = true}, F_ReturnToCurrentSynchronizationContext },
{ new Puerts.MethodKey {Name = "WaitUntil", IsStatic = true}, F_WaitUntil },
{ new Puerts.MethodKey {Name = "WaitWhile", IsStatic = true}, F_WaitWhile },
{ new Puerts.MethodKey {Name = "WaitUntilCanceled", IsStatic = true}, F_WaitUntilCanceled },
{ new Puerts.MethodKey {Name = "WhenAll", IsStatic = true}, F_WhenAll },
{ new Puerts.MethodKey {Name = "WhenAny", IsStatic = true}, F_WhenAny }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"Status", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Status, Setter = null} },
{"CompletedTask", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_CompletedTask, Setter = null} }
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
