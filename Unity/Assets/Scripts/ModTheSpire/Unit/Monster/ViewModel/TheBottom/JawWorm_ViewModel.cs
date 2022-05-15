using Core.Utils.Unity;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using ModTheSpire.Power.Buff;
using ModTheSpire.Power.Debuff;
using Spine;
using Spine.Unity;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class JawWorm_ViewModel : AbstractMonster
    {
        private int mCurrentCharge;

        protected override void Initialize()
        {
            if(DungeonManager.Inst.AdvanceLevel >= 17) {
                this.mStrAmount = 5;
                this.mBlockAmount = 9;
                this.mBlockAmount2 = 5;
            } else if(DungeonManager.Inst.AdvanceLevel >= 2) {
                this.mStrAmount = 4;
                this.mBlockAmount = 6;
                this.mBlockAmount2 = 5;
                this.DamageInfo.Add(new DamageInfo(this,12));
                this.DamageInfo.Add(new DamageInfo(this,7));
                this.DamageInfo.Add(new DamageInfo(this,5));
            }else{
                this.mStrAmount = 3;
                this.mBlockAmount = 6;
                this.mBlockAmount2 = 5;
                this.DamageInfo.Add(new DamageInfo(this,11));
                this.DamageInfo.Add(new DamageInfo(this,7));
                this.DamageInfo.Add(new DamageInfo(this,5));
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("animation", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        private int mBlockAmount2 { get; set; }

        private int mBlockAmount { get; set; }

        private int mStrAmount { get; set; }

        protected override void GetMove(int num)
        {
            if(DungeonManager.Inst.CurrentRoom.Round == 1)
            {
                this.SetMove(1, Intent.ATTACK, damage: this.DamageInfo[0]);
                return;
            }
            if(num < 25){
                if(this.LastMove(1)){
                    if(DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.5625)
                        this.SetMove(2,Intent.DEFEND_BUFF);
                    else
                        this.SetMove(3,Intent.ATTACK_DEFEND,damage:this.DamageInfo[1]);                 
                } else
                {
                    this.SetMove(1, Intent.ATTACK, damage: this.DamageInfo[0]);
                }
            } else if(num<55){
                if(this.LastTwoMoves(3))
                {
                    if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.357)
                        this.SetMove(1, Intent.ATTACK, damage: this.DamageInfo[0]);
                    else
                        this.SetMove(2, Intent.DEFEND_BUFF);
                } else
                {
                    this.SetMove(3, Intent.ATTACK_DEFEND, damage: this.DamageInfo[1]);
                }
            } else if(this.LastMove(2)){
                if(this.LastTwoMoves(3))
                {
                    if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.357)
                        this.SetMove(1, Intent.ATTACK, damage: this.DamageInfo[0]);
                    else
                        this.SetMove(3, Intent.ATTACK_DEFEND, damage: this.DamageInfo[1]);
                }
            }else {
                this.SetMove(2,Intent.DEFEND_BUFF);
            }
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 1:{
                    SetAnimationState("chomp");
                    this.AddToBot(new VFXAction(
                        new BiteEffect(DungeonManager.Inst.Player.DisplayObject.X, DungeonManager.Inst.Player.DisplayObject.Y), 300));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0]));
                    break;
                }
                case 2:{
                    SetAnimationState("tailslam");
                    this.AddToBot(new SFXAction(SoundMaster.MONSTER_JAW_WORM_BELLOW));
                    CameraUtils.Shake(ShakeVibrato.LOW, ShakeDur.SHORT, new Vector3(0.1f, 0.1f));
                    this.AddToBot(new WaitAction(500));
                    this.AddToBot(new ApplyPowerAction(this,this,new StrengthPower(),2));
                    this.AddToBot(new GainBlockAction(this,this.mBlockAmount));
                    break;
                }
                case 3:{
                    this.AddToBot(new DoFuncAction(()=>this.DisplayObject.PlayHop(),250));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                    this.AddToBot(new GainBlockAction(this,this.mBlockAmount2));
                    break;
                }
            }
            this.AddToBot(new RollMoveAction(this));
        }

        private void SetAnimationState(string animationName)
        {
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            animation.AnimationState.SetAnimation(0,animationName,false);
            animation.AnimationState.AddAnimation(0, "idle", true, 0);
        }

        protected override void Die()
        {
            base.Die();
            AddToBot(new SFXAction(SoundMaster.JAW_WORM_DEATH));

        }

        public JawWorm_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}