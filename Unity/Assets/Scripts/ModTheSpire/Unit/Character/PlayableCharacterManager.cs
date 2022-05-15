using System.Collections.Generic;

namespace ModTheSpire.Unit.Character
{
    public class PlayableCharacterManager
    {
        ///请使用Register注册Player
        public static readonly List<IPlayerInfo> mAllPlayers = new(24);
        public static void Register(IPlayerInfo player)
        {
            mAllPlayers.Add(player);
        }
    }
}