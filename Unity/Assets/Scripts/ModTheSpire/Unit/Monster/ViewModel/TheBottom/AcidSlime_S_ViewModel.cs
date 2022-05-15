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
    public class AcidSlime_S_ViewModel : AbstractMonster{
        protected override void Initialize()
        {
            this.DamageInfo.Add(new DamageInfo(this, DungeonManager.Inst.AdvanceLevel >= 2 ? 4 : 3));
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle",true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
            trackEntry.Event += SlimeHelper.SlimeAnimListener;
        }
        
        protected override void GetMove(int num)
        {
            if (DungeonManager.Inst.AdvanceLevel >= 17)
            {
                if (this.LastTwoMoves(1))
                {
                    if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.5)
                    {
                        this.SetMove(1, Intent.ATTACK, damage: this.DamageInfo[0]);
                    }
                    else
                    {
                        this.SetMove(2, Intent.DEBUFF);
                    }
                }
                else if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.5)
                {
                    this.SetMove(1, Intent.ATTACK, damage: this.DamageInfo[0]);
                }
                else
                {
                    this.SetMove(2, Intent.DEBUFF);
                }
            }
        }

        protected override void TakeTurn()
        {
            switch (this.MoveIndex)
            {
                case 1:
                {
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[0], AttackEffect.BLUNT_HEAVY));
                    break;
                }
                case 2:
                {
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player, this, new WeakPower(), 2));
                    break;
                }
            }
            this.AddToBot(new RollMoveAction(this));
        }

        public AcidSlime_S_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}