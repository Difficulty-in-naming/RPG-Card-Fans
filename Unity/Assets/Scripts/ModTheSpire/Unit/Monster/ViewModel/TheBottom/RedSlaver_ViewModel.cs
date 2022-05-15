using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Effect.Other;
using ModTheSpire.Power.Debuff;
using ModTheSpire.Unit.Monster.Helper;
using Spine;
using Spine.Unity;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class RedSlaver_ViewModel : AbstractMonster
    {
        private bool mUsedEntangle;

        protected override void Initialize()
        {
            if(DungeonManager.Inst.AdvanceLevel >= 2) {
                this.DamageInfo.Add(new DamageInfo(this,14));
                this.DamageInfo.Add(new DamageInfo(this,9));
            }else{
                this.DamageInfo.Add(new DamageInfo(this,13));
                this.DamageInfo.Add(new DamageInfo(this,8));
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void GetMove(int num)
        {
            if(DungeonManager.Inst.CurrentRoom.Round == 1)
            {
                this.SetMove(1, Intent.ATTACK, DamageInfo[0]);
            }
            if(num >= 75 && !this.mUsedEntangle){
                this.SetMove(2,Intent.STRONG_DEBUFF,moveName:LocalizationProperty.Read(this.Info.Name + "行动2"));
                return;
            }
            if(num >= 55 && this.mUsedEntangle && !this.LastTwoMoves(1))
            {
                this.SetMove(1, Intent.ATTACK, DamageInfo[0]);
                return;
            }
            if(DungeonManager.Inst.AdvanceLevel >= 17){
                if(this.LastMove(3)){
                    this.SetMove(3,Intent.ATTACK_DEBUFF,DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                    return;
                }else
                {
                    this.SetMove(1, Intent.ATTACK, DamageInfo[0]);
                    return;
                }
            }
            if(!this.LastMove(3)){
                this.SetMove(3,Intent.ATTACK_DEBUFF,DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                return;
            }

            this.SetMove(1, Intent.ATTACK, DamageInfo[0]);
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 2:{
                    this.PlaySfx();
                    this.AddToBot(new DoFuncAction(this.UseNet));
                    var myHitBox = this.DisplayObject.GetHitBox();
                    var playerHitBox = DungeonManager.Inst.Player.DisplayObject.GetHitBox();
                    this.AddToBot(new VFXAction(new EntangleEffect(myHitBox.x - 70, myHitBox.height - 10, playerHitBox.width, playerHitBox.height), 500));
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new EntanglePower()));
                    this.mUsedEntangle = true;
                    break;
                }
                case 1:{
                    this.PlaySfx();
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.SLASH_HORIZONTAL));
                    break;
                }
                case 3:{
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.SLASH_DIAGONAL));
                    if(DungeonManager.Inst.AdvanceLevel >= 17) {
                        this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new VulnerablePower(),2));
                    }
                    else{
                        this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new VulnerablePower(),1));
                    }
                    break;
                }
            }
            this.AddToBot(new RollMoveAction(this));
        }

        
        private void UseNet(){
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            var tmp = animation.state.GetCurrent(0).TrackTime;
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idleNoNet",true);
            trackEntry.TrackTime = tmp;
        }

        private void PlaySfx()
        {
            int roll = Random.Range(0, 2);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll == 0 ? SoundMaster.VO_SLAVERRED_1A : SoundMaster.VO_SLAVERRED_1B));
        }
        
        private void PlayDeathSfx()
        {
            int roll = Random.Range(0, 2);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll == 0 ? SoundMaster.VO_SLAVERRED_2A : SoundMaster.VO_SLAVERRED_2B));
        }

        protected override void Die()
        {
            base.Die();
            PlayDeathSfx();
        }

        public RedSlaver_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}