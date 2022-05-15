using ModTheSpire.Dungeon;
using ModTheSpire.Effect.Other;
using ModTheSpire.Event;
using ModTheSpire.Event.Ids;
using ModTheSpire.Unit;

namespace ModTheSpire.Power
{
    public abstract class AbstractPower
    {
        public abstract string Id { get; }
        public abstract string Name { get; }

        /// 图标
        public abstract string Icon { get; }
        
        private int mAmount;

        /// 层数
        public int Amount
        {
            get => mAmount;
            set
            {
                var preAmount = mAmount;
                mAmount = value;
                OnModified(preAmount, value);
                DungeonManager.MessageManager.Send(new PowerModifiedAmountMessage(this, preAmount, value));
            }
        }

        //可否叠加
        public bool CanStack { get; set; }

        //可否驱散
        public bool CanRemove { get; set; }

        //结算优先级
        public int Priority { get; set; }

        //该Buff的拥有者
        public AbstractCreature Owner { get; set; }

        //该Buff的施法来源
        public AbstractCreature Source { get; set; }

        //能力类型(Buff,Debuff)
        public abstract PowerType Type { get; }
        
        ///获得描述
        public abstract string GetDescription(object[] args);

        //重载该方法需要调用super.OnInit();
        public virtual void OnInit()
        {
            DungeonManager.MessageManager.Add<OnHurtBeforeMessage>(OnHurtBefore);
            DungeonManager.MessageManager.Add<OnHurtMessage>(OnHurt);
            DungeonManager.MessageManager.Add<OnHurtAfterMessage>(OnHurtAfter);
            DungeonManager.MessageManager.Add<AtEndOfTurnMessage>(AtEndOfTurn);
            DungeonManager.MessageManager.Add<AtStartOfTurnMessage>(AtStartOfTurn);
            DungeonManager.MessageManager.Add<CalcDamageValueMessage>(CalcDamageValue);
            DungeonManager.MessageManager.Add<OnDamageBeforeMessage>(OnDamageBefore);
            DungeonManager.MessageManager.Add<OnDamageAfterMessage>(OnDamageAfter);
            DungeonManager.MessageManager.Add<CalcFinalDamageValueMessage>(CalcFinalDamageValue);
            DungeonManager.MessageManager.Add<CalcHurtValueMessage>(CalcHurtValue);
            DungeonManager.MessageManager.Add<CalcFinalHurtValueMessage>(CalcFinalHurtValue);
            DungeonManager.MessageManager.Add<OnDeathMessage>(OnDeath);
            DungeonManager.MessageManager.Add<AtEndOfTurnPreEndTurnCardsMessage>(AtEndOfTurnPreEndTurnCards);
            DungeonManager.MessageManager.Add<PreModifyBlockMessage>(PreModifyBlock);
        }

        //重载该方法需要调用super.OnRemove();
        public virtual void OnRemove()
        {
            DungeonManager.MessageManager.Remove<OnHurtBeforeMessage>(OnHurtBefore);
            DungeonManager.MessageManager.Remove<OnHurtMessage>(OnHurt);
            DungeonManager.MessageManager.Remove<OnHurtAfterMessage>(OnHurtAfter);
            DungeonManager.MessageManager.Remove<AtEndOfTurnMessage>(AtEndOfTurn);
            DungeonManager.MessageManager.Remove<AtStartOfTurnMessage>(AtStartOfTurn);
            DungeonManager.MessageManager.Remove<CalcDamageValueMessage>(CalcDamageValue);
            DungeonManager.MessageManager.Remove<OnDamageBeforeMessage>(OnDamageBefore);
            DungeonManager.MessageManager.Remove<OnDamageAfterMessage>(OnDamageAfter);
            DungeonManager.MessageManager.Remove<CalcFinalDamageValueMessage>(CalcFinalDamageValue);
            DungeonManager.MessageManager.Remove<CalcHurtValueMessage>(CalcHurtValue);
            DungeonManager.MessageManager.Remove<CalcFinalHurtValueMessage>(CalcFinalHurtValue);
            DungeonManager.MessageManager.Remove<OnDeathMessage>(OnDeath);
            DungeonManager.MessageManager.Remove<AtEndOfTurnPreEndTurnCardsMessage>(AtEndOfTurnPreEndTurnCards);
            DungeonManager.MessageManager.Remove<PreModifyBlockMessage>(PreModifyBlock);
        }

        public virtual void PlayApplyPowerSfx()
        {
        }

        protected void AddToBot(IGameAction action)
        {
            DungeonManager.ActionManager.AddToBottom(action);
        }

        protected void AddToTop(IGameAction action)
        {
            DungeonManager.ActionManager.AddToTop(action);
        }

        public void Flash(bool silent = true){
            //DungeonManager.EffectManager.Play(new GainPowerEffect(this, silent));
            //DungeonManager.EffectManager.Play(new FlashPowerEffect(this));
        }

        //该方法仅用于计算伤害.最终伤害由OnHurt结算.
        protected virtual void CalcHurtValue(CalcHurtValueMessage msg)
        {
        }

        //该方法仅用于计算伤害.最终伤害由OnHurt结算.
        protected virtual void CalcFinalHurtValue(CalcFinalHurtValueMessage msg)
        {
        }

        //当玩家受到伤害之前
        protected virtual void OnHurtBefore(OnHurtBeforeMessage msg)
        {
        }

        //当玩家受到伤害时
        protected virtual void OnHurt(OnHurtMessage msg)
        {
        }

        //当玩家受到伤害后
        protected virtual void OnHurtAfter(OnHurtAfterMessage msg)
        {
        }

        //该方法仅用于计算伤害.最终伤害由OnDamage结算.
        protected virtual void CalcDamageValue(CalcDamageValueMessage msg)
        {
        }

        //该方法仅用于计算伤害.最终伤害由OnDamage结算.
        protected virtual void CalcFinalDamageValue(CalcFinalDamageValueMessage msg)
        {
        }

        //造成伤害前
        protected virtual void OnDamageBefore(OnDamageBeforeMessage msg)
        {
        }

        //造成伤害后
        protected virtual void OnDamageAfter(OnDamageAfterMessage msg)
        {
        }

        //回合结束时
        protected virtual void AtEndOfTurn(AtEndOfTurnMessage msg)
        {
        }

        //回合开始时
        protected virtual void AtStartOfTurn(AtStartOfTurnMessage msg)
        {
        }

        //死亡时
        protected virtual void OnDeath(OnDeathMessage msg)
        {
        }

        //回合结束和弃牌结束之间,怪物也会触发该函数
        protected virtual void AtEndOfTurnPreEndTurnCards(AtEndOfTurnPreEndTurnCardsMessage msg)
        {
        }

        protected virtual void PreModifyBlock(PreModifyBlockMessage msg)
        {
        }

        //
        protected virtual void PreUseCard(OnUseCardAfterMessage msg)
        {
        }

        protected virtual void OnModified(int before,int after){
            if (after == 0)
            {
                this.AddToBot(new RemoveSpecificPowerAction(this.Owner, this.Owner, this));
            }
        }
    }
}