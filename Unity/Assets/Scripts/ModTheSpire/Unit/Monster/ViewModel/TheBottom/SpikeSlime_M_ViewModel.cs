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
    public class SpikeSlime_M_ViewModel : AbstractMonster{
        protected override void Initialize()
        {
            this.DamageInfo.Add(new DamageInfo(this,DungeonManager.Inst.AdvanceLevel >= 2 ? 10 : 8));
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle",true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
            trackEntry.Event += SlimeHelper.SlimeAnimListener;
        }
        
        protected override void GetMove(int num)
        {
            if (DungeonManager.Inst.AdvanceLevel >= 17) {
                if (num < 30) {
                    if (this.LastTwoMoves(1)) {
                        this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
                    } else {
                        this.SetMove(1, Intent.ATTACK_DEBUFF, DamageInfo[0]);
                    }
                } else if (this.LastMove(4)) {
                    this.SetMove(1, Intent.ATTACK_DEBUFF, DamageInfo[0]);
                } else {
                    this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
                }
            } else if (num < 30) {
                if (this.LastTwoMoves(1)) {
                    this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
                } else {
                    this.SetMove(1, Intent.ATTACK_DEBUFF,DamageInfo[0]);
                }
            }
            if (this.LastTwoMoves(4)) {
                this.SetMove(1, Intent.ATTACK_DEBUFF, DamageInfo[0]);

            } else {
                this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
            }
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 4: {
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player, this, new FrailPower(), 1));
                    break;
                }
                case 1: {
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[0], AttackEffect.BLUNT_HEAVY));
                    this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(),1));
                    break;
                }
            }
            this.AddToBot(new RollMoveAction(this));
        }

        public SpikeSlime_M_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}