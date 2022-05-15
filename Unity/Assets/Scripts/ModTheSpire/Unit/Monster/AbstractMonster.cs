using System.Collections.Generic;
using DG.Tweening;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.Event.Ids;
using UnityEngine;

namespace ModTheSpire.Unit.Monster
{
    public abstract class AbstractMonster : AbstractCreature
    {
        public MonsterInfo Info;
        public string MoveName;
        public int Gold;
        public int MoveIndex;
        public int DeathTime;

        public Intent Intent;

        //行动历史
        private List<int> MoveHistory = new();

        //伤害列表,不同难度填充的伤害内容不一样
        protected List<DamageInfo> DamageInfo = new();

        public AbstractMonster(MonsterInfo info) : base()
        {
            Info = info;
            this.DisplayObject = this.Info.Loader.Create();
            this.Initialize();
            this.RollMove();
        }

        //随机敌人的行为
        public virtual void RollMove()
        {
            this.GetMove(Mathf.FloorToInt(DungeonManager.Inst.CurrentDungeon.AIRng.Next(0, 101)));
        }

        //获取敌人的最后两次行为是否和传入的行为Index匹配
        public virtual bool LastTwoMoves(int num)
        {
            var length = this.MoveHistory.Count;
            if (length < 2)
                return false;
            return this.MoveHistory[length - 2] == num && this.MoveHistory[length - 1] == num;
        }

        //获取敌人的最后一次行为是否和传入的行为Index匹配
        public bool LastMove(int num)
        {
            var length = this.MoveHistory.Count;
            if (length < 1)
                return false;
            return this.MoveHistory[length - 1] == num;
        }

        //初始化.继承此类的类型不应该使用构造函数.而应该选择使用Initialize作为替代;
        protected abstract void Initialize();

        //敌人的行为逻辑代码
        protected abstract void TakeTurn();

        //获取敌人的下一次行动
        protected abstract void GetMove(int num);

        //设置敌人的下一次行动
        public void SetMove(int moveIndex, Intent intent, DamageInfo damage = null, int multiplier = 0, string moveName = null)
        {
            MoveName = moveName;
            if (moveIndex != -1)
                this.MoveHistory.Add(moveIndex);
            this.MoveIndex = moveIndex;
            this.Intent = intent;
        }

        //敌人死亡回调
        protected virtual void Die()
        {
        }

        public void Escape()
        {
            this.DisplayObject.HealthComponent.Visible = false;
            this.IsEscaping = true;
            this.DisplayObject.FlipX = true;
            DOTween.To(() => this.DisplayObject.X, t1 => this.DisplayObject.X = t1, this.DisplayObject.X + 400, 3).SetEase(Ease.Linear).OnComplete(
                () =>
                {
                    this.IsEscaped = true;
                    if (DungeonManager.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead())
                        DungeonManager.Inst.CurrentRoom.End();
                });
        }

        protected virtual void PreBattleAction(OnPreBattleMessage msg)
        {
        }
    }
}