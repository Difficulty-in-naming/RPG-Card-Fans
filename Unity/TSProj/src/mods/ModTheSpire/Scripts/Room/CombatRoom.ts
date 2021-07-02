import AbstractRoom from "./AbstractRoom";
import AbstractCard from "../Cards/AbstractCard";

export class CombatRoom extends AbstractRoom
{
    public HandPile : Array<AbstractCard>
    public DiscardPile : Array<AbstractCard>
    public ExhaustPile : Array<AbstractCard>
    public DrawPile : Array<AbstractCard>
    public SpecialPile : Array<AbstractCard>
    public CurrentEnergy = 0;
    public MaxEnergy = 0;
    public UsingCard : AbstractCard//点击中的卡牌.准备使用
}