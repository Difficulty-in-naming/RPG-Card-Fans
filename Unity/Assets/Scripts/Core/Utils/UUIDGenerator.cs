namespace Core.Utils
{
    public class UUIDGenerator
    {
        public static string Get()
        {
            return System.Guid.NewGuid().ToString();
        }
    }
}