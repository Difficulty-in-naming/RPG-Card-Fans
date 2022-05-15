using System.Collections.Generic;
using ModTheSpire.Blight;
using ModTheSpire.Effect;
using ModTheSpire.Event;
using ModTheSpire.Room;
using ModTheSpire.Unit.Character;

namespace ModTheSpire.Dungeon
{
//DungeonManager类似于一次游戏的管理器.

//每次开始游戏都会重置局部变量.
    public class DungeonManager
    {
        #region 静态变量

        public static DungeonManager Inst;
        public static QueueMessageKit ActionManager = QueueMessageKit.Inst;
        public static MessageKit MessageManager = MessageKit.Inst;
        public static EffectKit EffectManager = EffectKit.Inst;

        #endregion

        #region 局部变量

        //本局游戏操作的角色
        public AbstractPlayer Player;

        //本局游戏爬塔楼层
        public int FloorNum { get; set; }

        //灾祸池
        public List<AbstractBlight> BlightPool;

        //本局游戏种子
        public string Seed;

        //进阶等级
        public int AdvanceLevel = 0;

        //是否是无尽模式
        public bool IsEndless { get; set; }

        private AbstractRoom mCurrentRoom;

        //当前房间
        public AbstractRoom CurrentRoom
        {
            get => mCurrentRoom;
            set
            {
                mCurrentRoom = value;
                mCurrentRoom.Enter();
            }
        }

        private AbstractDungeon mCurrentDungeon;

        //当前章节地牢
        public AbstractDungeon CurrentDungeon
        {
            get => mCurrentDungeon;
            set
            {
                if (mCurrentDungeon != null)
                    mCurrentDungeon.Dispose();
                mCurrentDungeon = value;
                mCurrentDungeon.Init();
            }
        }

        #endregion

        //开始一局新的游戏
        public static void NewGame(IPlayerInfo player, string seed)
        {
            var manager = new DungeonManager
            {
                Player = new AbstractPlayer(player),
                Seed = seed,
                FloorNum = 0
            };
            Inst = manager;
        }

        public void Update()
        {
            if (this.Player != null)
                this.Player.Update();
        }
    }
}