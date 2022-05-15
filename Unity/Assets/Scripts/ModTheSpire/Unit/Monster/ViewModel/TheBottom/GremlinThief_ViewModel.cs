using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Effect.Other;
using ModTheSpire.Power.Buff;
using ModTheSpire.Power.Debuff;
using Spine;
using Spine.Unity;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class GremlinThief_ViewModel : AbstractMonster
    {
        private bool mEscapeNext = false;
        protected override void Initialize()
        {
            if (DungeonManager.Inst.AdvanceLevel >= 2)
            {
                DamageInfo.Add(new DamageInfo(this, 10));
            }
            else
            {
                DamageInfo.Add(new DamageInfo(this, 9));
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("animation", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void GetMove(int num)
        {
            this.SetMove(1, Intent.ATTACK, moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 2:{
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),1));
                    if (!mEscapeNext)
                        SetMove(1, Intent.ATTACK, moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
                    else
                        SetMove(99,Intent.ESCAPE);
                    break;
                }
                case 99:
                {
                    this.PlaySfx();
                    DungeonManager.EffectManager.Play(new SpeechBubble(this.DisplayObject.X - 100,this.DisplayObject.Y + 50,LocalizationProperty.Read(this.Info.Name + "对话1"),2500,true));
                    this.AddToBot(new EscapeAction(this));
                    SetMove(99,Intent.ESCAPE);
                    break;
                }
            }
        }
        
        
        private void PlaySfx()
        {
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_GREMLINSPAZZY_1A,
                _ => SoundMaster.VO_GREMLINSPAZZY_1B,
            }));
        }

        private void PlayDeathSfx()
        {
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_GREMLINSPAZZY_2A,
                1 => SoundMaster.VO_GREMLINSPAZZY_2B,
                _ => SoundMaster.VO_GREMLINSPAZZY_2C,
            }));
        }

        protected override void Die()
        {
            base.Die();
            PlayDeathSfx();
        }

        public GremlinThief_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}