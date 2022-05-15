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
    public class GremlinWarrior_ViewModel : AbstractMonster
    {
        protected override void Initialize()
        {
            DamageInfo.Add(new DamageInfo(this, DungeonManager.Inst.AdvanceLevel >= 2 ? 5 : 4));
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("animation", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void PreBattleAction(OnPreBattleMessage msg)
        {
            base.PreBattleAction(msg);
            this.AddToBot(new ApplyPowerAction(this, this, new AngerPower(), DungeonManager.Inst.AdvanceLevel >= 17 ? 2 : 1));
        }

        protected override void GetMove(int num)
        {
            this.SetMove(3, Intent.ATTACK, damage: this.DamageInfo[0]);
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 3:{
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.SLASH_DIAGONAL));
                    SetMove(1,Intent.ATTACK,damage:this.DamageInfo[0]);
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
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_GREMLINANGRY_1A,
                1 => SoundMaster.VO_GREMLINANGRY_1B,
                _ => SoundMaster.VO_GREMLINANGRY_1C,
            }));
        }
        
        private void PlayDeathSfx()
        {
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_GREMLINANGRY_2A,
                _ => SoundMaster.VO_GREMLINANGRY_2B,
            }));
        }

        protected override void Die()
        {
            base.Die();
            PlayDeathSfx();
        }

        public GremlinWarrior_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}