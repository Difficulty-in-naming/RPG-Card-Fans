using System.Collections.Generic;
using ModTheSpire.Card;
using ModTheSpire.UI.ViewModel;

namespace ModTheSpire.Room
{
    public class CombatRoom : AbstractRoom
    {
        public override RoomPhase Phase { get; } = RoomPhase.Combat;
        //手牌
        public List<AbstractCard> HandPile = new();
        //抽牌堆
        public List<AbstractCard> DrawPile = new();
        //消耗牌堆
        public List<AbstractCard> ExhaustPile = new();
        //弃牌堆
        public List<AbstractCard> DiscardPile = new();
        //特殊牌堆
        public List<AbstractCard> SpecialPile = new();
        public int CurrentEnergy = 0;
        public int MaxEnergy = 0;
        public AbstractCard UsingCard;//点击中的卡牌.准备使用
        public int Round = 1;
        public override void Enter()
        {
            var scene = UIKit.Inst.Create<UI_BottomScene>();
            var top = UIKit.Inst.Create<UI_TopBar>();
            var combat = UIKit.Inst.Create<UI_Combat>();
        }

        public override void End()
        {
        }
    }
}