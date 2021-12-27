import AbstractCard from "../Cards/AbstractCard";
import { UI_BottomScene } from "../UI/ViewModel/UI_BottomScene";
import { UI_Combat } from "../UI/ViewModel/UI_Combat";
import UI_TopBar from "../UI/ViewModel/UI_TopBar";
import { AbstractRoom, RoomPhase } from "./AbstractRoom";

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
    public Round = 1;    
    Enter(){
        let x = UI_BottomScene.CreatePanel();
        let top = UI_TopBar.CreatePanel();
        let combat = UI_Combat.CreatePanel();
    }

    End() {
    }

}