"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
class StringHelper {
    static formatCard = new RegExp("!([BDM])!", "\g");
    static formatColor = new RegExp("( #[rgbyp]).*?( )", "\g");
    static FormatCardString(card) {
        return card.Desc.replace(this.formatCard, (substring, args) => {
            if (args == 'D') {
                return card.Damage.toString();
            }
            else if (args == 'B') {
                return card.Block.toString();
            }
            else if (args == 'M') {
                return card.Magic.toString();
            }
            return substring;
        });
    }
    static FormatColorString(str) {
        return str;
        // return str.replace(this.formatCard,(substring, args) => {
        //     if(substring.startsWith(' #r')){
        //         return substring.replace(' #r',`[color=${Color.RedText.ToHex()}]`) + "[/color]".replace(' ','');
        //     }
        //     if(substring.startsWith(' #g')){
        //         return substring.replace(' #g',`[color=${Color.GreenText.ToHex()}]`) + "[/color]".replace(' ','');
        //     }
        //     if(substring.startsWith(' #b')){
        //         return substring.replace(' #b',`[color=${Color.BlueText.ToHex()}]`) + "[/color]".replace(' ','');
        //     }
        //     if(substring.startsWith(' #y')){
        //         return substring.replace(' #y',`[color=${Color.Gold.ToHex()}]`) + "[/color]".replace(' ','');
        //     }
        //     if(substring.startsWith(' #p')){
        //         return substring.replace(' #p',`[color=${Color.PurpleText.ToHex()}]`) + "[/color]".replace(' ','');
        //     }
        //     return substring;
        // })
    }
}
exports.StringHelper = StringHelper;
//# sourceMappingURL=StringHelper.js.map