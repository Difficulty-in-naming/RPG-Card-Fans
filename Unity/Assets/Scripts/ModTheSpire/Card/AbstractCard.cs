using System;
using Core.Utils;
using ModTheSpire.Dungeon;
using ModTheSpire.Event;
using ModTheSpire.Unit;
using ModTheSpire.Unit.Character;
using ModTheSpire.Utils;
using Newtonsoft.Json;
using UnityEngine;

namespace ModTheSpire.Card
{
    public abstract class AbstractCard
    {
            ///唯一ID.用于标志哪些卡牌升级.或者针对某张卡牌做特殊操作
    public string UUID { get; set; }
    public string Name { get; protected set; }
    ///⚠警告!!不要在外部使用这个变量,这个变量是未被格式化的！,请使用GetDesc()
    public abstract string Desc { get; }
    ///图标
    public abstract string Icon { get; }
    ///卡牌标签(攻击,初始卡牌)
    public CardTags Tags { get; } 
    ///卡牌类型(攻击,技能,能力)
    public abstract CardType Type { get; } 
    ///卡牌稀有度
    public abstract CardRarity Rarity { get; }
    ///卡牌目标
    public abstract CardTarget Target { get; }
    ///卡牌颜色
    public abstract CardColor Color { get; }
    ///升级次数
    public int UpgradeTimes { get; set; }
    ///消耗能量
    public int Energy { get; set; }
    ///是否消耗
    public bool Exhaust { get; set; } = false;
    ///是否虚无
    public bool Ethereal { get; set; } = false;
    /// 卡牌渲染组件
    /// 注意卡牌渲染组件必须要制作一个SuperFlash的动效
    public Type RenderType;
    ///伤害
    public int Damage { get; set; } = 0;
    ///格挡
    public int Block { get; set; } = 0;
    ///特殊值
    public int Magic { get; set; } = 0;
    ///临时卡牌,主要用于双发后.打出的卡牌第二次自动消耗.并且不会进入消耗牌堆中
    public bool Temp { get; set; } = false;
    ///显示能量消耗球
    public bool DisplayOrb { get; set; } = true;
    ///是否可以使用
    public bool CantUse { get; set; } = false;
    ///正在被打出
    public bool IsUsed { get; set; } = false;
    ///可不可以升级
    public virtual bool CanUpgrade => true;
    ///是否已经升级
    public virtual bool IsUpgraded => this.UpgradeTimes > 0;
    private UIBase mView;
    public UIBase View => mView ??= UIKit.Inst.Create(RenderType);

    public AbstractCard()
    {
        this.UUID = UUIDGenerator.Get();
    }
    public virtual void Use(AbstractPlayer player, AbstractCreature monster){}

    public virtual void Upgrade(){}
    public AbstractCard Clone(bool newUuid = true)
    {
        var json = JsonConvert.SerializeObject(this);
        var card = (AbstractCard)JsonConvert.DeserializeObject(json, this.GetType());
        if (newUuid)
            card.UUID = UUIDGenerator.Get();
        return card;
    }
    public AbstractCard NewInstance()
    {
        return (AbstractCard)Activator.CreateInstance(GetType());
    }
    protected void AddToBot(IGameAction action){DungeonManager.ActionManager.AddToBottom(action);}
    protected void AddToTop(IGameAction action){DungeonManager.ActionManager.AddToTop(action);}
    public string GetDesc(){
        return this.FormatCardString();
    }

    public void SuperFlash(){
        this.View.GComponent.GetTransition("SuperFlash").Play();
    }
    public void UpgradeName(){
        this.Name += "+";
    }

    public void UpgradeDamage(int amount){
        this.Damage += amount;
    }

    public void UpgradeMagic(int amount){
        this.Magic += amount;
    }

    public void UpgradeBlock(int amount){
        this.Block += amount;
    }
    public void UpgradeEnergy(int amount){
        this.Energy += amount;
    }

    public void Shrink()
    {
        this.View.GComponent.TweenScale(new Vector2(0.12f, 0.12f), 0.6f);
    }
    }
}