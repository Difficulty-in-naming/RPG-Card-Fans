using ModTheSpire.Card.Status;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Other;
using ModTheSpire.Power.Debuff;
using ModTheSpire.Unit.Monster.Helper;
using ModTheSpire.Unit.Monster.Model.TheBottom;
using Spine;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class SpikeSlime_S_ViewModel : AbstractMonster{
        protected override void Initialize()
        {
            this.DamageInfo.Add(new DamageInfo(this, DungeonManager.Inst.AdvanceLevel >= 2 ? 6 : 5));
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle",true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
            trackEntry.Event += SlimeHelper.SlimeAnimListener;
        }
        
        protected override void GetMove(int num)
        {
            this.SetMove(1,Intent.ATTACK,DamageInfo[0]);
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 1:{
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY));
                    this.AddToBot(new RollMoveAction(this));
                    break;
                }
            }
        }

        public SpikeSlime_S_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}