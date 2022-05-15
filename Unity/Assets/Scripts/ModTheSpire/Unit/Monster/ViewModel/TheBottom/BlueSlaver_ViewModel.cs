using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Other;
using ModTheSpire.Power.Debuff;
using ModTheSpire.Unit.Monster.Helper;
using Spine;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class BlueSlaver_ViewModel : AbstractMonster
    {
        protected override void Initialize()
        {
            if(DungeonManager.Inst.AdvanceLevel >= 2) {
                this.DamageInfo.Add(new DamageInfo(this,13));
                this.DamageInfo.Add(new DamageInfo(this,8));
            }else{
                this.DamageInfo.Add(new DamageInfo(this,12));
                this.DamageInfo.Add(new DamageInfo(this,7));
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void GetMove(int num)
        {
            if (num >= 40 && !LastTwoMoves(1))
            {
                SetMove(1, Intent.ATTACK, damage: DamageInfo[0]);
                return;
            }
            if (!this.LastMove(4))
                SetMove(4, Intent.ATTACK_DEBUFF, damage: this.DamageInfo[1], moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
            else
                SetMove(1, Intent.ATTACK, damage: DamageInfo[0]);
        }

        protected override void TakeTurn()
        {
            switch (this.MoveIndex)
            {
                case 1:
                {
                    PlaySfx();
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[0], AttackEffect.SLASH_HORIZONTAL));
                    break;
                }
                case 4:
                {
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[1], AttackEffect.SLASH_DIAGONAL));
                    if(DungeonManager.Inst.AdvanceLevel >= 17) 
                        this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player, this, new WeakPower(), 2));
                    else
                        this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player, this, new WeakPower(), 2));
                    break;
                }
            }
            this.AddToBot(new RollMoveAction(this));
        }

        private void PlaySfx()
        {
            int roll = Random.Range(0, 2);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll == 0 ? SoundMaster.VO_SLAVERBLUE_1A : SoundMaster.VO_SLAVERBLUE_1B));
        }
        
        private void PlayDeathSfx()
        {
            int roll = Random.Range(0, 2);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll == 0 ? SoundMaster.VO_SLAVERBLUE_2A : SoundMaster.VO_SLAVERBLUE_2B));
        }

        protected override void Die()
        {
            base.Die();
            PlayDeathSfx();
        }

        public BlueSlaver_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}