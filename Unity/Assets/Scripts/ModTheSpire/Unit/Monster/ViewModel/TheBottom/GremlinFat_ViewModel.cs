using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Effect.Other;
using ModTheSpire.Power.Debuff;
using Spine;
using Spine.Unity;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class GremlinFat_ViewModel : AbstractMonster
    {
        protected override void Initialize()
        {
            DamageInfo.Add(new DamageInfo(this, DungeonManager.Inst.AdvanceLevel >= 2 ? 5 : 4));
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("animation", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void GetMove(int num)
        {
            this.SetMove(2, Intent.ATTACK_DEBUFF, moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 2:{
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_LIGHT));
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new WeakPower(),1));
                    if(DungeonManager.Inst.AdvanceLevel >= 17){
                        this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new FrailPower(),1));
                    }
                    this.AddToBot(new RollMoveAction(this));
                    break;
                }
                case 99:
                {
                    this.PlaySfx();
                    DungeonManager.EffectManager.Play(new SpeechBubble(this.DisplayObject.X - 100, this.DisplayObject.Y + 50,
                        LocalizationProperty.Read(this.Info.Name + "对话1"), 2500, true));
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
                0 => SoundMaster.VO_GREMLINFAT_1A,
                1 => SoundMaster.VO_GREMLINFAT_1B,
                _ => SoundMaster.VO_GREMLINFAT_1C,
            }));
        }
        
        private void PlayDeathSfx()
        {
            int roll = Random.Range(0, 3);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_GREMLINFAT_2A,
                1 => SoundMaster.VO_GREMLINFAT_2B,
                _ => SoundMaster.VO_GREMLINFAT_2C,
            }));
        }

        protected override void Die()
        {
            base.Die();
            PlayDeathSfx();
        }

        public GremlinFat_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}