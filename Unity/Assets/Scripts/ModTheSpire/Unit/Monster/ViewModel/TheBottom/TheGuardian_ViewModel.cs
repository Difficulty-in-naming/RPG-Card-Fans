using ModTheSpire.Card.Status;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using ModTheSpire.Power.Buff;
using ModTheSpire.Power.Debuff;
using ModTheSpire.Power.Special;
using ModTheSpire.Unit.Monster.Helper;
using ModTheSpire.Unit.Monster.Model.TheBottom;
using Spine;
using Spine.Unity;
using TCG.Config;
using UnityEngine;
using AnimationState = Spine.AnimationState;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class TheGuardian_ViewModel : AbstractMonster{
        private int mDmgThreshold;
        private int mDmgThresholdIncrease = 10;
        private int mDefensiveAmount = 20;
        private AnimationState mAnimationState;
        protected override void Initialize()
        {
            if(DungeonManager.Inst.AdvanceLevel >= 19) {
                mDmgThreshold = 40;
            } else if(DungeonManager.Inst.AdvanceLevel >= 9) {
                mDmgThreshold = 35;
            } else {
                mDmgThreshold = 30;
            }
            if(DungeonManager.Inst.AdvanceLevel >= 4){
                this.DamageInfo.Add(new DamageInfo(this,36));
                this.DamageInfo.Add(new DamageInfo(this,10));
            } else {
                this.DamageInfo.Add(new DamageInfo(this,32));
                this.DamageInfo.Add(new DamageInfo(this,9));
            }
            this.DamageInfo.Add(new DamageInfo(this,4));
            this.DamageInfo.Add(new DamageInfo(this,8));
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle",true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            mAnimationState = animation.AnimationState;
            var data = animation.skeletonDataAsset.GetAnimationStateData();
            data.SetMix("idle","transition",0.1f);
            data.SetMix("defensive","idle",0.2f);
        }

        protected override void PreBattleAction(OnPreBattleMessage msg)
        {
            base.PreBattleAction(msg);
            this.AddToBot(new ApplyPowerAction(this,this,new ModeShiftPower(ShiftFunc),mDmgThreshold));

        }

        protected override void GetMove(int num)
        {
            this.SetMove(3,Intent.ATTACK,DamageInfo[1]);
        }

        protected override void TakeTurn()
        {
        switch(this.MoveIndex){
            case 1:{
                this.AddToBot(new TextAboveCreatureAction(this,LocalizationProperty.Read(this.Info.Name + "对话2")));
                if(DungeonManager.Inst.AdvanceLevel >= 19){
                    this.AddToBot(new ApplyPowerAction(this,this,new SharpHidePower(),4));
                } else {
                    this.AddToBot(new ApplyPowerAction(this,this,new SharpHidePower(),3));
                }
                this.SetMove(3,Intent.ATTACK,DamageInfo[1]);
                break;
            }
            case 2:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY));
                this.SetMove(7, Intent.STRONG_DEBUFF, moveName: LocalizationProperty.Read(this.Info.Name + "行动7"));
                break;
            }
            case 7:{
                this.AddToBot(new ApplyPowerAction(this,this,new WeakPower(),2));
                this.AddToBot(new ApplyPowerAction(this,this,new VulnerablePower(),2));
                this.SetMove(5, Intent.ATTACK, DamageInfo[2], multiplier: 4, moveName: LocalizationProperty.Read(this.Info.Name + "行动5"));
                break;
            }
            case 3:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.BLUNT_HEAVY));
                this.SetMove(4, Intent.ATTACK_BUFF, DamageInfo[3], multiplier: 2, moveName: LocalizationProperty.Read(this.Info.Name + "行动4"));
                break;
            }
            case 4:
            {
                this.AddToBot(new DoFuncAction(this.OffensiveMode));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[3],AttackEffect.SLASH_HEAVY));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[3],AttackEffect.SLASH_HEAVY));
                this.AddToBot(new RemoveSpecificPowerAction(this,this,nameof(SharpHidePower)));
                this.SetMove(5, Intent.ATTACK, new DamageInfo(this, 5), multiplier: 4, moveName: LocalizationProperty.Read(this.Info.Name + "行动5"));
                break;
            }
            case 5:{
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new SFXAction(SoundMaster.ATTACK_WHIRLWIND));
                var hb = DungeonManager.Inst.Player.DisplayObject.GetHitBox();
                for (var i = 0; i < 4; i++)
                {
                    this.AddToBot(new SFXAction(SoundMaster.ATTACK_HEAVY));
                    this.AddToBot(new VFXAction(new CleaveEffect(hb.center.x,hb.center.y)));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[2],AttackEffect.BLUNT_HEAVY));
                }
                break;
            }
            case 6:{
                var hb = DungeonManager.Inst.Player.DisplayObject.GetHitBox();
                this.AddToBot(new GainBlockAction(this,9));
                this.AddToBot(new SFXAction(SoundMaster.MONSTER_GUARDIAN_DESTROY));
                this.AddToBot(new TalkAction(hb.center.x,hb.center.y +200,LocalizationProperty.Read(this.Info.Name + "对话3"),false,1,2500));
                this.SetMove(3, Intent.ATTACK, damage: this.DamageInfo[1]);
                break;
            }
        }
        }
        
        void DefensiveMode(){
            SoundMaster.PlayVoice(SoundMaster.GUARDIAN_ROLL_UP);
            AddToBot(new GainBlockAction(this,mDefensiveAmount));
            mAnimationState.TimeScale = 2;
            DisplayObject.SetAnimation("transition");
            DisplayObject.AddAnimation("defensive",true);
            mDmgThreshold += this.mDmgThresholdIncrease;
            this.SetMove(1, Intent.BUFF, moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
            this.DisplayObject.SetHitBox(new Rect(0,95,440,250));
        }
    
        void OffensiveMode(){
            this.AddToBot(new ApplyPowerAction(this,this,new ModeShiftPower(this.ShiftFunc),this.mDmgThreshold));
            if(this.Block != 0)
                this.AddToBot(new LoseBlockAction(this,this.Block));
            mAnimationState.TimeScale = 1;
            this.DisplayObject.SetHitBox(new Rect(0,95,440,350));
        }
        
        void ShiftFunc(){
            var hb = this.DisplayObject.GetHitBox();
            this.AddToBot(new VFXAction(new IntenseZoomEffect(hb.center.x,hb.center.y,false),50));
            this.DefensiveMode();
        }

        public TheGuardian_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}