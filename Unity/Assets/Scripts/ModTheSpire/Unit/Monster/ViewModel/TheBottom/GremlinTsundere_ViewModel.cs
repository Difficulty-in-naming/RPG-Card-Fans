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
    public class GremlinTsundere_ViewModel : AbstractMonster
    {
        private bool mEscapeNext = false;
        private int mBlockAmt = 0;

        protected override void Initialize()
        {
            if(DungeonManager.Inst.AdvanceLevel >= 7)
            {
                DamageInfo.Add(new DamageInfo(this, 8));
                this.mBlockAmt = DungeonManager.Inst.AdvanceLevel >= 17 ? 11 : 8;
            }
            else
            {
                DamageInfo.Add(new DamageInfo(this, 6));
                this.mBlockAmt = 7;
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void GetMove(int num)
        {
            this.SetMove(1, Intent.DEFEND, moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 1:{
                    this.AddToBot(new GainBlockRandomMonsterAction(this.mBlockAmt));
                    var aliveCount = DungeonManager.Inst.CurrentRoom.Monsters.GetAliveMonstersCount();
                    if(aliveCount > 1){
                        SetMove(1,Intent.DEFEND);
                    }else{
                        SetMove(2,Intent.ATTACK,damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "对话1"));
                    }
                    break;
                }
                case 2:{
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                    SetMove(2,Intent.ATTACK,damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "对话1"));
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

        public GremlinTsundere_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}