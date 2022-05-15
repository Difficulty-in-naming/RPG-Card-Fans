using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using ModTheSpire.Power.Buff;
using Spine;
using Spine.Unity;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class FungiBeast_ViewModel : AbstractMonster
    {
        private int mStrAmt;
        protected override void Initialize()
        {
            mStrAmt = DungeonManager.Inst.AdvanceLevel >= 2 ? 5 : 3;
            DamageInfo.Add(new DamageInfo(this,6));
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
            trackEntry.TimeScale = Random.Range(0.7f,1);
        }

        protected override void PreBattleAction(OnPreBattleMessage msg)
        {
            base.PreBattleAction(msg);
            AddToBot(new ApplyPowerAction(this, this, new SporeCloudPower(), 2));
        }

        protected override void GetMove(int num)
        {
            if (num < 60) {
                if (this.LastTwoMoves(1)) {
                    this.SetMove(2, Intent.BUFF,moveName:LocalizationProperty.Read("生长"));
                } else {
                    this.SetMove(1, Intent.ATTACK, this.DamageInfo[0]);
                }
            } else if (this.LastMove(2))
            {
                this.SetMove(1, Intent.ATTACK, this.DamageInfo[0]);
            } else {
                this.SetMove(2, Intent.BUFF,moveName:LocalizationProperty.Read("生长"));
            }
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 1:{
                    this.AddToBot(new DoFuncAction(()=>this.ChangeState("ATTACK"),500));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                    break;
                }
                case 2:{
                    this.AddToBot(new ApplyPowerAction(this,this,new StrengthPower(),this.mStrAmt));
                    break;
                }
            }
            this.AddToBot(new RollMoveAction(this));
        }
        
        private void ChangeState(string key){
            switch(key){
                case "ATTACK":{
                    var animation = (SkeletonAnimation)this.DisplayObject.Self;
                    animation.AnimationState.SetAnimation(0,"ATTACK",false);
                    animation.AnimationState.AddAnimation(0,"Idle",true,0);
                    break;
                }
            }
        }

        public override void Damage(DamageInfo info)
        {
            base.Damage(info);
            if(info.Type == DamageType.THORNS && info.Total > 0){
                var animation = (SkeletonAnimation)this.DisplayObject.Self;
                animation.AnimationState.SetAnimation(0,"Hit",false);
                animation.AnimationState.AddAnimation(0,"Idle",true,0);
            }
        }

        public FungiBeast_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}