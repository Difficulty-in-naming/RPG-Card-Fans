using System;

public enum UIDeepEnum: short
{
    Default = 0,
    One = 1,
    NetworkLoading = short.MaxValue,
    GameLoading = short.MaxValue - 1,
    Guide = short.MaxValue,
    ResourcesBar = 10,
    BlockTouch = 100,
    Tips = short.MaxValue - 1
}