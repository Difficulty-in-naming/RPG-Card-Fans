using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Effect.Other;
using ModTheSpire.Power.Buff;
using ModTheSpire.Power.Debuff;
using Spine;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class Cultist_ViewModel : AbstractMonster
    {
        private bool SaidPower = false;
        protected override void Initialize()
        {
            this.DamageInfo.Add(new DamageInfo(this,6));
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("waving", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void GetMove(int num)
        {
            if(DungeonManager.Inst.CurrentRoom.Round == 1)
            {
                this.SetMove(3, Intent.BUFF, moveName: LocalizationProperty.Read("念咒"));
            }
            this.SetMove(1, Intent.ATTACK, damage: this.DamageInfo[0]);
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 3:{
                    
                    var temp = Random.Range(1,10);
                        this.PlaySfx();
                        if(temp < 4)
                        {
                            this.AddToBot(new TalkAction(this.DisplayObject.X - 170, this.DisplayObject.Y + 50, LocalizationProperty.Read("异教徒-对话1"),
                                true, 1));
                        } else if(temp < 7)
                        {
                            this.AddToBot(new TalkAction(this.DisplayObject.X - 170, this.DisplayObject.Y + 50, LocalizationProperty.Read("异教徒-对话2"),
                                true, 1));
                        }
                    if(DungeonManager.Inst.AdvanceLevel >= 17){
                        this.AddToBot(new ApplyPowerAction(this,this,new RitualPower(),2));
                    } else {
                        this.AddToBot(new ApplyPowerAction(this,this,new RitualPower(),1));
                    }
                    break;
                }
                case 1:{
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.SLASH_HORIZONTAL));
                    break;
                }
            }
            this.AddToBot(new RollMoveAction(this));
        }

        private void PlaySfx()
        {
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_CULTIST_1A,
                1 => SoundMaster.VO_CULTIST_1B,
                _ => SoundMaster.VO_CULTIST_1C,
            }));
        }
        
        private void PlayDeathSfx()
        {
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_CULTIST_2A,
                1 => SoundMaster.VO_CULTIST_2B,
                _ => SoundMaster.VO_CULTIST_2C,
            }));
        }

        protected override void Die()
        {
            base.Die();
            PlayDeathSfx();
            DisplayObject.PlaySlowShake(5);
            if (SaidPower)
            {
                DungeonManager.EffectManager.Play(new SpeechBubble(this.DisplayObject.X - 170, this.DisplayObject.Y + 50,
                    LocalizationProperty.Read("异教徒-对话3"), 2500));
                DeathTime += 1500;
            }
        }

        public Cultist_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}