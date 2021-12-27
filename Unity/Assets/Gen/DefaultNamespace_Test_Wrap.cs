
using System;
namespace PuertsStaticWrap
{
    public static class DefaultNamespace_Test_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new DefaultNamespace.Test();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(DefaultNamespace.Test), result);
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
        private static void F_rgba8888ToColor(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.Get<UnityEngine.Color>(false);
                        var Arg1 = argHelper1.GetInt32(false);
                        var result = DefaultNamespace.Test.rgba8888ToColor(Arg0,Arg1);
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
        private static void M_Start(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as DefaultNamespace.Test;
                {
                    {
                        obj.Start();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ES_VERSION_2_0(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ES_VERSION_2_0;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ES_VERSION_2_0(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ES_VERSION_2_0 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_BUFFER_BIT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_BUFFER_BIT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_BUFFER_BIT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_BUFFER_BIT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_BUFFER_BIT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_BUFFER_BIT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_BUFFER_BIT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_BUFFER_BIT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_COLOR_BUFFER_BIT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_COLOR_BUFFER_BIT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_COLOR_BUFFER_BIT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_COLOR_BUFFER_BIT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FALSE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FALSE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FALSE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FALSE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TRUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TRUE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TRUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TRUE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_POINTS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_POINTS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_POINTS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_POINTS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LINES(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LINES;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LINES(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LINES = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LINE_LOOP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LINE_LOOP;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LINE_LOOP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LINE_LOOP = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LINE_STRIP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LINE_STRIP;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LINE_STRIP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LINE_STRIP = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TRIANGLES(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TRIANGLES;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TRIANGLES(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TRIANGLES = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TRIANGLE_STRIP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TRIANGLE_STRIP;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TRIANGLE_STRIP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TRIANGLE_STRIP = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TRIANGLE_FAN(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TRIANGLE_FAN;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TRIANGLE_FAN(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TRIANGLE_FAN = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ZERO(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ZERO;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ZERO(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ZERO = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ONE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ONE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ONE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ONE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SRC_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SRC_COLOR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SRC_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SRC_COLOR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ONE_MINUS_SRC_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ONE_MINUS_SRC_COLOR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ONE_MINUS_SRC_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ONE_MINUS_SRC_COLOR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SRC_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SRC_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SRC_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SRC_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ONE_MINUS_SRC_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ONE_MINUS_SRC_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ONE_MINUS_SRC_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ONE_MINUS_SRC_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DST_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DST_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DST_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DST_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ONE_MINUS_DST_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ONE_MINUS_DST_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ONE_MINUS_DST_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ONE_MINUS_DST_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DST_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DST_COLOR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DST_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DST_COLOR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ONE_MINUS_DST_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ONE_MINUS_DST_COLOR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ONE_MINUS_DST_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ONE_MINUS_DST_COLOR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SRC_ALPHA_SATURATE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SRC_ALPHA_SATURATE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SRC_ALPHA_SATURATE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SRC_ALPHA_SATURATE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FUNC_ADD(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FUNC_ADD;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FUNC_ADD(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FUNC_ADD = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLEND_EQUATION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLEND_EQUATION;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLEND_EQUATION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLEND_EQUATION = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLEND_EQUATION_RGB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLEND_EQUATION_RGB;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLEND_EQUATION_RGB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLEND_EQUATION_RGB = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLEND_EQUATION_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLEND_EQUATION_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLEND_EQUATION_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLEND_EQUATION_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FUNC_SUBTRACT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FUNC_SUBTRACT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FUNC_SUBTRACT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FUNC_SUBTRACT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FUNC_REVERSE_SUBTRACT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FUNC_REVERSE_SUBTRACT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FUNC_REVERSE_SUBTRACT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FUNC_REVERSE_SUBTRACT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLEND_DST_RGB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLEND_DST_RGB;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLEND_DST_RGB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLEND_DST_RGB = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLEND_SRC_RGB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLEND_SRC_RGB;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLEND_SRC_RGB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLEND_SRC_RGB = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLEND_DST_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLEND_DST_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLEND_DST_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLEND_DST_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLEND_SRC_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLEND_SRC_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLEND_SRC_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLEND_SRC_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_CONSTANT_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_CONSTANT_COLOR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_CONSTANT_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_CONSTANT_COLOR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ONE_MINUS_CONSTANT_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ONE_MINUS_CONSTANT_COLOR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ONE_MINUS_CONSTANT_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ONE_MINUS_CONSTANT_COLOR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_CONSTANT_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_CONSTANT_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_CONSTANT_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_CONSTANT_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ONE_MINUS_CONSTANT_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ONE_MINUS_CONSTANT_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ONE_MINUS_CONSTANT_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ONE_MINUS_CONSTANT_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLEND_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLEND_COLOR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLEND_COLOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLEND_COLOR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ARRAY_BUFFER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ARRAY_BUFFER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ARRAY_BUFFER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ARRAY_BUFFER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ELEMENT_ARRAY_BUFFER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ELEMENT_ARRAY_BUFFER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ELEMENT_ARRAY_BUFFER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ELEMENT_ARRAY_BUFFER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ARRAY_BUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ARRAY_BUFFER_BINDING;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ARRAY_BUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ARRAY_BUFFER_BINDING = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ELEMENT_ARRAY_BUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ELEMENT_ARRAY_BUFFER_BINDING;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ELEMENT_ARRAY_BUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ELEMENT_ARRAY_BUFFER_BINDING = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STREAM_DRAW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STREAM_DRAW;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STREAM_DRAW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STREAM_DRAW = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STATIC_DRAW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STATIC_DRAW;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STATIC_DRAW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STATIC_DRAW = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DYNAMIC_DRAW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DYNAMIC_DRAW;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DYNAMIC_DRAW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DYNAMIC_DRAW = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BUFFER_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BUFFER_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BUFFER_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BUFFER_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BUFFER_USAGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BUFFER_USAGE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BUFFER_USAGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BUFFER_USAGE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_CURRENT_VERTEX_ATTRIB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_CURRENT_VERTEX_ATTRIB;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_CURRENT_VERTEX_ATTRIB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_CURRENT_VERTEX_ATTRIB = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRONT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRONT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRONT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRONT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BACK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BACK;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BACK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BACK = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRONT_AND_BACK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRONT_AND_BACK;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRONT_AND_BACK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRONT_AND_BACK = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_2D(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_2D;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_2D(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_2D = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_CULL_FACE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_CULL_FACE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_CULL_FACE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_CULL_FACE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLEND(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLEND;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLEND(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLEND = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DITHER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DITHER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DITHER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DITHER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_TEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_TEST;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_TEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_TEST = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_TEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_TEST;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_TEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_TEST = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SCISSOR_TEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SCISSOR_TEST;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SCISSOR_TEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SCISSOR_TEST = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_POLYGON_OFFSET_FILL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_POLYGON_OFFSET_FILL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_POLYGON_OFFSET_FILL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_POLYGON_OFFSET_FILL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SAMPLE_ALPHA_TO_COVERAGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SAMPLE_ALPHA_TO_COVERAGE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SAMPLE_ALPHA_TO_COVERAGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SAMPLE_ALPHA_TO_COVERAGE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SAMPLE_COVERAGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SAMPLE_COVERAGE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SAMPLE_COVERAGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SAMPLE_COVERAGE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NO_ERROR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NO_ERROR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NO_ERROR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NO_ERROR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INVALID_ENUM(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INVALID_ENUM;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INVALID_ENUM(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INVALID_ENUM = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INVALID_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INVALID_VALUE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INVALID_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INVALID_VALUE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INVALID_OPERATION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INVALID_OPERATION;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INVALID_OPERATION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INVALID_OPERATION = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_OUT_OF_MEMORY(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_OUT_OF_MEMORY;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_OUT_OF_MEMORY(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_OUT_OF_MEMORY = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_CW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_CW;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_CW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_CW = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_CCW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_CCW;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_CCW(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_CCW = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LINE_WIDTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LINE_WIDTH;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LINE_WIDTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LINE_WIDTH = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ALIASED_POINT_SIZE_RANGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ALIASED_POINT_SIZE_RANGE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ALIASED_POINT_SIZE_RANGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ALIASED_POINT_SIZE_RANGE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ALIASED_LINE_WIDTH_RANGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ALIASED_LINE_WIDTH_RANGE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ALIASED_LINE_WIDTH_RANGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ALIASED_LINE_WIDTH_RANGE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_CULL_FACE_MODE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_CULL_FACE_MODE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_CULL_FACE_MODE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_CULL_FACE_MODE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRONT_FACE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRONT_FACE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRONT_FACE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRONT_FACE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_RANGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_RANGE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_RANGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_RANGE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_WRITEMASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_WRITEMASK;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_WRITEMASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_WRITEMASK = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_CLEAR_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_CLEAR_VALUE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_CLEAR_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_CLEAR_VALUE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_FUNC(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_FUNC;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_FUNC(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_FUNC = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_CLEAR_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_CLEAR_VALUE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_CLEAR_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_CLEAR_VALUE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_FUNC(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_FUNC;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_FUNC(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_FUNC = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_FAIL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_FAIL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_FAIL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_FAIL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_PASS_DEPTH_FAIL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_PASS_DEPTH_FAIL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_PASS_DEPTH_FAIL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_PASS_DEPTH_FAIL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_PASS_DEPTH_PASS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_PASS_DEPTH_PASS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_PASS_DEPTH_PASS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_PASS_DEPTH_PASS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_REF(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_REF;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_REF(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_REF = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_VALUE_MASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_VALUE_MASK;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_VALUE_MASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_VALUE_MASK = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_WRITEMASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_WRITEMASK;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_WRITEMASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_WRITEMASK = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_BACK_FUNC(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_BACK_FUNC;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_BACK_FUNC(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_BACK_FUNC = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_BACK_FAIL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_BACK_FAIL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_BACK_FAIL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_BACK_FAIL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_BACK_PASS_DEPTH_FAIL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_BACK_PASS_DEPTH_FAIL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_BACK_PASS_DEPTH_FAIL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_BACK_PASS_DEPTH_FAIL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_BACK_PASS_DEPTH_PASS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_BACK_PASS_DEPTH_PASS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_BACK_PASS_DEPTH_PASS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_BACK_PASS_DEPTH_PASS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_BACK_REF(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_BACK_REF;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_BACK_REF(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_BACK_REF = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_BACK_VALUE_MASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_BACK_VALUE_MASK;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_BACK_VALUE_MASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_BACK_VALUE_MASK = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_BACK_WRITEMASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_BACK_WRITEMASK;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_BACK_WRITEMASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_BACK_WRITEMASK = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VIEWPORT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VIEWPORT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VIEWPORT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VIEWPORT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SCISSOR_BOX(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SCISSOR_BOX;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SCISSOR_BOX(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SCISSOR_BOX = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_COLOR_CLEAR_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_COLOR_CLEAR_VALUE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_COLOR_CLEAR_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_COLOR_CLEAR_VALUE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_COLOR_WRITEMASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_COLOR_WRITEMASK;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_COLOR_WRITEMASK(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_COLOR_WRITEMASK = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_UNPACK_ALIGNMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_UNPACK_ALIGNMENT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_UNPACK_ALIGNMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_UNPACK_ALIGNMENT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_PACK_ALIGNMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_PACK_ALIGNMENT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_PACK_ALIGNMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_PACK_ALIGNMENT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_TEXTURE_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_TEXTURE_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_TEXTURE_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_TEXTURE_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_TEXTURE_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_TEXTURE_UNITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_TEXTURE_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_TEXTURE_UNITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_VIEWPORT_DIMS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_VIEWPORT_DIMS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_VIEWPORT_DIMS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_VIEWPORT_DIMS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SUBPIXEL_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SUBPIXEL_BITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SUBPIXEL_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SUBPIXEL_BITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RED_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RED_BITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RED_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RED_BITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_GREEN_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_GREEN_BITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_GREEN_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_GREEN_BITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BLUE_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BLUE_BITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BLUE_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BLUE_BITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ALPHA_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ALPHA_BITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ALPHA_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ALPHA_BITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_BITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_BITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_BITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_BITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_BITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_POLYGON_OFFSET_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_POLYGON_OFFSET_UNITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_POLYGON_OFFSET_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_POLYGON_OFFSET_UNITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_POLYGON_OFFSET_FACTOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_POLYGON_OFFSET_FACTOR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_POLYGON_OFFSET_FACTOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_POLYGON_OFFSET_FACTOR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_BINDING_2D(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_BINDING_2D;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_BINDING_2D(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_BINDING_2D = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SAMPLE_BUFFERS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SAMPLE_BUFFERS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SAMPLE_BUFFERS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SAMPLE_BUFFERS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SAMPLES(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SAMPLES;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SAMPLES(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SAMPLES = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SAMPLE_COVERAGE_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SAMPLE_COVERAGE_VALUE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SAMPLE_COVERAGE_VALUE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SAMPLE_COVERAGE_VALUE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SAMPLE_COVERAGE_INVERT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SAMPLE_COVERAGE_INVERT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SAMPLE_COVERAGE_INVERT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SAMPLE_COVERAGE_INVERT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NUM_COMPRESSED_TEXTURE_FORMATS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NUM_COMPRESSED_TEXTURE_FORMATS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NUM_COMPRESSED_TEXTURE_FORMATS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NUM_COMPRESSED_TEXTURE_FORMATS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_COMPRESSED_TEXTURE_FORMATS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_COMPRESSED_TEXTURE_FORMATS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_COMPRESSED_TEXTURE_FORMATS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_COMPRESSED_TEXTURE_FORMATS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DONT_CARE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DONT_CARE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DONT_CARE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DONT_CARE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FASTEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FASTEST;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FASTEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FASTEST = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NICEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NICEST;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NICEST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NICEST = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_GENERATE_MIPMAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_GENERATE_MIPMAP;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_GENERATE_MIPMAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_GENERATE_MIPMAP = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_GENERATE_MIPMAP_HINT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_GENERATE_MIPMAP_HINT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_GENERATE_MIPMAP_HINT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_GENERATE_MIPMAP_HINT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BYTE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BYTE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BYTE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BYTE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_UNSIGNED_BYTE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_UNSIGNED_BYTE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_UNSIGNED_BYTE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_UNSIGNED_BYTE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SHORT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SHORT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SHORT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SHORT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_UNSIGNED_SHORT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_UNSIGNED_SHORT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_UNSIGNED_SHORT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_UNSIGNED_SHORT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_UNSIGNED_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_UNSIGNED_INT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_UNSIGNED_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_UNSIGNED_INT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FLOAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FLOAT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FLOAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FLOAT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FIXED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FIXED;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FIXED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FIXED = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_COMPONENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_COMPONENT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_COMPONENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_COMPONENT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RGB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RGB;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RGB(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RGB = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RGBA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RGBA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RGBA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RGBA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LUMINANCE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LUMINANCE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LUMINANCE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LUMINANCE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LUMINANCE_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LUMINANCE_ALPHA;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LUMINANCE_ALPHA(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LUMINANCE_ALPHA = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_UNSIGNED_SHORT_4_4_4_4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_UNSIGNED_SHORT_4_4_4_4;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_UNSIGNED_SHORT_4_4_4_4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_UNSIGNED_SHORT_4_4_4_4 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_UNSIGNED_SHORT_5_5_5_1(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_UNSIGNED_SHORT_5_5_5_1;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_UNSIGNED_SHORT_5_5_5_1(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_UNSIGNED_SHORT_5_5_5_1 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_UNSIGNED_SHORT_5_6_5(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_UNSIGNED_SHORT_5_6_5;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_UNSIGNED_SHORT_5_6_5(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_UNSIGNED_SHORT_5_6_5 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAGMENT_SHADER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAGMENT_SHADER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAGMENT_SHADER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAGMENT_SHADER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERTEX_SHADER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERTEX_SHADER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERTEX_SHADER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERTEX_SHADER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_VERTEX_ATTRIBS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_VERTEX_ATTRIBS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_VERTEX_ATTRIBS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_VERTEX_ATTRIBS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_VERTEX_UNIFORM_VECTORS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_VERTEX_UNIFORM_VECTORS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_VERTEX_UNIFORM_VECTORS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_VERTEX_UNIFORM_VECTORS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_VARYING_VECTORS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_VARYING_VECTORS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_VARYING_VECTORS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_VARYING_VECTORS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_TEXTURE_IMAGE_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_TEXTURE_IMAGE_UNITS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_TEXTURE_IMAGE_UNITS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_TEXTURE_IMAGE_UNITS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_FRAGMENT_UNIFORM_VECTORS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_FRAGMENT_UNIFORM_VECTORS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_FRAGMENT_UNIFORM_VECTORS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_FRAGMENT_UNIFORM_VECTORS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SHADER_TYPE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SHADER_TYPE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SHADER_TYPE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SHADER_TYPE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DELETE_STATUS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DELETE_STATUS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DELETE_STATUS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DELETE_STATUS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LINK_STATUS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LINK_STATUS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LINK_STATUS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LINK_STATUS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VALIDATE_STATUS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VALIDATE_STATUS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VALIDATE_STATUS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VALIDATE_STATUS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ATTACHED_SHADERS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ATTACHED_SHADERS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ATTACHED_SHADERS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ATTACHED_SHADERS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ACTIVE_UNIFORMS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ACTIVE_UNIFORMS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ACTIVE_UNIFORMS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ACTIVE_UNIFORMS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ACTIVE_UNIFORM_MAX_LENGTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ACTIVE_UNIFORM_MAX_LENGTH;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ACTIVE_UNIFORM_MAX_LENGTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ACTIVE_UNIFORM_MAX_LENGTH = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ACTIVE_ATTRIBUTES(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ACTIVE_ATTRIBUTES;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ACTIVE_ATTRIBUTES(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ACTIVE_ATTRIBUTES = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ACTIVE_ATTRIBUTE_MAX_LENGTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ACTIVE_ATTRIBUTE_MAX_LENGTH;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ACTIVE_ATTRIBUTE_MAX_LENGTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ACTIVE_ATTRIBUTE_MAX_LENGTH = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SHADING_LANGUAGE_VERSION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SHADING_LANGUAGE_VERSION;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SHADING_LANGUAGE_VERSION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SHADING_LANGUAGE_VERSION = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_CURRENT_PROGRAM(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_CURRENT_PROGRAM;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_CURRENT_PROGRAM(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_CURRENT_PROGRAM = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NEVER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NEVER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NEVER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NEVER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LESS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LESS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LESS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LESS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_EQUAL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_EQUAL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_EQUAL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_EQUAL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LEQUAL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LEQUAL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LEQUAL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LEQUAL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_GREATER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_GREATER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_GREATER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_GREATER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NOTEQUAL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NOTEQUAL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NOTEQUAL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NOTEQUAL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_GEQUAL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_GEQUAL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_GEQUAL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_GEQUAL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ALWAYS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ALWAYS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ALWAYS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ALWAYS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_KEEP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_KEEP;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_KEEP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_KEEP = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_REPLACE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_REPLACE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_REPLACE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_REPLACE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INCR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INCR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INCR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INCR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DECR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DECR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DECR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DECR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INVERT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INVERT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INVERT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INVERT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INCR_WRAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INCR_WRAP;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INCR_WRAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INCR_WRAP = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DECR_WRAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DECR_WRAP;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DECR_WRAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DECR_WRAP = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VENDOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VENDOR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VENDOR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VENDOR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERSION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERSION;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERSION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERSION = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_EXTENSIONS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_EXTENSIONS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_EXTENSIONS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_EXTENSIONS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NEAREST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NEAREST;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NEAREST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NEAREST = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LINEAR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LINEAR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LINEAR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LINEAR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NEAREST_MIPMAP_NEAREST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NEAREST_MIPMAP_NEAREST;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NEAREST_MIPMAP_NEAREST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NEAREST_MIPMAP_NEAREST = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LINEAR_MIPMAP_NEAREST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LINEAR_MIPMAP_NEAREST;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LINEAR_MIPMAP_NEAREST(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LINEAR_MIPMAP_NEAREST = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NEAREST_MIPMAP_LINEAR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NEAREST_MIPMAP_LINEAR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NEAREST_MIPMAP_LINEAR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NEAREST_MIPMAP_LINEAR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LINEAR_MIPMAP_LINEAR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LINEAR_MIPMAP_LINEAR;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LINEAR_MIPMAP_LINEAR(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LINEAR_MIPMAP_LINEAR = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_MAG_FILTER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_MAG_FILTER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_MAG_FILTER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_MAG_FILTER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_MIN_FILTER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_MIN_FILTER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_MIN_FILTER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_MIN_FILTER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_WRAP_S(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_WRAP_S;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_WRAP_S(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_WRAP_S = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_WRAP_T(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_WRAP_T;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_WRAP_T(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_WRAP_T = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_CUBE_MAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_CUBE_MAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_BINDING_CUBE_MAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_BINDING_CUBE_MAP;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_BINDING_CUBE_MAP(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_BINDING_CUBE_MAP = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_CUBE_MAP_POSITIVE_X(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_POSITIVE_X;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_CUBE_MAP_POSITIVE_X(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_POSITIVE_X = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_CUBE_MAP_NEGATIVE_X(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_NEGATIVE_X;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_CUBE_MAP_NEGATIVE_X(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_NEGATIVE_X = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_CUBE_MAP_POSITIVE_Y(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_POSITIVE_Y;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_CUBE_MAP_POSITIVE_Y(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_POSITIVE_Y = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_CUBE_MAP_NEGATIVE_Y(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_CUBE_MAP_NEGATIVE_Y(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_CUBE_MAP_POSITIVE_Z(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_POSITIVE_Z;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_CUBE_MAP_POSITIVE_Z(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_POSITIVE_Z = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_CUBE_MAP_NEGATIVE_Z(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_CUBE_MAP_NEGATIVE_Z(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_CUBE_MAP_TEXTURE_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_CUBE_MAP_TEXTURE_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_CUBE_MAP_TEXTURE_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_CUBE_MAP_TEXTURE_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE0(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE0;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE0(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE0 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE1(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE1;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE1(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE1 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE2;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE2 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE3;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE3 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE4;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE4 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE5(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE5;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE5(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE5 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE6(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE6;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE6(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE6 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE7(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE7;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE7(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE7 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE8(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE8;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE8(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE8 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE9(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE9;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE9(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE9 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE10(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE10;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE10(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE10 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE11(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE11;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE11(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE11 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE12(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE12;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE12(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE12 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE13(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE13;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE13(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE13 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE14(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE14;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE14(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE14 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE15(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE15;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE15(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE15 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE16(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE16;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE16(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE16 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE17(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE17;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE17(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE17 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE18(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE18;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE18(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE18 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE19(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE19;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE19(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE19 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE20(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE20;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE20(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE20 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE21(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE21;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE21(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE21 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE22(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE22;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE22(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE22 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE23(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE23;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE23(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE23 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE24(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE24;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE24(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE24 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE25(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE25;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE25(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE25 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE26(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE26;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE26(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE26 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE27(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE27;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE27(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE27 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE28(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE28;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE28(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE28 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE29(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE29;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE29(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE29 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE30(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE30;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE30(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE30 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE31(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE31;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE31(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE31 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_ACTIVE_TEXTURE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_ACTIVE_TEXTURE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_ACTIVE_TEXTURE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_ACTIVE_TEXTURE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_REPEAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_REPEAT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_REPEAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_REPEAT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_CLAMP_TO_EDGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_CLAMP_TO_EDGE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_CLAMP_TO_EDGE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_CLAMP_TO_EDGE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MIRRORED_REPEAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MIRRORED_REPEAT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MIRRORED_REPEAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MIRRORED_REPEAT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FLOAT_VEC2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FLOAT_VEC2;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FLOAT_VEC2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FLOAT_VEC2 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FLOAT_VEC3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FLOAT_VEC3;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FLOAT_VEC3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FLOAT_VEC3 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FLOAT_VEC4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FLOAT_VEC4;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FLOAT_VEC4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FLOAT_VEC4 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INT_VEC2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INT_VEC2;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INT_VEC2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INT_VEC2 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INT_VEC3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INT_VEC3;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INT_VEC3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INT_VEC3 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INT_VEC4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INT_VEC4;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INT_VEC4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INT_VEC4 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BOOL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BOOL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BOOL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BOOL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BOOL_VEC2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BOOL_VEC2;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BOOL_VEC2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BOOL_VEC2 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BOOL_VEC3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BOOL_VEC3;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BOOL_VEC3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BOOL_VEC3 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_BOOL_VEC4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_BOOL_VEC4;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_BOOL_VEC4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_BOOL_VEC4 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FLOAT_MAT2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FLOAT_MAT2;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FLOAT_MAT2(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FLOAT_MAT2 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FLOAT_MAT3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FLOAT_MAT3;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FLOAT_MAT3(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FLOAT_MAT3 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FLOAT_MAT4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FLOAT_MAT4;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FLOAT_MAT4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FLOAT_MAT4 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SAMPLER_2D(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SAMPLER_2D;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SAMPLER_2D(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SAMPLER_2D = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SAMPLER_CUBE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SAMPLER_CUBE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SAMPLER_CUBE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SAMPLER_CUBE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERTEX_ATTRIB_ARRAY_ENABLED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_ENABLED;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERTEX_ATTRIB_ARRAY_ENABLED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_ENABLED = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERTEX_ATTRIB_ARRAY_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERTEX_ATTRIB_ARRAY_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERTEX_ATTRIB_ARRAY_STRIDE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_STRIDE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERTEX_ATTRIB_ARRAY_STRIDE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_STRIDE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERTEX_ATTRIB_ARRAY_TYPE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_TYPE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERTEX_ATTRIB_ARRAY_TYPE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_TYPE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERTEX_ATTRIB_ARRAY_NORMALIZED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_NORMALIZED;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERTEX_ATTRIB_ARRAY_NORMALIZED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERTEX_ATTRIB_ARRAY_POINTER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_POINTER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERTEX_ATTRIB_ARRAY_POINTER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_POINTER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_IMPLEMENTATION_COLOR_READ_TYPE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_IMPLEMENTATION_COLOR_READ_TYPE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_IMPLEMENTATION_COLOR_READ_TYPE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_IMPLEMENTATION_COLOR_READ_TYPE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_IMPLEMENTATION_COLOR_READ_FORMAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_IMPLEMENTATION_COLOR_READ_FORMAT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_IMPLEMENTATION_COLOR_READ_FORMAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_IMPLEMENTATION_COLOR_READ_FORMAT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_COMPILE_STATUS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_COMPILE_STATUS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_COMPILE_STATUS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_COMPILE_STATUS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INFO_LOG_LENGTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INFO_LOG_LENGTH;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INFO_LOG_LENGTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INFO_LOG_LENGTH = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SHADER_SOURCE_LENGTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SHADER_SOURCE_LENGTH;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SHADER_SOURCE_LENGTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SHADER_SOURCE_LENGTH = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SHADER_COMPILER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SHADER_COMPILER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SHADER_COMPILER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SHADER_COMPILER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_SHADER_BINARY_FORMATS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_SHADER_BINARY_FORMATS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_SHADER_BINARY_FORMATS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_SHADER_BINARY_FORMATS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NUM_SHADER_BINARY_FORMATS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NUM_SHADER_BINARY_FORMATS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NUM_SHADER_BINARY_FORMATS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NUM_SHADER_BINARY_FORMATS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LOW_FLOAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LOW_FLOAT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LOW_FLOAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LOW_FLOAT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MEDIUM_FLOAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MEDIUM_FLOAT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MEDIUM_FLOAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MEDIUM_FLOAT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_HIGH_FLOAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_HIGH_FLOAT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_HIGH_FLOAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_HIGH_FLOAT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_LOW_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_LOW_INT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_LOW_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_LOW_INT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MEDIUM_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MEDIUM_INT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MEDIUM_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MEDIUM_INT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_HIGH_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_HIGH_INT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_HIGH_INT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_HIGH_INT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RGBA4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RGBA4;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RGBA4(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RGBA4 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RGB5_A1(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RGB5_A1;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RGB5_A1(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RGB5_A1 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RGB565(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RGB565;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RGB565(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RGB565 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_COMPONENT16(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_COMPONENT16;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_COMPONENT16(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_COMPONENT16 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_INDEX(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_INDEX;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_INDEX(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_INDEX = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_INDEX8(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_INDEX8;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_INDEX8(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_INDEX8 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_WIDTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_WIDTH;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_WIDTH(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_WIDTH = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_HEIGHT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_HEIGHT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_HEIGHT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_HEIGHT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_INTERNAL_FORMAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_INTERNAL_FORMAT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_INTERNAL_FORMAT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_INTERNAL_FORMAT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_RED_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_RED_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_RED_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_RED_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_GREEN_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_GREEN_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_GREEN_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_GREEN_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_BLUE_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_BLUE_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_BLUE_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_BLUE_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_ALPHA_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_ALPHA_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_ALPHA_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_ALPHA_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_DEPTH_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_DEPTH_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_DEPTH_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_DEPTH_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_STENCIL_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_STENCIL_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_STENCIL_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_STENCIL_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_COLOR_ATTACHMENT0(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_COLOR_ATTACHMENT0;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_COLOR_ATTACHMENT0(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_COLOR_ATTACHMENT0 = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_DEPTH_ATTACHMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_DEPTH_ATTACHMENT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_DEPTH_ATTACHMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_DEPTH_ATTACHMENT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_STENCIL_ATTACHMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_STENCIL_ATTACHMENT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_STENCIL_ATTACHMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_STENCIL_ATTACHMENT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_NONE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_NONE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_NONE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_NONE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_COMPLETE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_COMPLETE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_COMPLETE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_COMPLETE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_UNSUPPORTED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_UNSUPPORTED;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_UNSUPPORTED(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_UNSUPPORTED = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_FRAMEBUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_FRAMEBUFFER_BINDING;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_FRAMEBUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_FRAMEBUFFER_BINDING = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_RENDERBUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_RENDERBUFFER_BINDING;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_RENDERBUFFER_BINDING(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_RENDERBUFFER_BINDING = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_RENDERBUFFER_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_RENDERBUFFER_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_RENDERBUFFER_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_RENDERBUFFER_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_INVALID_FRAMEBUFFER_OPERATION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_INVALID_FRAMEBUFFER_OPERATION;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_INVALID_FRAMEBUFFER_OPERATION(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_INVALID_FRAMEBUFFER_OPERATION = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_VERTEX_PROGRAM_POINT_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_VERTEX_PROGRAM_POINT_SIZE;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_VERTEX_PROGRAM_POINT_SIZE(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_VERTEX_PROGRAM_POINT_SIZE = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_COVERAGE_BUFFER_BIT_NV(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_COVERAGE_BUFFER_BIT_NV;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_COVERAGE_BUFFER_BIT_NV(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_COVERAGE_BUFFER_BIT_NV = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_TEXTURE_MAX_ANISOTROPY_EXT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_TEXTURE_MAX_ANISOTROPY_EXT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_TEXTURE_MAX_ANISOTROPY_EXT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_TEXTURE_MAX_ANISOTROPY_EXT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var result = DefaultNamespace.Test.GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                DefaultNamespace.Test.GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Color(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as DefaultNamespace.Test;
                var result = obj.Color;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_Color(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as DefaultNamespace.Test;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.Color = argHelper.GetInt32(false);
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
                    { new Puerts.MethodKey {Name = "rgba8888ToColor", IsStatic = true}, F_rgba8888ToColor },
                    { new Puerts.MethodKey {Name = "Start", IsStatic = false}, M_Start },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"GL_ES_VERSION_2_0", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ES_VERSION_2_0, Setter = S_GL_ES_VERSION_2_0} },
                    {"GL_DEPTH_BUFFER_BIT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_BUFFER_BIT, Setter = S_GL_DEPTH_BUFFER_BIT} },
                    {"GL_STENCIL_BUFFER_BIT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_BUFFER_BIT, Setter = S_GL_STENCIL_BUFFER_BIT} },
                    {"GL_COLOR_BUFFER_BIT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_COLOR_BUFFER_BIT, Setter = S_GL_COLOR_BUFFER_BIT} },
                    {"GL_FALSE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FALSE, Setter = S_GL_FALSE} },
                    {"GL_TRUE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TRUE, Setter = S_GL_TRUE} },
                    {"GL_POINTS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_POINTS, Setter = S_GL_POINTS} },
                    {"GL_LINES", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LINES, Setter = S_GL_LINES} },
                    {"GL_LINE_LOOP", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LINE_LOOP, Setter = S_GL_LINE_LOOP} },
                    {"GL_LINE_STRIP", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LINE_STRIP, Setter = S_GL_LINE_STRIP} },
                    {"GL_TRIANGLES", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TRIANGLES, Setter = S_GL_TRIANGLES} },
                    {"GL_TRIANGLE_STRIP", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TRIANGLE_STRIP, Setter = S_GL_TRIANGLE_STRIP} },
                    {"GL_TRIANGLE_FAN", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TRIANGLE_FAN, Setter = S_GL_TRIANGLE_FAN} },
                    {"GL_ZERO", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ZERO, Setter = S_GL_ZERO} },
                    {"GL_ONE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ONE, Setter = S_GL_ONE} },
                    {"GL_SRC_COLOR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SRC_COLOR, Setter = S_GL_SRC_COLOR} },
                    {"GL_ONE_MINUS_SRC_COLOR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ONE_MINUS_SRC_COLOR, Setter = S_GL_ONE_MINUS_SRC_COLOR} },
                    {"GL_SRC_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SRC_ALPHA, Setter = S_GL_SRC_ALPHA} },
                    {"GL_ONE_MINUS_SRC_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ONE_MINUS_SRC_ALPHA, Setter = S_GL_ONE_MINUS_SRC_ALPHA} },
                    {"GL_DST_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DST_ALPHA, Setter = S_GL_DST_ALPHA} },
                    {"GL_ONE_MINUS_DST_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ONE_MINUS_DST_ALPHA, Setter = S_GL_ONE_MINUS_DST_ALPHA} },
                    {"GL_DST_COLOR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DST_COLOR, Setter = S_GL_DST_COLOR} },
                    {"GL_ONE_MINUS_DST_COLOR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ONE_MINUS_DST_COLOR, Setter = S_GL_ONE_MINUS_DST_COLOR} },
                    {"GL_SRC_ALPHA_SATURATE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SRC_ALPHA_SATURATE, Setter = S_GL_SRC_ALPHA_SATURATE} },
                    {"GL_FUNC_ADD", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FUNC_ADD, Setter = S_GL_FUNC_ADD} },
                    {"GL_BLEND_EQUATION", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLEND_EQUATION, Setter = S_GL_BLEND_EQUATION} },
                    {"GL_BLEND_EQUATION_RGB", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLEND_EQUATION_RGB, Setter = S_GL_BLEND_EQUATION_RGB} },
                    {"GL_BLEND_EQUATION_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLEND_EQUATION_ALPHA, Setter = S_GL_BLEND_EQUATION_ALPHA} },
                    {"GL_FUNC_SUBTRACT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FUNC_SUBTRACT, Setter = S_GL_FUNC_SUBTRACT} },
                    {"GL_FUNC_REVERSE_SUBTRACT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FUNC_REVERSE_SUBTRACT, Setter = S_GL_FUNC_REVERSE_SUBTRACT} },
                    {"GL_BLEND_DST_RGB", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLEND_DST_RGB, Setter = S_GL_BLEND_DST_RGB} },
                    {"GL_BLEND_SRC_RGB", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLEND_SRC_RGB, Setter = S_GL_BLEND_SRC_RGB} },
                    {"GL_BLEND_DST_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLEND_DST_ALPHA, Setter = S_GL_BLEND_DST_ALPHA} },
                    {"GL_BLEND_SRC_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLEND_SRC_ALPHA, Setter = S_GL_BLEND_SRC_ALPHA} },
                    {"GL_CONSTANT_COLOR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_CONSTANT_COLOR, Setter = S_GL_CONSTANT_COLOR} },
                    {"GL_ONE_MINUS_CONSTANT_COLOR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ONE_MINUS_CONSTANT_COLOR, Setter = S_GL_ONE_MINUS_CONSTANT_COLOR} },
                    {"GL_CONSTANT_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_CONSTANT_ALPHA, Setter = S_GL_CONSTANT_ALPHA} },
                    {"GL_ONE_MINUS_CONSTANT_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ONE_MINUS_CONSTANT_ALPHA, Setter = S_GL_ONE_MINUS_CONSTANT_ALPHA} },
                    {"GL_BLEND_COLOR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLEND_COLOR, Setter = S_GL_BLEND_COLOR} },
                    {"GL_ARRAY_BUFFER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ARRAY_BUFFER, Setter = S_GL_ARRAY_BUFFER} },
                    {"GL_ELEMENT_ARRAY_BUFFER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ELEMENT_ARRAY_BUFFER, Setter = S_GL_ELEMENT_ARRAY_BUFFER} },
                    {"GL_ARRAY_BUFFER_BINDING", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ARRAY_BUFFER_BINDING, Setter = S_GL_ARRAY_BUFFER_BINDING} },
                    {"GL_ELEMENT_ARRAY_BUFFER_BINDING", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ELEMENT_ARRAY_BUFFER_BINDING, Setter = S_GL_ELEMENT_ARRAY_BUFFER_BINDING} },
                    {"GL_STREAM_DRAW", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STREAM_DRAW, Setter = S_GL_STREAM_DRAW} },
                    {"GL_STATIC_DRAW", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STATIC_DRAW, Setter = S_GL_STATIC_DRAW} },
                    {"GL_DYNAMIC_DRAW", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DYNAMIC_DRAW, Setter = S_GL_DYNAMIC_DRAW} },
                    {"GL_BUFFER_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BUFFER_SIZE, Setter = S_GL_BUFFER_SIZE} },
                    {"GL_BUFFER_USAGE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BUFFER_USAGE, Setter = S_GL_BUFFER_USAGE} },
                    {"GL_CURRENT_VERTEX_ATTRIB", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_CURRENT_VERTEX_ATTRIB, Setter = S_GL_CURRENT_VERTEX_ATTRIB} },
                    {"GL_FRONT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRONT, Setter = S_GL_FRONT} },
                    {"GL_BACK", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BACK, Setter = S_GL_BACK} },
                    {"GL_FRONT_AND_BACK", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRONT_AND_BACK, Setter = S_GL_FRONT_AND_BACK} },
                    {"GL_TEXTURE_2D", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_2D, Setter = S_GL_TEXTURE_2D} },
                    {"GL_CULL_FACE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_CULL_FACE, Setter = S_GL_CULL_FACE} },
                    {"GL_BLEND", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLEND, Setter = S_GL_BLEND} },
                    {"GL_DITHER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DITHER, Setter = S_GL_DITHER} },
                    {"GL_STENCIL_TEST", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_TEST, Setter = S_GL_STENCIL_TEST} },
                    {"GL_DEPTH_TEST", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_TEST, Setter = S_GL_DEPTH_TEST} },
                    {"GL_SCISSOR_TEST", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SCISSOR_TEST, Setter = S_GL_SCISSOR_TEST} },
                    {"GL_POLYGON_OFFSET_FILL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_POLYGON_OFFSET_FILL, Setter = S_GL_POLYGON_OFFSET_FILL} },
                    {"GL_SAMPLE_ALPHA_TO_COVERAGE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SAMPLE_ALPHA_TO_COVERAGE, Setter = S_GL_SAMPLE_ALPHA_TO_COVERAGE} },
                    {"GL_SAMPLE_COVERAGE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SAMPLE_COVERAGE, Setter = S_GL_SAMPLE_COVERAGE} },
                    {"GL_NO_ERROR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NO_ERROR, Setter = S_GL_NO_ERROR} },
                    {"GL_INVALID_ENUM", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INVALID_ENUM, Setter = S_GL_INVALID_ENUM} },
                    {"GL_INVALID_VALUE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INVALID_VALUE, Setter = S_GL_INVALID_VALUE} },
                    {"GL_INVALID_OPERATION", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INVALID_OPERATION, Setter = S_GL_INVALID_OPERATION} },
                    {"GL_OUT_OF_MEMORY", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_OUT_OF_MEMORY, Setter = S_GL_OUT_OF_MEMORY} },
                    {"GL_CW", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_CW, Setter = S_GL_CW} },
                    {"GL_CCW", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_CCW, Setter = S_GL_CCW} },
                    {"GL_LINE_WIDTH", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LINE_WIDTH, Setter = S_GL_LINE_WIDTH} },
                    {"GL_ALIASED_POINT_SIZE_RANGE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ALIASED_POINT_SIZE_RANGE, Setter = S_GL_ALIASED_POINT_SIZE_RANGE} },
                    {"GL_ALIASED_LINE_WIDTH_RANGE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ALIASED_LINE_WIDTH_RANGE, Setter = S_GL_ALIASED_LINE_WIDTH_RANGE} },
                    {"GL_CULL_FACE_MODE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_CULL_FACE_MODE, Setter = S_GL_CULL_FACE_MODE} },
                    {"GL_FRONT_FACE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRONT_FACE, Setter = S_GL_FRONT_FACE} },
                    {"GL_DEPTH_RANGE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_RANGE, Setter = S_GL_DEPTH_RANGE} },
                    {"GL_DEPTH_WRITEMASK", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_WRITEMASK, Setter = S_GL_DEPTH_WRITEMASK} },
                    {"GL_DEPTH_CLEAR_VALUE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_CLEAR_VALUE, Setter = S_GL_DEPTH_CLEAR_VALUE} },
                    {"GL_DEPTH_FUNC", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_FUNC, Setter = S_GL_DEPTH_FUNC} },
                    {"GL_STENCIL_CLEAR_VALUE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_CLEAR_VALUE, Setter = S_GL_STENCIL_CLEAR_VALUE} },
                    {"GL_STENCIL_FUNC", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_FUNC, Setter = S_GL_STENCIL_FUNC} },
                    {"GL_STENCIL_FAIL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_FAIL, Setter = S_GL_STENCIL_FAIL} },
                    {"GL_STENCIL_PASS_DEPTH_FAIL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_PASS_DEPTH_FAIL, Setter = S_GL_STENCIL_PASS_DEPTH_FAIL} },
                    {"GL_STENCIL_PASS_DEPTH_PASS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_PASS_DEPTH_PASS, Setter = S_GL_STENCIL_PASS_DEPTH_PASS} },
                    {"GL_STENCIL_REF", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_REF, Setter = S_GL_STENCIL_REF} },
                    {"GL_STENCIL_VALUE_MASK", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_VALUE_MASK, Setter = S_GL_STENCIL_VALUE_MASK} },
                    {"GL_STENCIL_WRITEMASK", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_WRITEMASK, Setter = S_GL_STENCIL_WRITEMASK} },
                    {"GL_STENCIL_BACK_FUNC", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_BACK_FUNC, Setter = S_GL_STENCIL_BACK_FUNC} },
                    {"GL_STENCIL_BACK_FAIL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_BACK_FAIL, Setter = S_GL_STENCIL_BACK_FAIL} },
                    {"GL_STENCIL_BACK_PASS_DEPTH_FAIL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_BACK_PASS_DEPTH_FAIL, Setter = S_GL_STENCIL_BACK_PASS_DEPTH_FAIL} },
                    {"GL_STENCIL_BACK_PASS_DEPTH_PASS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_BACK_PASS_DEPTH_PASS, Setter = S_GL_STENCIL_BACK_PASS_DEPTH_PASS} },
                    {"GL_STENCIL_BACK_REF", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_BACK_REF, Setter = S_GL_STENCIL_BACK_REF} },
                    {"GL_STENCIL_BACK_VALUE_MASK", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_BACK_VALUE_MASK, Setter = S_GL_STENCIL_BACK_VALUE_MASK} },
                    {"GL_STENCIL_BACK_WRITEMASK", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_BACK_WRITEMASK, Setter = S_GL_STENCIL_BACK_WRITEMASK} },
                    {"GL_VIEWPORT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VIEWPORT, Setter = S_GL_VIEWPORT} },
                    {"GL_SCISSOR_BOX", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SCISSOR_BOX, Setter = S_GL_SCISSOR_BOX} },
                    {"GL_COLOR_CLEAR_VALUE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_COLOR_CLEAR_VALUE, Setter = S_GL_COLOR_CLEAR_VALUE} },
                    {"GL_COLOR_WRITEMASK", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_COLOR_WRITEMASK, Setter = S_GL_COLOR_WRITEMASK} },
                    {"GL_UNPACK_ALIGNMENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_UNPACK_ALIGNMENT, Setter = S_GL_UNPACK_ALIGNMENT} },
                    {"GL_PACK_ALIGNMENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_PACK_ALIGNMENT, Setter = S_GL_PACK_ALIGNMENT} },
                    {"GL_MAX_TEXTURE_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_TEXTURE_SIZE, Setter = S_GL_MAX_TEXTURE_SIZE} },
                    {"GL_MAX_TEXTURE_UNITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_TEXTURE_UNITS, Setter = S_GL_MAX_TEXTURE_UNITS} },
                    {"GL_MAX_VIEWPORT_DIMS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_VIEWPORT_DIMS, Setter = S_GL_MAX_VIEWPORT_DIMS} },
                    {"GL_SUBPIXEL_BITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SUBPIXEL_BITS, Setter = S_GL_SUBPIXEL_BITS} },
                    {"GL_RED_BITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RED_BITS, Setter = S_GL_RED_BITS} },
                    {"GL_GREEN_BITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_GREEN_BITS, Setter = S_GL_GREEN_BITS} },
                    {"GL_BLUE_BITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BLUE_BITS, Setter = S_GL_BLUE_BITS} },
                    {"GL_ALPHA_BITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ALPHA_BITS, Setter = S_GL_ALPHA_BITS} },
                    {"GL_DEPTH_BITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_BITS, Setter = S_GL_DEPTH_BITS} },
                    {"GL_STENCIL_BITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_BITS, Setter = S_GL_STENCIL_BITS} },
                    {"GL_POLYGON_OFFSET_UNITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_POLYGON_OFFSET_UNITS, Setter = S_GL_POLYGON_OFFSET_UNITS} },
                    {"GL_POLYGON_OFFSET_FACTOR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_POLYGON_OFFSET_FACTOR, Setter = S_GL_POLYGON_OFFSET_FACTOR} },
                    {"GL_TEXTURE_BINDING_2D", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_BINDING_2D, Setter = S_GL_TEXTURE_BINDING_2D} },
                    {"GL_SAMPLE_BUFFERS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SAMPLE_BUFFERS, Setter = S_GL_SAMPLE_BUFFERS} },
                    {"GL_SAMPLES", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SAMPLES, Setter = S_GL_SAMPLES} },
                    {"GL_SAMPLE_COVERAGE_VALUE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SAMPLE_COVERAGE_VALUE, Setter = S_GL_SAMPLE_COVERAGE_VALUE} },
                    {"GL_SAMPLE_COVERAGE_INVERT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SAMPLE_COVERAGE_INVERT, Setter = S_GL_SAMPLE_COVERAGE_INVERT} },
                    {"GL_NUM_COMPRESSED_TEXTURE_FORMATS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NUM_COMPRESSED_TEXTURE_FORMATS, Setter = S_GL_NUM_COMPRESSED_TEXTURE_FORMATS} },
                    {"GL_COMPRESSED_TEXTURE_FORMATS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_COMPRESSED_TEXTURE_FORMATS, Setter = S_GL_COMPRESSED_TEXTURE_FORMATS} },
                    {"GL_DONT_CARE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DONT_CARE, Setter = S_GL_DONT_CARE} },
                    {"GL_FASTEST", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FASTEST, Setter = S_GL_FASTEST} },
                    {"GL_NICEST", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NICEST, Setter = S_GL_NICEST} },
                    {"GL_GENERATE_MIPMAP", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_GENERATE_MIPMAP, Setter = S_GL_GENERATE_MIPMAP} },
                    {"GL_GENERATE_MIPMAP_HINT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_GENERATE_MIPMAP_HINT, Setter = S_GL_GENERATE_MIPMAP_HINT} },
                    {"GL_BYTE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BYTE, Setter = S_GL_BYTE} },
                    {"GL_UNSIGNED_BYTE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_UNSIGNED_BYTE, Setter = S_GL_UNSIGNED_BYTE} },
                    {"GL_SHORT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SHORT, Setter = S_GL_SHORT} },
                    {"GL_UNSIGNED_SHORT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_UNSIGNED_SHORT, Setter = S_GL_UNSIGNED_SHORT} },
                    {"GL_INT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INT, Setter = S_GL_INT} },
                    {"GL_UNSIGNED_INT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_UNSIGNED_INT, Setter = S_GL_UNSIGNED_INT} },
                    {"GL_FLOAT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FLOAT, Setter = S_GL_FLOAT} },
                    {"GL_FIXED", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FIXED, Setter = S_GL_FIXED} },
                    {"GL_DEPTH_COMPONENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_COMPONENT, Setter = S_GL_DEPTH_COMPONENT} },
                    {"GL_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ALPHA, Setter = S_GL_ALPHA} },
                    {"GL_RGB", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RGB, Setter = S_GL_RGB} },
                    {"GL_RGBA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RGBA, Setter = S_GL_RGBA} },
                    {"GL_LUMINANCE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LUMINANCE, Setter = S_GL_LUMINANCE} },
                    {"GL_LUMINANCE_ALPHA", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LUMINANCE_ALPHA, Setter = S_GL_LUMINANCE_ALPHA} },
                    {"GL_UNSIGNED_SHORT_4_4_4_4", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_UNSIGNED_SHORT_4_4_4_4, Setter = S_GL_UNSIGNED_SHORT_4_4_4_4} },
                    {"GL_UNSIGNED_SHORT_5_5_5_1", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_UNSIGNED_SHORT_5_5_5_1, Setter = S_GL_UNSIGNED_SHORT_5_5_5_1} },
                    {"GL_UNSIGNED_SHORT_5_6_5", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_UNSIGNED_SHORT_5_6_5, Setter = S_GL_UNSIGNED_SHORT_5_6_5} },
                    {"GL_FRAGMENT_SHADER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAGMENT_SHADER, Setter = S_GL_FRAGMENT_SHADER} },
                    {"GL_VERTEX_SHADER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERTEX_SHADER, Setter = S_GL_VERTEX_SHADER} },
                    {"GL_MAX_VERTEX_ATTRIBS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_VERTEX_ATTRIBS, Setter = S_GL_MAX_VERTEX_ATTRIBS} },
                    {"GL_MAX_VERTEX_UNIFORM_VECTORS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_VERTEX_UNIFORM_VECTORS, Setter = S_GL_MAX_VERTEX_UNIFORM_VECTORS} },
                    {"GL_MAX_VARYING_VECTORS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_VARYING_VECTORS, Setter = S_GL_MAX_VARYING_VECTORS} },
                    {"GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS, Setter = S_GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS} },
                    {"GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS, Setter = S_GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS} },
                    {"GL_MAX_TEXTURE_IMAGE_UNITS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_TEXTURE_IMAGE_UNITS, Setter = S_GL_MAX_TEXTURE_IMAGE_UNITS} },
                    {"GL_MAX_FRAGMENT_UNIFORM_VECTORS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_FRAGMENT_UNIFORM_VECTORS, Setter = S_GL_MAX_FRAGMENT_UNIFORM_VECTORS} },
                    {"GL_SHADER_TYPE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SHADER_TYPE, Setter = S_GL_SHADER_TYPE} },
                    {"GL_DELETE_STATUS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DELETE_STATUS, Setter = S_GL_DELETE_STATUS} },
                    {"GL_LINK_STATUS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LINK_STATUS, Setter = S_GL_LINK_STATUS} },
                    {"GL_VALIDATE_STATUS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VALIDATE_STATUS, Setter = S_GL_VALIDATE_STATUS} },
                    {"GL_ATTACHED_SHADERS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ATTACHED_SHADERS, Setter = S_GL_ATTACHED_SHADERS} },
                    {"GL_ACTIVE_UNIFORMS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ACTIVE_UNIFORMS, Setter = S_GL_ACTIVE_UNIFORMS} },
                    {"GL_ACTIVE_UNIFORM_MAX_LENGTH", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ACTIVE_UNIFORM_MAX_LENGTH, Setter = S_GL_ACTIVE_UNIFORM_MAX_LENGTH} },
                    {"GL_ACTIVE_ATTRIBUTES", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ACTIVE_ATTRIBUTES, Setter = S_GL_ACTIVE_ATTRIBUTES} },
                    {"GL_ACTIVE_ATTRIBUTE_MAX_LENGTH", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ACTIVE_ATTRIBUTE_MAX_LENGTH, Setter = S_GL_ACTIVE_ATTRIBUTE_MAX_LENGTH} },
                    {"GL_SHADING_LANGUAGE_VERSION", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SHADING_LANGUAGE_VERSION, Setter = S_GL_SHADING_LANGUAGE_VERSION} },
                    {"GL_CURRENT_PROGRAM", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_CURRENT_PROGRAM, Setter = S_GL_CURRENT_PROGRAM} },
                    {"GL_NEVER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NEVER, Setter = S_GL_NEVER} },
                    {"GL_LESS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LESS, Setter = S_GL_LESS} },
                    {"GL_EQUAL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_EQUAL, Setter = S_GL_EQUAL} },
                    {"GL_LEQUAL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LEQUAL, Setter = S_GL_LEQUAL} },
                    {"GL_GREATER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_GREATER, Setter = S_GL_GREATER} },
                    {"GL_NOTEQUAL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NOTEQUAL, Setter = S_GL_NOTEQUAL} },
                    {"GL_GEQUAL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_GEQUAL, Setter = S_GL_GEQUAL} },
                    {"GL_ALWAYS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ALWAYS, Setter = S_GL_ALWAYS} },
                    {"GL_KEEP", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_KEEP, Setter = S_GL_KEEP} },
                    {"GL_REPLACE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_REPLACE, Setter = S_GL_REPLACE} },
                    {"GL_INCR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INCR, Setter = S_GL_INCR} },
                    {"GL_DECR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DECR, Setter = S_GL_DECR} },
                    {"GL_INVERT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INVERT, Setter = S_GL_INVERT} },
                    {"GL_INCR_WRAP", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INCR_WRAP, Setter = S_GL_INCR_WRAP} },
                    {"GL_DECR_WRAP", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DECR_WRAP, Setter = S_GL_DECR_WRAP} },
                    {"GL_VENDOR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VENDOR, Setter = S_GL_VENDOR} },
                    {"GL_RENDERER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERER, Setter = S_GL_RENDERER} },
                    {"GL_VERSION", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERSION, Setter = S_GL_VERSION} },
                    {"GL_EXTENSIONS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_EXTENSIONS, Setter = S_GL_EXTENSIONS} },
                    {"GL_NEAREST", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NEAREST, Setter = S_GL_NEAREST} },
                    {"GL_LINEAR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LINEAR, Setter = S_GL_LINEAR} },
                    {"GL_NEAREST_MIPMAP_NEAREST", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NEAREST_MIPMAP_NEAREST, Setter = S_GL_NEAREST_MIPMAP_NEAREST} },
                    {"GL_LINEAR_MIPMAP_NEAREST", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LINEAR_MIPMAP_NEAREST, Setter = S_GL_LINEAR_MIPMAP_NEAREST} },
                    {"GL_NEAREST_MIPMAP_LINEAR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NEAREST_MIPMAP_LINEAR, Setter = S_GL_NEAREST_MIPMAP_LINEAR} },
                    {"GL_LINEAR_MIPMAP_LINEAR", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LINEAR_MIPMAP_LINEAR, Setter = S_GL_LINEAR_MIPMAP_LINEAR} },
                    {"GL_TEXTURE_MAG_FILTER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_MAG_FILTER, Setter = S_GL_TEXTURE_MAG_FILTER} },
                    {"GL_TEXTURE_MIN_FILTER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_MIN_FILTER, Setter = S_GL_TEXTURE_MIN_FILTER} },
                    {"GL_TEXTURE_WRAP_S", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_WRAP_S, Setter = S_GL_TEXTURE_WRAP_S} },
                    {"GL_TEXTURE_WRAP_T", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_WRAP_T, Setter = S_GL_TEXTURE_WRAP_T} },
                    {"GL_TEXTURE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE, Setter = S_GL_TEXTURE} },
                    {"GL_TEXTURE_CUBE_MAP", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_CUBE_MAP, Setter = S_GL_TEXTURE_CUBE_MAP} },
                    {"GL_TEXTURE_BINDING_CUBE_MAP", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_BINDING_CUBE_MAP, Setter = S_GL_TEXTURE_BINDING_CUBE_MAP} },
                    {"GL_TEXTURE_CUBE_MAP_POSITIVE_X", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_CUBE_MAP_POSITIVE_X, Setter = S_GL_TEXTURE_CUBE_MAP_POSITIVE_X} },
                    {"GL_TEXTURE_CUBE_MAP_NEGATIVE_X", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_CUBE_MAP_NEGATIVE_X, Setter = S_GL_TEXTURE_CUBE_MAP_NEGATIVE_X} },
                    {"GL_TEXTURE_CUBE_MAP_POSITIVE_Y", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_CUBE_MAP_POSITIVE_Y, Setter = S_GL_TEXTURE_CUBE_MAP_POSITIVE_Y} },
                    {"GL_TEXTURE_CUBE_MAP_NEGATIVE_Y", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_CUBE_MAP_NEGATIVE_Y, Setter = S_GL_TEXTURE_CUBE_MAP_NEGATIVE_Y} },
                    {"GL_TEXTURE_CUBE_MAP_POSITIVE_Z", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_CUBE_MAP_POSITIVE_Z, Setter = S_GL_TEXTURE_CUBE_MAP_POSITIVE_Z} },
                    {"GL_TEXTURE_CUBE_MAP_NEGATIVE_Z", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_CUBE_MAP_NEGATIVE_Z, Setter = S_GL_TEXTURE_CUBE_MAP_NEGATIVE_Z} },
                    {"GL_MAX_CUBE_MAP_TEXTURE_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_CUBE_MAP_TEXTURE_SIZE, Setter = S_GL_MAX_CUBE_MAP_TEXTURE_SIZE} },
                    {"GL_TEXTURE0", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE0, Setter = S_GL_TEXTURE0} },
                    {"GL_TEXTURE1", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE1, Setter = S_GL_TEXTURE1} },
                    {"GL_TEXTURE2", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE2, Setter = S_GL_TEXTURE2} },
                    {"GL_TEXTURE3", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE3, Setter = S_GL_TEXTURE3} },
                    {"GL_TEXTURE4", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE4, Setter = S_GL_TEXTURE4} },
                    {"GL_TEXTURE5", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE5, Setter = S_GL_TEXTURE5} },
                    {"GL_TEXTURE6", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE6, Setter = S_GL_TEXTURE6} },
                    {"GL_TEXTURE7", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE7, Setter = S_GL_TEXTURE7} },
                    {"GL_TEXTURE8", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE8, Setter = S_GL_TEXTURE8} },
                    {"GL_TEXTURE9", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE9, Setter = S_GL_TEXTURE9} },
                    {"GL_TEXTURE10", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE10, Setter = S_GL_TEXTURE10} },
                    {"GL_TEXTURE11", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE11, Setter = S_GL_TEXTURE11} },
                    {"GL_TEXTURE12", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE12, Setter = S_GL_TEXTURE12} },
                    {"GL_TEXTURE13", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE13, Setter = S_GL_TEXTURE13} },
                    {"GL_TEXTURE14", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE14, Setter = S_GL_TEXTURE14} },
                    {"GL_TEXTURE15", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE15, Setter = S_GL_TEXTURE15} },
                    {"GL_TEXTURE16", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE16, Setter = S_GL_TEXTURE16} },
                    {"GL_TEXTURE17", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE17, Setter = S_GL_TEXTURE17} },
                    {"GL_TEXTURE18", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE18, Setter = S_GL_TEXTURE18} },
                    {"GL_TEXTURE19", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE19, Setter = S_GL_TEXTURE19} },
                    {"GL_TEXTURE20", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE20, Setter = S_GL_TEXTURE20} },
                    {"GL_TEXTURE21", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE21, Setter = S_GL_TEXTURE21} },
                    {"GL_TEXTURE22", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE22, Setter = S_GL_TEXTURE22} },
                    {"GL_TEXTURE23", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE23, Setter = S_GL_TEXTURE23} },
                    {"GL_TEXTURE24", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE24, Setter = S_GL_TEXTURE24} },
                    {"GL_TEXTURE25", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE25, Setter = S_GL_TEXTURE25} },
                    {"GL_TEXTURE26", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE26, Setter = S_GL_TEXTURE26} },
                    {"GL_TEXTURE27", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE27, Setter = S_GL_TEXTURE27} },
                    {"GL_TEXTURE28", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE28, Setter = S_GL_TEXTURE28} },
                    {"GL_TEXTURE29", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE29, Setter = S_GL_TEXTURE29} },
                    {"GL_TEXTURE30", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE30, Setter = S_GL_TEXTURE30} },
                    {"GL_TEXTURE31", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE31, Setter = S_GL_TEXTURE31} },
                    {"GL_ACTIVE_TEXTURE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_ACTIVE_TEXTURE, Setter = S_GL_ACTIVE_TEXTURE} },
                    {"GL_REPEAT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_REPEAT, Setter = S_GL_REPEAT} },
                    {"GL_CLAMP_TO_EDGE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_CLAMP_TO_EDGE, Setter = S_GL_CLAMP_TO_EDGE} },
                    {"GL_MIRRORED_REPEAT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MIRRORED_REPEAT, Setter = S_GL_MIRRORED_REPEAT} },
                    {"GL_FLOAT_VEC2", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FLOAT_VEC2, Setter = S_GL_FLOAT_VEC2} },
                    {"GL_FLOAT_VEC3", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FLOAT_VEC3, Setter = S_GL_FLOAT_VEC3} },
                    {"GL_FLOAT_VEC4", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FLOAT_VEC4, Setter = S_GL_FLOAT_VEC4} },
                    {"GL_INT_VEC2", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INT_VEC2, Setter = S_GL_INT_VEC2} },
                    {"GL_INT_VEC3", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INT_VEC3, Setter = S_GL_INT_VEC3} },
                    {"GL_INT_VEC4", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INT_VEC4, Setter = S_GL_INT_VEC4} },
                    {"GL_BOOL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BOOL, Setter = S_GL_BOOL} },
                    {"GL_BOOL_VEC2", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BOOL_VEC2, Setter = S_GL_BOOL_VEC2} },
                    {"GL_BOOL_VEC3", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BOOL_VEC3, Setter = S_GL_BOOL_VEC3} },
                    {"GL_BOOL_VEC4", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_BOOL_VEC4, Setter = S_GL_BOOL_VEC4} },
                    {"GL_FLOAT_MAT2", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FLOAT_MAT2, Setter = S_GL_FLOAT_MAT2} },
                    {"GL_FLOAT_MAT3", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FLOAT_MAT3, Setter = S_GL_FLOAT_MAT3} },
                    {"GL_FLOAT_MAT4", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FLOAT_MAT4, Setter = S_GL_FLOAT_MAT4} },
                    {"GL_SAMPLER_2D", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SAMPLER_2D, Setter = S_GL_SAMPLER_2D} },
                    {"GL_SAMPLER_CUBE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SAMPLER_CUBE, Setter = S_GL_SAMPLER_CUBE} },
                    {"GL_VERTEX_ATTRIB_ARRAY_ENABLED", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERTEX_ATTRIB_ARRAY_ENABLED, Setter = S_GL_VERTEX_ATTRIB_ARRAY_ENABLED} },
                    {"GL_VERTEX_ATTRIB_ARRAY_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERTEX_ATTRIB_ARRAY_SIZE, Setter = S_GL_VERTEX_ATTRIB_ARRAY_SIZE} },
                    {"GL_VERTEX_ATTRIB_ARRAY_STRIDE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERTEX_ATTRIB_ARRAY_STRIDE, Setter = S_GL_VERTEX_ATTRIB_ARRAY_STRIDE} },
                    {"GL_VERTEX_ATTRIB_ARRAY_TYPE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERTEX_ATTRIB_ARRAY_TYPE, Setter = S_GL_VERTEX_ATTRIB_ARRAY_TYPE} },
                    {"GL_VERTEX_ATTRIB_ARRAY_NORMALIZED", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERTEX_ATTRIB_ARRAY_NORMALIZED, Setter = S_GL_VERTEX_ATTRIB_ARRAY_NORMALIZED} },
                    {"GL_VERTEX_ATTRIB_ARRAY_POINTER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERTEX_ATTRIB_ARRAY_POINTER, Setter = S_GL_VERTEX_ATTRIB_ARRAY_POINTER} },
                    {"GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING, Setter = S_GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING} },
                    {"GL_IMPLEMENTATION_COLOR_READ_TYPE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_IMPLEMENTATION_COLOR_READ_TYPE, Setter = S_GL_IMPLEMENTATION_COLOR_READ_TYPE} },
                    {"GL_IMPLEMENTATION_COLOR_READ_FORMAT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_IMPLEMENTATION_COLOR_READ_FORMAT, Setter = S_GL_IMPLEMENTATION_COLOR_READ_FORMAT} },
                    {"GL_COMPILE_STATUS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_COMPILE_STATUS, Setter = S_GL_COMPILE_STATUS} },
                    {"GL_INFO_LOG_LENGTH", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INFO_LOG_LENGTH, Setter = S_GL_INFO_LOG_LENGTH} },
                    {"GL_SHADER_SOURCE_LENGTH", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SHADER_SOURCE_LENGTH, Setter = S_GL_SHADER_SOURCE_LENGTH} },
                    {"GL_SHADER_COMPILER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SHADER_COMPILER, Setter = S_GL_SHADER_COMPILER} },
                    {"GL_SHADER_BINARY_FORMATS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_SHADER_BINARY_FORMATS, Setter = S_GL_SHADER_BINARY_FORMATS} },
                    {"GL_NUM_SHADER_BINARY_FORMATS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NUM_SHADER_BINARY_FORMATS, Setter = S_GL_NUM_SHADER_BINARY_FORMATS} },
                    {"GL_LOW_FLOAT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LOW_FLOAT, Setter = S_GL_LOW_FLOAT} },
                    {"GL_MEDIUM_FLOAT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MEDIUM_FLOAT, Setter = S_GL_MEDIUM_FLOAT} },
                    {"GL_HIGH_FLOAT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_HIGH_FLOAT, Setter = S_GL_HIGH_FLOAT} },
                    {"GL_LOW_INT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_LOW_INT, Setter = S_GL_LOW_INT} },
                    {"GL_MEDIUM_INT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MEDIUM_INT, Setter = S_GL_MEDIUM_INT} },
                    {"GL_HIGH_INT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_HIGH_INT, Setter = S_GL_HIGH_INT} },
                    {"GL_FRAMEBUFFER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER, Setter = S_GL_FRAMEBUFFER} },
                    {"GL_RENDERBUFFER", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER, Setter = S_GL_RENDERBUFFER} },
                    {"GL_RGBA4", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RGBA4, Setter = S_GL_RGBA4} },
                    {"GL_RGB5_A1", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RGB5_A1, Setter = S_GL_RGB5_A1} },
                    {"GL_RGB565", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RGB565, Setter = S_GL_RGB565} },
                    {"GL_DEPTH_COMPONENT16", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_COMPONENT16, Setter = S_GL_DEPTH_COMPONENT16} },
                    {"GL_STENCIL_INDEX", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_INDEX, Setter = S_GL_STENCIL_INDEX} },
                    {"GL_STENCIL_INDEX8", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_INDEX8, Setter = S_GL_STENCIL_INDEX8} },
                    {"GL_RENDERBUFFER_WIDTH", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_WIDTH, Setter = S_GL_RENDERBUFFER_WIDTH} },
                    {"GL_RENDERBUFFER_HEIGHT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_HEIGHT, Setter = S_GL_RENDERBUFFER_HEIGHT} },
                    {"GL_RENDERBUFFER_INTERNAL_FORMAT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_INTERNAL_FORMAT, Setter = S_GL_RENDERBUFFER_INTERNAL_FORMAT} },
                    {"GL_RENDERBUFFER_RED_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_RED_SIZE, Setter = S_GL_RENDERBUFFER_RED_SIZE} },
                    {"GL_RENDERBUFFER_GREEN_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_GREEN_SIZE, Setter = S_GL_RENDERBUFFER_GREEN_SIZE} },
                    {"GL_RENDERBUFFER_BLUE_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_BLUE_SIZE, Setter = S_GL_RENDERBUFFER_BLUE_SIZE} },
                    {"GL_RENDERBUFFER_ALPHA_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_ALPHA_SIZE, Setter = S_GL_RENDERBUFFER_ALPHA_SIZE} },
                    {"GL_RENDERBUFFER_DEPTH_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_DEPTH_SIZE, Setter = S_GL_RENDERBUFFER_DEPTH_SIZE} },
                    {"GL_RENDERBUFFER_STENCIL_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_STENCIL_SIZE, Setter = S_GL_RENDERBUFFER_STENCIL_SIZE} },
                    {"GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE, Setter = S_GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE} },
                    {"GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME, Setter = S_GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME} },
                    {"GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL, Setter = S_GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL} },
                    {"GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE, Setter = S_GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE} },
                    {"GL_COLOR_ATTACHMENT0", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_COLOR_ATTACHMENT0, Setter = S_GL_COLOR_ATTACHMENT0} },
                    {"GL_DEPTH_ATTACHMENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_DEPTH_ATTACHMENT, Setter = S_GL_DEPTH_ATTACHMENT} },
                    {"GL_STENCIL_ATTACHMENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_STENCIL_ATTACHMENT, Setter = S_GL_STENCIL_ATTACHMENT} },
                    {"GL_NONE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_NONE, Setter = S_GL_NONE} },
                    {"GL_FRAMEBUFFER_COMPLETE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_COMPLETE, Setter = S_GL_FRAMEBUFFER_COMPLETE} },
                    {"GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT, Setter = S_GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT} },
                    {"GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT, Setter = S_GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT} },
                    {"GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS, Setter = S_GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS} },
                    {"GL_FRAMEBUFFER_UNSUPPORTED", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_UNSUPPORTED, Setter = S_GL_FRAMEBUFFER_UNSUPPORTED} },
                    {"GL_FRAMEBUFFER_BINDING", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_FRAMEBUFFER_BINDING, Setter = S_GL_FRAMEBUFFER_BINDING} },
                    {"GL_RENDERBUFFER_BINDING", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_RENDERBUFFER_BINDING, Setter = S_GL_RENDERBUFFER_BINDING} },
                    {"GL_MAX_RENDERBUFFER_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_RENDERBUFFER_SIZE, Setter = S_GL_MAX_RENDERBUFFER_SIZE} },
                    {"GL_INVALID_FRAMEBUFFER_OPERATION", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_INVALID_FRAMEBUFFER_OPERATION, Setter = S_GL_INVALID_FRAMEBUFFER_OPERATION} },
                    {"GL_VERTEX_PROGRAM_POINT_SIZE", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_VERTEX_PROGRAM_POINT_SIZE, Setter = S_GL_VERTEX_PROGRAM_POINT_SIZE} },
                    {"GL_COVERAGE_BUFFER_BIT_NV", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_COVERAGE_BUFFER_BIT_NV, Setter = S_GL_COVERAGE_BUFFER_BIT_NV} },
                    {"GL_TEXTURE_MAX_ANISOTROPY_EXT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_TEXTURE_MAX_ANISOTROPY_EXT, Setter = S_GL_TEXTURE_MAX_ANISOTROPY_EXT} },
                    {"GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT, Setter = S_GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT} },
                    {"Color", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Color, Setter = S_Color} },
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