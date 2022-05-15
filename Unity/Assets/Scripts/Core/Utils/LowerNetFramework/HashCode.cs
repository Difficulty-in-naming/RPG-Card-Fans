namespace Core.Utils.LowerNetFramework
{
    public static class HashCode
    {
        public static int Combine<T1,T2>(T1 obj1,T2 obj2)
        {
            int hash1 = (5381 << 16) + 5381;
            int hash2 = hash1;

            int i = 0;
            var hashCode = obj1.GetHashCode();
            if (i % 2 == 0)
                hash1 = ((hash1 << 5) + hash1 + (hash1 >> 27)) ^ hashCode;
            else
                hash2 = ((hash2 << 5) + hash2 + (hash2 >> 27)) ^ hashCode;
            ++i;
            hashCode = obj2.GetHashCode();
            if (i % 2 == 0)
                hash1 = ((hash1 << 5) + hash1 + (hash1 >> 27)) ^ hashCode;
            else
                hash2 = ((hash2 << 5) + hash2 + (hash2 >> 27)) ^ hashCode;
            ++i;
            return hash1 + (hash2 * 1566083941);
        }
    }
}
