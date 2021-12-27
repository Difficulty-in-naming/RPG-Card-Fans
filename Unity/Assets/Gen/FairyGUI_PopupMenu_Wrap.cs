
using System;
namespace PuertsStaticWrap
{
    public static class FairyGUI_PopupMenu_Wrap
    {
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {
                if (paramLen == 0)
                {
                    {
                        var result = new FairyGUI.PopupMenu();
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(FairyGUI.PopupMenu), result);
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var result = new FairyGUI.PopupMenu(Arg0);
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(FairyGUI.PopupMenu), result);
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to FairyGUI.PopupMenu constructor");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_AddItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(FairyGUI.EventCallback0), false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<FairyGUI.EventCallback0>(false);
                        var result = obj.AddItem(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(FairyGUI.EventCallback1), false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.Get<FairyGUI.EventCallback1>(false);
                        var result = obj.AddItem(Arg0,Arg1);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to AddItem");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_AddItemAt(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(FairyGUI.EventCallback1), false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.Get<FairyGUI.EventCallback1>(false);
                        var result = obj.AddItemAt(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, null, false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject | Puerts.JsValueType.Function, typeof(FairyGUI.EventCallback0), false, false))
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.Get<FairyGUI.EventCallback0>(false);
                        var result = obj.AddItemAt(Arg0,Arg1,Arg2);
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to AddItemAt");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_AddSeperator(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                if (paramLen == 0)
                {
                    {
                        obj.AddSeperator();
                        return;
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        obj.AddSeperator(Arg0);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to AddSeperator");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetItemName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.GetInt32(false);
                        var result = obj.GetItemName(Arg0);
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
        private static void M_SetItemText(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetString(false);
                        obj.SetItemText(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_SetItemVisible(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        obj.SetItemVisible(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_SetItemGrayed(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        obj.SetItemGrayed(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_SetItemCheckable(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        obj.SetItemCheckable(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_SetItemChecked(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var Arg1 = argHelper1.GetBoolean(false);
                        obj.SetItemChecked(Arg0,Arg1);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_IsItemChecked(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.GetString(false);
                        var result = obj.IsItemChecked(Arg0);
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
        private static void M_RemoveItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    {
                        var Arg0 = argHelper0.GetString(false);
                        obj.RemoveItem(Arg0);
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_ClearItems(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    {
                        obj.ClearItems();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Dispose(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    {
                        obj.Dispose();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Show(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                if (paramLen == 0)
                {
                    {
                        obj.Show();
                        return;
                    }
                }
                if (paramLen == 1)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(FairyGUI.GObject), false, false))
                    {
                        var Arg0 = argHelper0.Get<FairyGUI.GObject>(false);
                        obj.Show(Arg0);
                        return;
                    }
                }
                if (paramLen == 2)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(FairyGUI.GObject), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false))
                    {
                        var Arg0 = argHelper0.Get<FairyGUI.GObject>(false);
                        var Arg1 = (FairyGUI.PopupDirection)argHelper1.GetInt32(false);
                        obj.Show(Arg0,Arg1);
                        return;
                    }
                }
                if (paramLen == 3)
                {
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(FairyGUI.GObject), false, false)
                        && argHelper1.IsMatch(Puerts.JsValueType.Number, null, false, false)
                        && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(FairyGUI.PopupMenu), false, false))
                    {
                        var Arg0 = argHelper0.Get<FairyGUI.GObject>(false);
                        var Arg1 = (FairyGUI.PopupDirection)argHelper1.GetInt32(false);
                        var Arg2 = argHelper2.Get<FairyGUI.PopupMenu>(false);
                        obj.Show(Arg0,Arg1,Arg2);
                        return;
                    }
                }
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Show");
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Hide(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                {
                    {
                        obj.Hide();
                    }
                }
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_onPopup(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var result = obj.onPopup;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_onClose(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var result = obj.onClose;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_itemCount(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var result = obj.itemCount;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_contentPane(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var result = obj.contentPane;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_list(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var result = obj.list;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_visibleItemCount(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var result = obj.visibleItemCount;
                Puerts.PuertsDLL.ReturnNumber(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_visibleItemCount(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.visibleItemCount = argHelper.GetInt32(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_hideOnClickItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var result = obj.hideOnClickItem;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_hideOnClickItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.hideOnClickItem = argHelper.GetBoolean(false);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_autoSize(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var result = obj.autoSize;
                Puerts.PuertsDLL.ReturnBoolean(isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void S_autoSize(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as FairyGUI.PopupMenu;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                obj.autoSize = argHelper.GetBoolean(false);
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
                    { new Puerts.MethodKey {Name = "AddItem", IsStatic = false}, M_AddItem },
                    { new Puerts.MethodKey {Name = "AddItemAt", IsStatic = false}, M_AddItemAt },
                    { new Puerts.MethodKey {Name = "AddSeperator", IsStatic = false}, M_AddSeperator },
                    { new Puerts.MethodKey {Name = "GetItemName", IsStatic = false}, M_GetItemName },
                    { new Puerts.MethodKey {Name = "SetItemText", IsStatic = false}, M_SetItemText },
                    { new Puerts.MethodKey {Name = "SetItemVisible", IsStatic = false}, M_SetItemVisible },
                    { new Puerts.MethodKey {Name = "SetItemGrayed", IsStatic = false}, M_SetItemGrayed },
                    { new Puerts.MethodKey {Name = "SetItemCheckable", IsStatic = false}, M_SetItemCheckable },
                    { new Puerts.MethodKey {Name = "SetItemChecked", IsStatic = false}, M_SetItemChecked },
                    { new Puerts.MethodKey {Name = "IsItemChecked", IsStatic = false}, M_IsItemChecked },
                    { new Puerts.MethodKey {Name = "RemoveItem", IsStatic = false}, M_RemoveItem },
                    { new Puerts.MethodKey {Name = "ClearItems", IsStatic = false}, M_ClearItems },
                    { new Puerts.MethodKey {Name = "Dispose", IsStatic = false}, M_Dispose },
                    { new Puerts.MethodKey {Name = "Show", IsStatic = false}, M_Show },
                    { new Puerts.MethodKey {Name = "Hide", IsStatic = false}, M_Hide },
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    {"onPopup", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_onPopup, Setter = null} },
                    {"onClose", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_onClose, Setter = null} },
                    {"itemCount", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_itemCount, Setter = null} },
                    {"contentPane", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_contentPane, Setter = null} },
                    {"list", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_list, Setter = null} },
                    {"visibleItemCount", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_visibleItemCount, Setter = S_visibleItemCount} },
                    {"hideOnClickItem", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_hideOnClickItem, Setter = S_hideOnClickItem} },
                    {"autoSize", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_autoSize, Setter = S_autoSize} },
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