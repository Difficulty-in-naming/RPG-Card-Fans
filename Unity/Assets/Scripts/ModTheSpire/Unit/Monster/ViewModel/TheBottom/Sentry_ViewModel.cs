using Core.Utils;
using ModTheSpire.Card.Status;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using ModTheSpire.Power.Buff;
using ModTheSpire.Power.Debuff;
using ModTheSpire.Unit.Monster.Helper;
using Spine;
using Spine.Unity;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class Sentry_ViewModel : AbstractMonster
    {
        private int mDazedAmt = 0;

        protected override void Initialize()
        {
            if (DungeonManager.Inst.AdvanceLevel >= 18)
            {
                mDazedAmt = 3;
            }

            if(DungeonManager.Inst.AdvanceLevel >= 3) {
                this.DamageInfo.Add(new DamageInfo(this,10));
            }else{
                mDazedAmt = 2;
                this.DamageInfo.Add(new DamageInfo(this,9));
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
            trackEntry.TimeScale = 2;
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            var data = animation.SkeletonDataAsset.GetAnimationStateData();
            data.SetMix("idle","attack",0.1f);
            data.SetMix("idle","spaz1",0.1f);
            data.SetMix("idle","hit",0.1f);
        }

        protected override void PreBattleAction(OnPreBattleMessage msg)
        {
            base.PreBattleAction(msg);
            this.AddToBot(new ApplyPowerAction(this,this,new ArtifactPower(),1));

        }

        protected override void GetMove(int num)
        {
            var room = DungeonManager.Inst.CurrentRoom;
            if(room.Round == 1){
                if(room.Monsters.IndexOf(this) % 2 == 0){
                    this.SetMove(3,Intent.DEBUFF);
                }
                else{
                    this.SetMove(4,Intent.ATTACK,this.DamageInfo[0]);
                }
            }
            if(this.LastMove(4)){
                this.SetMove(3,Intent.DEBUFF);
            }else{
                this.SetMove(4,Intent.ATTACK,this.DamageInfo[0]);
            }
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 3:{
                    this.AddToBot(new SFXAction(SoundMaster.THUNDERCLAP));
                    var myHitBox = this.DisplayObject.GetHitBox();
                    this.AddToBot(new VFXAction(
                        new ShockWaveEffect(myHitBox.center.x, myHitBox.center.y, MTSColor.Royal.Clone(), ShockWaveType.ADDITIVE), 500));
                    this.AddToBot(new DoFuncAction(()=>this.DisplayObject.PlayFastShake(0.6f),200));
                    this.AddToBot(new MakeTempCardInDiscardAction(new Dazed(),this.mDazedAmt));
                    break;
                }
                case 4:{
                    this.AddToBot(new DoFuncAction(this.Attack));
                    this.AddToBot(new SFXAction(SoundMaster.ATTACK_MAGIC_BEAM_SHORT,500));
                    this.AddToBot(new VFXAction(new BorderFlashEffect(MTSColor.Sky.Clone())));
                    var playerHitBox = DungeonManager.Inst.Player.DisplayObject.GetHitBox();
                    var myHitBox = this.DisplayObject.GetHitBox();
                    this.AddToBot(new VFXAction(
                        new SmallLaserEffect(playerHitBox.center.x, playerHitBox.center.y, myHitBox.center.x, myHitBox.center.y), 300));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0]));
                    break;
                }
            }
            this.AddToBot(new RollMoveAction(this));
        }

        
        private void Attack(){
            this.DisplayObject.SetAnimation("attack");
            this.DisplayObject.SetAnimation("idle",true);
        }

        public override void Damage(DamageInfo info)
        {
            base.Damage(info);
            if(info.Total > 0 && info.Type != DamageType.THORNS){
                this.DisplayObject.SetAnimation("hit");
                this.DisplayObject.AddAnimation("idle",true);
            }
        }

        public Sentry_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}