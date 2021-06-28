using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public struct EventKey
{
    public ushort Key;

    private EventKey(ushort key)
    {
        Key = key;
    }
    
    public static readonly EventKey OnPlatformLogin = new EventKey(1);
    public static readonly EventKey R2C_GetItemList = new EventKey(2);
    public static readonly EventKey R2C_Login = new EventKey(3);
    public static readonly EventKey PlayerMoneyChanged = new EventKey(4);
    public static readonly EventKey PlayerGemChanged = new EventKey(5);
    public static readonly EventKey OnApplicationFocus = new EventKey(6);
    public static readonly EventKey OnApplicationPause = new EventKey(7);
    public static readonly EventKey AdsRewarded = new EventKey(8);
    public static readonly EventKey AdsSkipped = new EventKey(9);
    public static readonly EventKey AdsFailed = new EventKey(10);
    public static readonly EventKey AdsReady = new EventKey(11);
    public static readonly EventKey GuildChanged = new EventKey(12);
    public static readonly EventKey CurEnergyChange = new EventKey(13);
    public static readonly EventKey MaxEnergyChange = new EventKey(14);
    public static readonly EventKey InfineEnergyChange = new EventKey(15);
    public static readonly EventKey GainGameCoin = new EventKey(16);
    public static readonly EventKey SpentGameCoin = new EventKey(17);
    public static readonly EventKey GainGem = new EventKey(18);
    public static readonly EventKey SpentGem = new EventKey(19);
    public static readonly EventKey LevelFail = new EventKey(20);
    public static readonly EventKey LevelComplete = new EventKey(21);
    public static readonly EventKey RestartLevel = new EventKey(22);
    public static readonly EventKey GuildAskEnergyChanged = new EventKey(23);
    public static readonly EventKey IAPPurchaseSuccess = new EventKey(24);
    public static readonly EventKey IAPPurchaseFailed = new EventKey(25);
    public static readonly EventKey StartConnectToServer = new EventKey(26);
    public static readonly EventKey ConnectionFailure = new EventKey(27);
    public static readonly EventKey ConnectionSucceeded = new EventKey(28);
    public static readonly EventKey UseCloudSave = new EventKey(29);
    public static readonly EventKey AccountLogout = new EventKey(30);
    public static readonly EventKey AccountIn  = new EventKey(31);
    public static readonly EventKey ActiveRestaurantMainUI = new EventKey(32);
    public static readonly EventKey SevenDaySignup = new EventKey(33);
    public static readonly EventKey Data_PlayerGuildChanged = new EventKey(34);
}