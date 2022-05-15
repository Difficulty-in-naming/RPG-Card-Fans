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
    public class GremlinNob_ViewModel : AbstractMonster
    {
        protected override void Initialize()
        {
            if (DungeonManager.Inst.AdvanceLevel >= 2)
            {
                DamageInfo.Add(new DamageInfo(this, 8));
                DamageInfo.Add(new DamageInfo(this, 16));
            }
            else
            {
                DamageInfo.Add(new DamageInfo(this, 6));
                DamageInfo.Add(new DamageInfo(this, 14));
            }
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("animation", true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
        }

        protected override void GetMove(int num)
        {
            if(DungeonManager.Inst.CurrentRoom.Round == 1)
            {
                this.SetMove(3, Intent.BUFF);
            }
            if(DungeonManager.Inst.AdvanceLevel >= 18){
                if (!this.LastTwoMoves(2)) {
                    this.SetMove(2, Intent.ATTACK_DEBUFF,damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                }
                else if(!this.LastTwoMoves(1)){
                    this.SetMove(2, Intent.ATTACK_DEBUFF,damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                } else {
                    this.SetMove(1, Intent.ATTACK,damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                }
            } else {
                if(num < 33 || this.LastTwoMoves(1)){
                    this.SetMove(2, Intent.ATTACK_DEBUFF,damage:this.DamageInfo[1],moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                } else {
                    this.SetMove(1, Intent.ATTACK,damage:this.DamageInfo[0],moveName:LocalizationProperty.Read(this.Info.Name + "行动1"));
                }
            }

            this.SetMove(2, Intent.ATTACK_DEBUFF, moveName: LocalizationProperty.Read(this.Info.Name + "行动1"));
        }

        protected override void TakeTurn()
        {
            switch(this.MoveIndex){
                case 3:{
                    this.PlaySfx();
                    this.AddToBot(new TalkAction(this.DisplayObject.X - 150,this.DisplayObject.Y - 50,LocalizationProperty.Read(this.Info.Name + "对话1"),true,1,3));
                    if(DungeonManager.Inst.AdvanceLevel >= 18){
                        this.AddToBot(new ApplyPowerAction(this,this,new AngerPower(),3));
                        break;
                    }
                    this.AddToBot(new ApplyPowerAction(this,this,new AngerPower(),2));
                    break;
                }
                case 2:{
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[1],AttackEffect.BLUNT_HEAVY));
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player,this,new VulnerablePower(),2));
                    break;
                }
                case 1:{
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player,this.DamageInfo[0],AttackEffect.BLUNT_HEAVY));
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
                0 => SoundMaster.VO_GREMLINNOB_1A,
                1 => SoundMaster.VO_GREMLINNOB_1B,
                _ => SoundMaster.VO_GREMLINNOB_1C,
            }));
        }

        public GremlinNob_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}