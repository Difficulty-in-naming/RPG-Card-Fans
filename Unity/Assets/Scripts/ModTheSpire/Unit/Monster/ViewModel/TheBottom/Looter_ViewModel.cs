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
    public class Looter_ViewModel : AbstractMonster
    {
        private int mSlashCount;

        protected override void Initialize()
        {
            if(DungeonManager.Inst.AdvanceLevel >= 7)
            {
                DamageInfo.Add(new DamageInfo(this, 11));
                DamageInfo.Add(new DamageInfo(this, 14));

            }
            else
            {
                DamageInfo.Add(new DamageInfo(this, 10));
                DamageInfo.Add(new DamageInfo(this, 12));
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void PreBattleAction(OnPreBattleMessage msg)
        {
            base.PreBattleAction(msg);
            this.AddToBot(new ApplyPowerAction(this, this, new ThieveryPower(), 0));
        }

        protected override void GetMove(int num)
        {
            this.SetMove(1,Intent.ATTACK,DamageInfo[0]);
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
            case 1:{
                if(this.mSlashCount == 0 && DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.6)
                {
                    this.AddToBot(new TalkAction(this.DisplayObject.X - 170, this.DisplayObject.Y - 50,
                        LocalizationProperty.Read(this.Info.Name + "对话1")));
                }
                this.PlaySfx();
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction(this,this,new ThieveryPower(),6));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.SLASH_DIAGONAL));
                ++this.mSlashCount;
                if(this.mSlashCount == 2){
                    if(DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.5){
                        this.SetMove(2,Intent.DEFEND);
                        break;
                    }
                    SetMove(4,Intent.ATTACK,this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                    break;
                }
                SetMove(4,Intent.ATTACK,this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动2"));
                break;
            }
            case 4:{
                this.PlaySfx();
                ++this.mSlashCount;
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new ApplyPowerAction(this,this,new ThieveryPower(),6));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.SLASH_DIAGONAL));
                this.SetMove(2,Intent.DEFEND);
                break;
            }
            case 2:{
                this.AddToBot(new TalkAction(this.DisplayObject.X - 170,this.DisplayObject.Y -50,LocalizationProperty.Read(this.Info.Name + "对话3"),true,750,2500));
                this.AddToBot(new GainBlockAction(this,6));
                SetMove(3,Intent.ESCAPE);
                break;
            }
            case 3:{
                this.AddToBot(new TalkAction(this.DisplayObject.X - 170,this.DisplayObject.Y -50,LocalizationProperty.Read(this.Info.Name + "对话4"),true,750,2500));
                this.AddToBot(new VFXAction(new SmokeBombEffect(this.DisplayObject.X, this.DisplayObject.Y)));
                this.AddToBot(new EscapeAction(this));
                SetMove(3,Intent.ESCAPE);
                break;
            }
        }
        }

        private void PlaySfx()
        {
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_LOOTER_1A,
                1 => SoundMaster.VO_LOOTER_1B,
                _ => SoundMaster.VO_LOOTER_1C,
            }));
        }
        
        private void PlayDeathSfx()
        {
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_LOOTER_2A,
                1 => SoundMaster.VO_LOOTER_2B,
                _ => SoundMaster.VO_LOOTER_2C,
            }));
        }
        protected override void Die()
        {
            this.PlayDeathSfx();
            var obj = (SkeletonAnimation)this.DisplayObject.Self;
            obj.state.TimeScale = 0.1f;
            this.DisplayObject.PlaySlowShake(5);
            if(Random.value < 0.3){
                DungeonManager.EffectManager.Play(new SpeechBubble(this.DisplayObject.X - 170,this.DisplayObject.Y - 50,LocalizationProperty.Read(this.Info.Name + "对话2")));
            }
            base.Die();
        }

        public Looter_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}