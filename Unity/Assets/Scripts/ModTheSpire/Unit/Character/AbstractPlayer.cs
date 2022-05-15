using System.Collections.Generic;
using ModTheSpire.Blight;
using ModTheSpire.Card;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Event.Ids;
using ModTheSpire.Potion;
using ModTheSpire.Relics;
using ModTheSpire.Room;

namespace ModTheSpire.Unit.Character
{
    public class AbstractPlayer : AbstractCreature
    {
        //我的牌库
        public CardGroup MasterDeck = new CardGroup(CardGroupType.MASTER_DECK);
        //抽牌堆
        public CardGroup DrawPile = new(CardGroupType.DRAW_PILE);
        //手牌
        public CardGroup Hand = new(CardGroupType.HAND);
        //弃牌堆
        public CardGroup DiscardPile = new(CardGroupType.DISCARD_PILE);
        //药
        public List<AbstractPotion> Potion = new List<AbstractPotion>();
        //药槽
        public int PotionSlots = 3;
        //遗物
        public List<AbstractRelic> Relic = new();
        //荒疫
        public List<AbstractBlight> Blight = new();
        public IPlayerInfo PlayerInfo;
        public AbstractPlayer(IPlayerInfo playerInfo):base()
        {
            PlayerInfo = playerInfo;
            this.DisplayObject = playerInfo.Loader.Create();
            this.IsPlayer = true;
        }
    
        public AbstractRelic HasRelic(string id)
        {
            return this.Relic.Find(t1 => t1.Id == id);
        }

        public void GainEnergy(int energy)
        {
            var room = DungeonManager.Inst.CurrentRoom;
            if(room is CombatRoom combat){
                combat.CurrentEnergy += energy;
            }
        }
    
        public override void Update() {
        }

        public bool HasBlight(string key){
            return this.Blight.Find((value)=>value.Id == key) != null;
        }

        public override void Damage(DamageInfo info)
        {
            base.Damage(info);
            DungeonManager.MessageManager.Send(new OnHurtBeforeMessage(info,this));
            DungeonManager.MessageManager.Send(new OnHurtMessage(info,this));
            DungeonManager.MessageManager.Send(new OnHurtAfterMessage(info,this));
        }
    }
}