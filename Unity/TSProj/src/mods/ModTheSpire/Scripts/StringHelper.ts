import AbstractCard from "./Cards/AbstractCard";

export class StringHelper{
    private static format = new RegExp("!([BDM])!","\g");
    public static FormatCardString(card : AbstractCard)
    {
        return card.Desc.replace(this.format,(substring, args) => {
            if(args == 'D'){
                return card.Damage.toString();
            }
            else if(args == 'B'){
                return card.Block.toString();
            }
            else if(args == 'M'){
                return card.Magic.toString();
            }
            return substring;
        })
    }
}