﻿/* This is .NET safe implementation of Crc32C algorithm.
 * See detailed comments in Crc32 implementation
 * 
 * Max Vysokikh, 2016-2017
 */

namespace Core.Utils.Crc32
{
    internal class SafeProxyC: SafeProxy
    {
        private const uint Poly = 0x82F63B78u;

        internal SafeProxyC()
        {
            Init(Poly);
        }
    }
}