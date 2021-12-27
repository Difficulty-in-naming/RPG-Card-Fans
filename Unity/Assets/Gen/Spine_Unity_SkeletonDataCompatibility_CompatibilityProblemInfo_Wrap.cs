
using System;
namespace PuertsStaticWrap
{
    public static class Spine_Unity_SkeletonDataCompatibility_CompatibilityProblemInfo_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                {
                    {
                        var result = new Spine.Unity.SkeletonDataCompatibility.CompatibilityProblemInfo();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(Spine.Unity.SkeletonDataCompatibility.CompatibilityProblemInfo), result);
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
        private static void M_DescriptionString(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonDataCompatibility.CompatibilityProblemInfo;
                {
                    {
                        var result = obj.DescriptionString();
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
        private static void G_actualVersion(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonDataCompatibility.CompatibilityProblemInfo;
                var result = obj.actualVersion;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_actualVersion(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonDataCompatibility.CompatibilityProblemInfo;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.actualVersion = argHelper.Get<Spine.Unity.SkeletonDataCompatibility.VersionInfo>(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_compatibleVersions(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonDataCompatibility.CompatibilityProblemInfo;
                var result = obj.compatibleVersions;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_compatibleVersions(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as Spine.Unity.SkeletonDataCompatibility.CompatibilityProblemInfo;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.compatibleVersions = argHelper.Get<int[][]>(false);
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
                    { new Puerts.MethodKey {Name = "DescriptionString", IsStatic = false}, M_DescriptionString },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"actualVersion", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_actualVersion, Setter = S_actualVersion} },
                    {"compatibleVersions", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_compatibleVersions, Setter = S_compatibleVersions} },
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