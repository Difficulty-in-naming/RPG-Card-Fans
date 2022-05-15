namespace Core.Utils
{
    public static class SharpUtils
    {
        ///结构体在被作为参数传递时传递的是副本所以我们可以用这种方法做浅拷贝(结构体中的类只会复制引用)
        public static T Clone<T> ( this T val ) where T : struct => val;
    }
}