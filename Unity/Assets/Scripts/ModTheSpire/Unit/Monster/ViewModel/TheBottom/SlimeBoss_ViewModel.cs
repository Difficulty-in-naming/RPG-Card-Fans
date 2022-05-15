using Core.Utils;
using Core.Utils.Unity;
using ModTheSpire.Card.Status;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Combat;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event.Ids;
using ModTheSpire.Power.Buff;
using ModTheSpire.Power.Debuff;
using ModTheSpire.Unit.Monster.Helper;
using ModTheSpire.Unit.Monster.Model.TheBottom;
using Spine;
using Spine.Unity;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class SlimeBoss_ViewModel : AbstractMonster
    {
        protected override void Initialize()
        {
            if(DungeonManager.Inst.AdvanceLevel >= 4) {
                this.DamageInfo.Add(new DamageInfo(this,10));
                this.DamageInfo.Add(new DamageInfo(this,38));

            }else{
                this.DamageInfo.Add(new DamageInfo(this,9));
                this.DamageInfo.Add(new DamageInfo(this,35));
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle", true);
        }
        
        protected override void GetMove(int num)
        {
            if(DungeonManager.Inst.CurrentRoom.Round == 1)
            {
                this.SetMove(4, Intent.STRONG_DEBUFF, moveName: LocalizationProperty.Read(this.Info.Name + "行动4"));
            }
        }

        protected override void TakeTurn()
        {
switch (this.MoveIndex) {
            case 4: {
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new SFXAction(SoundMaster.MONSTER_SLIME_ATTACK));
                if(DungeonManager.Inst.AdvanceLevel >= 19)
                    this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(),5));
                else
                    this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(),3));
                SetMove(2,Intent.UNKNOWN,moveName:LocalizationProperty.Read(this.Info.Name + "行动2"));
                break;
            }
            case 2:{
                this.PlaySfx();
                this.AddToBot(new ShoutAction(this, LocalizationProperty.Read(this.Info.Name + "对话1"), 1, 2));
                this.AddToBot(new DoFuncAction(()=>CameraUtils.Shake(ShakeVibrato.LOW, ShakeDur.LONG, new Vector3(0.1f,0)),300));
                this.SetMove(1, Intent.ATTACK, this.DamageInfo[0], moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
                break;
            }
            case 1: {
                this.AddToBot(new DoFuncAction(this.DisplayObject.PlayJump,250));
                var playerHitBox = DungeonManager.Inst.Player.DisplayObject.GetHitBox();
                this.AddToBot(new VFXAction(new WeightyImpactEffect(playerHitBox.center.x,playerHitBox.center.y,new Color(25,25,25,255)),800));
                this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[1], AttackEffect.POISON));
                this.SetMove(4,Intent.STRONG_DEBUFF,moveName:LocalizationProperty.Read(this.Info.Name + "行动4"));
                break;
            }
            case 3: {
                this.AddToBot(new AnimateSlowAttackAction(this));
                this.AddToBot(new HideHealthBarAction(this));
                this.AddToBot(new SuicideAction(this, false));
                this.AddToBot(new WaitAction(1000));
                this.AddToBot(new SFXAction(SoundMaster.SLIME_SPLIT));
                this.AddToBot(new SpawnMonsterAction(
                    new AcidSlime_L_ViewModel(new AcidSlime_L_Model(new Vector2(this.DisplayObject.X - 134,
                        this.DisplayObject.Y + Random.Range(-4, 5)))), false));
                this.AddToBot(new SpawnMonsterAction(
                    new SpikeSlime_L_ViewModel(new SpikeSlime_L_Model(new Vector2(this.DisplayObject.X + 134,
                        this.DisplayObject.Y + Random.Range(-4, 5)))), false));
                this.SetMove(3, Intent.UNKNOWN, moveName: "分裂");
                break;
            }
        }
        }
        private void PlaySfx()
        {
            int roll = Random.Range(0, 2);
            DungeonManager.ActionManager.AddToBottom(new SFXAction(roll switch
            {
                0 => SoundMaster.VO_SLIMEBOSS_1A,
                _ => SoundMaster.VO_SLIMEBOSS_1B,
            }));
        }

        protected override void Die()
        {
            base.Die();
            SoundMaster.PlayVoice(SoundMaster.VO_SLIMEBOSS_2A);
            if(this.Health <= 0){
                this.DisplayObject.PlayFastShake(5);
            }
        }

        public SlimeBoss_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}