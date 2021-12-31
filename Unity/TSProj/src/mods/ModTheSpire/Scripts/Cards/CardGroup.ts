import AbstractCard from "./AbstractCard";

export class CardGroup{
    public Group = new Array<AbstractCard>();
    public Queued = new Array<AbstractCard>();
    public InHand = new Array<AbstractCard>();
    public get length(): number {
        return this.Group.length;
    }
    public forEach(callbackfn: (value: AbstractCard, index: number, array: AbstractCard[]) => void, thisArg?: any): void{
        this.Group.forEach(callbackfn);
    }
    constructor(public Type : CardGroupType){
        
    }
}

export enum CardGroupType {
    DRAW_PILE = "draw_pile",
    MASTER_DECK = "master_deck",
    HAND = "hand",
    DISCARD_PILE = "discard_pile",
    EXHAUST_PILE = "exhaust_pile",
    CARD_POOL = "card_pool",
    UNSPECIFIED = "unspecified"
}