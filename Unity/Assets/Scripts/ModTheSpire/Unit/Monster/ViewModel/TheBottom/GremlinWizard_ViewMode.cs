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
    public class GremlinWizard_ViewMode : AbstractMonster
    {
        private int mCurrentCharge;

        protected override void Initialize()
        {
            DamageInfo.Add(new DamageInfo(this, DungeonManager.Inst.AdvanceLevel >= 2 ? 30 : 25));
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("animation", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void GetMove(int num)
        {
            this.SetMove(2, Intent.UNKNOWN, moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 2:{
                    this.mCurrentCharge++;
                    this.AddToBot(new TextAboveCreatureAction(this,LocalizationProperty.Read(this.Info.Name + "对话1")));
                    if(this.mCurrentCharge == 3)
                    {
                        this.PlaySfx();
                        this.AddToBot(new TalkAction(this.DisplayObject.X - 150,this.DisplayObject.Y - 100,LocalizationProperty.Read(this.Info.Name + "对话2"),true,1500,3));
                        SetMove(1,Intent.ATTACK,damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "行动2"));
                        return;
                    }
                    SetMove(2,Intent.UNKNOWN,moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                    break;
                }
                case 1:{
                    this.mCurrentCharge = 0;
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.FIRE));
                    if(DungeonManager.Inst.AdvanceLevel >= 17){
                        SetMove(1,Intent.ATTACK,damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "行动2"));
                    }
                    else{
                        SetMove(2,Intent.UNKNOWN,moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                    }
                    break;
                }
                case 99:{
                    DungeonManager.EffectManager.Play(new SpeechBubble(this.DisplayObject.X - 100,this.DisplayObject.Y + 50,LocalizationProperty.Read(this.Info.Name + "对话1"),2500,true));
                    this.AddToBot(new EscapeAction(this));
                    SetMove(99,Intent.ESCAPE);
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

        public GremlinWizard_ViewMode(MonsterInfo info) : base(info)
        {
        }
    }
}