using ModTheSpire.Card.Status;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Other;
using ModTheSpire.Power.Debuff;
using ModTheSpire.Unit.Monster.Helper;
using ModTheSpire.Unit.Monster.Model.TheBottom;
using Spine;
using UnityEngine;

namespace ModTheSpire.Unit.Monster.ViewModel.TheBottom
{
    public class AcidSlime_L_ViewModel : AbstractMonster{
        protected override void Initialize()
        {
            if(DungeonManager.Inst.AdvanceLevel >= 2) {
                this.DamageInfo.Add(new DamageInfo(this,12));
                this.DamageInfo.Add(new DamageInfo(this,18));
            }else{
                this.DamageInfo.Add(new DamageInfo(this,11));
                this.DamageInfo.Add(new DamageInfo(this,16));
            }
        
            var trackEntry = (TrackEntry)this.DisplayObject.SetAnimation("idle",true);
            trackEntry.TrackTime = trackEntry.TrackEnd * Random.value;
            trackEntry.Event += SlimeHelper.SlimeAnimListener;
        }

        public override void Damage(DamageInfo info)
        {
            if(!this.IsDying && this.Health <= this.MaxHealth / 2 && this.MoveIndex != 3){
                this.SetMove(3,Intent.UNKNOWN, moveName:"分裂");
                this.AddToBot(new TextAboveCreatureAction(this, TextType.INTERRUPTED));
            }
        }

        protected override void GetMove(int num)
        {
            if (DungeonManager.Inst.AdvanceLevel >= 17)
            {
                if (num < 40)
                {
                    if (this.LastTwoMoves(1))
                    {
                        if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.6)
                        {
                            this.SetMove(2, Intent.ATTACK, damage: this.DamageInfo[1]);
                        }
                        else
                        {
                            this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
                        }
                    }
                    else
                    {
                        this.SetMove(1, Intent.ATTACK_DEBUFF, moveName: "腐蚀喷吐", damage: this.DamageInfo[1]);
                    }
                }
                else if (num < 70)
                {
                    if (this.LastTwoMoves(2))
                    {
                        if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.6)
                        {
                            this.SetMove(1, Intent.ATTACK_DEBUFF, damage: this.DamageInfo[0]);
                        }
                        else
                        {
                            this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
                        }
                    }
                    else
                    {
                        this.SetMove(2, Intent.ATTACK, damage: this.DamageInfo[1]);
                    }
                }
                else if (this.LastMove(4))
                {
                    if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.4)
                    {
                        this.SetMove(1, Intent.ATTACK_DEBUFF, moveName: "腐蚀喷吐", damage: this.DamageInfo[1]);
                    }
                    else
                    {
                        this.SetMove(2, Intent.ATTACK, 
                            damage:
                            this.DamageInfo[1]
                        );
                    }
                }
                else
                {
                    this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
                }
            }
            else if (num < 30)
            {
                if (this.LastTwoMoves(1))
                {
                    if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.5)
                    {
                        this.SetMove(2, Intent.ATTACK, damage: this.DamageInfo[1]);
                    }
                    else
                    {
                        this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
                    }
                }
                else
                {
                    this.SetMove(1, Intent.ATTACK_DEBUFF, moveName: "腐蚀喷吐", damage: this.DamageInfo[1]);
                }
            }
            else if (num < 70)
            {
                if (this.LastTwoMoves(2))
                {
                    if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.4)
                    {
                        this.SetMove(1, Intent.ATTACK_DEBUFF, damage: this.DamageInfo[0]);
                    }
                    else
                    {
                        this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
                    }
                }
                else
                {
                    this.SetMove(2, Intent.ATTACK, damage: this.DamageInfo[1]);
                }
            }
            else if (this.LastMove(4))
            {
                if (DungeonManager.Inst.CurrentDungeon.AIRng.Next() < 0.4)
                {
                    this.SetMove(1, Intent.ATTACK_DEBUFF, moveName: "腐蚀喷吐", damage: this.DamageInfo[1]);
                }
                else
                {
                    this.SetMove(2, Intent.ATTACK, damage: this.DamageInfo[1]);
                }
            }
            else
            {
                this.SetMove(4, Intent.DEBUFF, moveName: "舔舔");
            }
        }

        protected override void TakeTurn()
        {
            switch (this.MoveIndex)
            {
                case 1:
                {
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player, this, new WeakPower(), 2));
                    this.AddToBot(new RollMoveAction(this));
                    break;
                }
                case 2:
                {
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new SFXAction(SoundMaster.MONSTER_SLIME_ATTACK));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[0], AttackEffect.BLUNT_HEAVY));
                    this.AddToBot(new ApplyPowerAction(DungeonManager.Inst.Player, this, new WeakPower(), 2));
                    this.AddToBot(new MakeTempCardInDiscardAction(new Slimed(), 2));
                    this.AddToBot(new RollMoveAction(this));
                    break;
                }
                case 3:
                {
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new DamageAction(DungeonManager.Inst.Player, this.DamageInfo[0], AttackEffect.BLUNT_HEAVY));
                    this.AddToBot(new RollMoveAction(this));
                    break;
                }
                case 4:
                {
                    this.AddToBot(new AnimateSlowAttackAction(this));
                    this.AddToBot(new HideHealthBarAction(this));
                    this.AddToBot(new SuicideAction(this, false));
                    this.AddToBot(new WaitAction(1000));
                    this.AddToBot(new SFXAction(SoundMaster.SLIME_SPLIT));
                    this.AddToBot(new SpawnMonsterAction(
                        new AcidSlime_M_ViewModel(
                            new AcidSlime_M_Model(new Vector2(this.DisplayObject.X - 134, this.DisplayObject.Y + Random.Range(-4, 4)))), false));
                    this.AddToBot(new SpawnMonsterAction(
                        new AcidSlime_M_ViewModel(
                            new AcidSlime_M_Model(new Vector2(this.DisplayObject.X + 134, this.DisplayObject.Y + Random.Range(-4, 4)))), false));
                    this.SetMove(3, Intent.UNKNOWN, moveName: "分裂");
                    break;
                }
            }
        }

        public AcidSlime_L_ViewModel(MonsterInfo info) : base(info)
        {
        }
    }
}