﻿using ModTheSpire.DataDefine;
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
    public class Lagavulin_ViewModel : AbstractMonster
    {
        private int mCurrentCharge;
        private int mDebuffAmount;
        private bool mAsleep;
        private bool mIsOut;
        private int mDebuffTurnCount;

        protected override void Initialize()
        {
            mDebuffAmount = DungeonManager.Inst.AdvanceLevel >= 18 ? -2 : -1;
            this.DamageInfo.Add(new DamageInfo(this,DungeonManager.Inst.AdvanceLevel >= 3 ? 20 : 18));
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            Spine.TrackEntry trackEntry = null;
            if(!this.mAsleep){
                this.mIsOut = true;
                trackEntry = (Spine.TrackEntry)this.DisplayObject.SetAnimation("Idle_2",true);
                this.DisplayObject.SetHitBox(new Rect(0, -25, 320, 370));
            } else {
                trackEntry = (Spine.TrackEntry)this.DisplayObject.SetAnimation("Idle_1",true);
            }
            var data = animation.SkeletonDataAsset.GetAnimationStateData();
            data.SetMix("Attack","Idle_2",0.25f);
            data.SetMix("Hit","Idle_2",0.25f);
            data.SetMix("Idle_1","Idle_2",0.5f);
            trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("animation", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void PreBattleAction(OnPreBattleMessage msg)
        {
            base.PreBattleAction(msg);
            if(this.mAsleep){
                this.AddToBot(new GainBlockAction(this,8));
                this.AddToBot(new ApplyPowerAction(this,this,new MetallicizePower(),8));
            }else
            {
                MusicMaster.Play(MusicMaster.ELITE_BGM);
                this.SetMove(1, Intent.STRONG_DEBUFF, moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
            }
        }

        protected override void GetMove(int num)
        {
            if(this.mIsOut){
                if(this.mDebuffTurnCount < 2){
                    if(this.LastTwoMoves(3)){
                        this.SetMove(1,Intent.STRONG_DEBUFF,moveName:LocalizationProperty.Read(this.Info.Name + "行动1"))
                    }else{
                        this.SetMove(3,Intent.ATTACK,damage:this.DamageInfo[0]);
                    }
                } else{
                    this.SetMove(1,Intent.STRONG_DEBUFF,moveName:LocalizationProperty.Read(this.Info.Name + "行动1"))
                }
            }else{
                this.SetMove(5,Intent.SLEEP);
            }
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
            case 1:{
                this.mDebuffTurnCount = 0;
                this.AddToBot(new DoFuncAction(() => SetAnimationState("Debuff"), 300));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new DexterityPower(),this.DebuffAmount));
                this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new StrengthPower(),this.DebuffAmount));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 3:{
                this.DebuffTurnCount++;
                this.AddToBot(new DoFuncAction(()=> {
                    this.SetAnimation("Attack");
                    this.AddAnimation("Idle_2");
                },0.3));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 5:{
                this.IdleCount++;
                if(this.IdleCount >= 3){
                    this.AddToBot(new DoFuncAction(this.Open));
                    this.AddToBot(new SetMoveAction(this,3,Intent.ATTACK,{damage:this.DamageInfo[0]}));
                }else{
                    this.AddToBot(new TalkAction(this.X - 170,this.Y-50,LocalizationProperty.Read(this.Info.Name + "对话" + this.IdleCount),true,0.5,2));
                    this.AddToBot(new SetMoveAction(this,5,Intent.SLEEP));
                }
                break;
            }
            case 4:{
                this.AddToBot(new TextAboveCreatureAction(this,TextType.STUNNED));
                this.AddToBot(new RollMoveAction(this));
                break;
            }
            case 6:{
                this.AddToBot(new DoFuncAction(this.Open));
                this.AddToBot(new SetMoveAction(this,3,Intent.ATTACK,{damage:this.DamageInfo[0]}));
                break;
            }
        }
        }
        
        private void SetAnimationState(string animationName)
        {
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            animation.AnimationState.SetAnimation(0,animationName,false);
            animation.AnimationState.AddAnimation(0, "idle_2", true, 0);
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
        
        private void PlaySfx()
        {
            int roll = Random.Range(0, 2);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_GREMLINDOPEY_1A,
                _ => SoundMaster.VO_GREMLINDOPEY_1B,
            }));
        }
        
        private void PlayDeathSfx()
        {
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_GREMLINDOPEY_2A,
                1 => SoundMaster.VO_GREMLINDOPEY_2B,
                _ => SoundMaster.VO_GREMLINDOPEY_2C,
            }));
        }

        protected override void Die()
        {
            base.Die();
            PlayDeathSfx();
        }

        public Lagavulin_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}