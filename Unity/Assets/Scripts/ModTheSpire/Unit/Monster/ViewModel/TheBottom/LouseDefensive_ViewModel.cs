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
    public class LouseDefensive_ViewModel : AbstractMonster
    {
        private int mSlashCount;
        private bool mIsOpen;

        protected override void Initialize()
        {
            if(DungeonManager.Inst.AdvanceLevel >= 7)
            {
                DamageInfo.Add(new DamageInfo(this, DungeonManager.Inst.CurrentDungeon.HPRng.Next(6, 9)));
            }
            else
            {
                DamageInfo.Add(new DamageInfo(this, DungeonManager.Inst.CurrentDungeon.HPRng.Next(5, 8)));
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void PreBattleAction(OnPreBattleMessage msg)
        {
            base.PreBattleAction(msg);
            if(DungeonManager.Inst.AdvanceLevel >= 17)
            {
                this.AddToBot(new ApplyPowerAction(this, this, new CurlUpPower(), DungeonManager.Inst.CurrentDungeon.HPRng.Next(9, 13)));
            } else if(DungeonManager.Inst.AdvanceLevel >= 7){
                this.AddToBot(new ApplyPowerAction(this,this,new CurlUpPower(),DungeonManager.Inst.CurrentDungeon.HPRng.Next(4, 9)));
            } else {
                this.AddToBot(new ApplyPowerAction(this,this,new CurlUpPower(),DungeonManager.Inst.CurrentDungeon.HPRng.Next(3, 8)));
            }
        }

        protected override void GetMove(int num)
        {
            if(num< 25){
                if(this.LastMove(4)){
                    this.SetMove(3,Intent.ATTACK,this.DamageInfo[0]);
                } else
                {
                    this.SetMove(4, Intent.DEBUFF, moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                }
            } else if(this.LastTwoMoves(3))
            {
                this.SetMove(4, Intent.DEBUFF, moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
            } else {
                this.SetMove(3,Intent.ATTACK,this.DamageInfo[0]);
            }
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 3:{
                    if(!this.mIsOpen){
                        this.AddToBot(new DoFuncAction(this.Open,500));
                    }

                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                    break;
                }
                case 4:{
                    if(!this.mIsOpen){
                        this.AddToBot(new DoFuncAction(this.Rear,1200));
                        this.AddToBot(new SFXAction(SoundMaster.ATTACK_MAGIC_FAST_3, Random.Range(0.88f, 0.92f), true));
                        this.AddToBot(new VFXAction(new WebEffect(DungeonManager.Inst.Player, this.DisplayObject.X - 70, this.DisplayObject.Y + 10)));
                    }
                    else{
                        this.AddToBot(new DoFuncAction(this.RearIdle,900));
                        this.AddToBot(new SFXAction(SoundMaster.ATTACK_MAGIC_FAST_3,Random.Range(0.88F,0.92F),true));
                        this.AddToBot(new VFXAction(new WebEffect(DungeonManager.Inst.Player, this.DisplayObject.X - 70, this.DisplayObject.Y + 10)));
                    }
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),2));
                    break;
                }
            }
            this.AddToBot(new RollMoveAction(this));
        }

        public override void Damage(DamageInfo info)
        {
            base.Damage(info);
            if (this.GetPower(nameof(CurlUpPower)) != null && info.Total < this.Health && info.Total > 0 && info.Type == DamageType.NORMAL) {
                this.Close();
            }
        }

        private void Close(){
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            animation.AnimationState.SetAnimation(0,"transitiontoclosed",false);
            animation.AnimationState.AddAnimation(0, "idle_2", true, 0);
            this.mIsOpen = false;
        }
    
        private void Open(){
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            animation.AnimationState.SetAnimation(0,"transitiontoopened",false);
            animation.AnimationState.AddAnimation(0, "idle", true, 0);
            this.mIsOpen = true;
        }
    
        private void RearIdle(){
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            animation.AnimationState.SetAnimation(0,"rear",false);
            animation.AnimationState.AddAnimation(0, "idle", true, 0);
            this.mIsOpen = true;
        }
    
        private void Rear(){
            var animation = (SkeletonAnimation)this.DisplayObject.Self;
            animation.AnimationState.SetAnimation(0,"transitiontoopened",false);
            animation.AnimationState.AddAnimation(0,"rear",false,0);
            animation.AnimationState.AddAnimation(0, "idle", true, 0);
            this.mIsOpen = true;
        }

        public LouseDefensive_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}