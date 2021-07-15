import AbstractCard from "../Cards/AbstractCard";
import {UI_BottomScene} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_BottomScene";
import UI_TopBar from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_TopBar";
import {UI_Combat} from "mods/ModTheSpire/Scripts/UI/ViewModel/UI_Combat";
import {AbstractRoom, RoomPhase} from "mods/ModTheSpire/Scripts/Room/AbstractRoom";
import {MonsterGroup} from "mods/ModTheSpire/Scripts/Unit/Monster/MonsterGroup";

export class CombatRoom extends AbstractRoom
{
    //房间类型
    Phase: RoomPhase = RoomPhase.Combat;
    //手牌
    public HandPile : Array<AbstractCard>
    //抽牌堆
    public DrawPile : Array<AbstractCard>
    //消耗牌堆
    public ExhaustPile : Array<AbstractCard>
    //弃牌堆
    public DiscardPile : Array<AbstractCard>
    //特殊牌堆
    public SpecialPile : Array<AbstractCard>
    public CurrentEnergy = 0;
    public MaxEnergy = 0;
    public UsingCard : AbstractCard//点击中的卡牌.准备使用
    
    Enter(){
        let x = UI_BottomScene.CreatePanel();
        let top = UI_TopBar.CreatePanel();
        let combat = UI_Combat.CreatePanel();
    }

}