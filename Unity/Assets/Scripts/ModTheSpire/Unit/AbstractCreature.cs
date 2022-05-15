using System.Collections.Generic;
using DG.Tweening;
using FairyGUI;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Event;
using ModTheSpire.Event.Ids;
using ModTheSpire.Power;
using ModTheSpire.UI.ViewModel;
using ModTheSpire.Unit.Loader;
using UnityEngine;

namespace ModTheSpire.Unit
{
    public abstract class AbstractCreature
    {
        public int Gold { get; set; }
        private int mMaxHealth;
        private int mHealth;
        private int mBlock;
        /// 最大生命值
        public int MaxHealth
        {
            get => mMaxHealth;
            set
            {
                mMaxHealth = value;
                this.DisplayObject.HealthComponent.Max = value;
            } 
        }

        /// 生命值
        public int Health { get => mHealth;
            set
            {
                mHealth = value;
                if(value <= 0)
                    
                this.DisplayObject.HealthComponent.Value = value;
            } 
        }

        /// 是否是自己操作的角色
        public bool IsPlayer { get; set; }

        /// 正在死亡
        public bool IsDying { get; set; }
        
        /// 假死(死亡但没完全死,比如Boss进入二阶段时这个状态会被设置为True)
        public bool HalfDead { get; set; }

        ///已经死亡
        public bool IsDead { get; set; }

        ///能力列表
        public List<AbstractPower> Powers = new();

        ///格挡
        public int Block { get=>mBlock;
            set
            {
                var msg = new PreModifyBlockMessage(value);
                DungeonManager.MessageManager.Send(new PreModifyBlockMessage(value));
                var msg2 = new PostModifyBlockMessage(msg.Amount);
                DungeonManager.MessageManager.Send(msg2);
                mBlock = msg2.Amount;
            } }

        ///是否正在离场
        public bool IsEscaping { get; set; }

        ///是否已经离场
        public bool IsEscaped { get; set; }

        ///是否离场或死亡
        public bool IsDeadOrEscaped => this.IsEscaped || this.IsDying || this.HalfDead;

        public IDisplay DisplayObject;

        //受到伤害
        public virtual void Damage(DamageInfo info) { }

        //回復生命
        public virtual void Heal(int amount, bool showEffect = true) {
            if (DungeonManager.Inst.IsEndless && this.IsPlayer && DungeonManager.Inst.Player.HasBlight("FullBelly") && (amount /= 2) < 1)
            {
                amount = 1;
            }

            if (this.IsDying)
            {
                return;
            }

            var message = new OnHealBeforeMessage(this, amount);
            DungeonManager.MessageManager.Send(message);

            this.Health += message.Amount;
            if (this.Health > this.MaxHealth)
            {
                this.Health = this.MaxHealth;
                DungeonManager.MessageManager.Send(message);
            }

            if (amount > 0)
            {
                if (showEffect && this.IsPlayer)
                {
                    UIKit.Inst.Find<UI_TopBar>().View.GetChild("Health").asCom.GetChild("n0").asCom.GetTransition("Heal").Play();
                    var x = this.DisplayObject.Bounds.x + this.DisplayObject.Bounds.width / 2;
                    var y = this.DisplayObject.Bounds.y + this.DisplayObject.Bounds.height;
                    //DungeonManager.EffectManager.Play(new HealEffect(x, y, message.Amount));
                }
            }

            DungeonManager.MessageManager.Send(message);
        }

        //获取Power的实例
        public AbstractPower GetPower(string id)
        {
            var result = this.Powers.Find((t1) => t1.Id == id);
            return result;
        }

        public void AddPower(AbstractPower power,AbstractCreature source){
            power.Owner = this;
            power.Source = source;
            this.Powers.Add(power);
        }

        public void RemovePower(string id)
        {
            for (var i = 0; i < this.Powers.Count; i++)
            {
                if (this.Powers[i].Id == id)
                {
                    this.Powers[i].OnRemove();
                    this.Powers.RemoveAt(i);
                    DungeonManager.MessageManager.Send(new PowerRemovedMessage(this.Powers[i], this));
                    break;
                }
            }
        }
        
        public void ChangeColor(Color to, float lerp = 3)
        {
            DOTween.To(() => DisplayObject.Color, t1 => DisplayObject.Color = t1, to, lerp);
        }
    
        public void FadeOut()
        {
            DOTween.To(() => DisplayObject.Alpha, t1 => DisplayObject.Alpha = t1, 0, 3);
        }

        protected void Escape()
        {
        }

        protected void AddToBot(IGameAction action)
        {
            DungeonManager.ActionManager.AddToBottom(action);
        }

        protected void AddToTop(IGameAction action )
        {
            DungeonManager.ActionManager.AddToTop(action);
        }
        
        public void die(bool triggerRelics) {
            if (!this.IsDying) {
                this.IsDying = true;
                if (this.Health <= 0 && triggerRelics)
                {
                    DungeonManager.MessageManager.Send(new OnDeathMessage(this));
                }

                /*if (DungeonManager.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead())
                {
                    UIKit.Inst.Find<>()                    
                }
                    AbstractDungeon.overlayMenu.endTurnButton.disable();
                    for (AbstractCard c : AbstractDungeon.player.limbo.group) {
                        AbstractDungeon.effectList.add(new ExhaustCardEffect(c));
                    }
                    AbstractDungeon.player.limbo.clear();
                }
                if (this.currentHealth < 0) {
                    this.currentHealth = 0;
                }
                this.deathTimer = !Settings.FAST_MODE ? (this.deathTimer += 1.8f) : (this.deathTimer += 1.0f);
                StatsScreen.incrementEnemySlain();*/
            }
        }

        public virtual void Update()
        {
        }
    }
}