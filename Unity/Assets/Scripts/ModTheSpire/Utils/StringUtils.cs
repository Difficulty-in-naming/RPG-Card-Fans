using System.Text.RegularExpressions;
using ModTheSpire.Card;

namespace ModTheSpire.Utils
{
    public static class StringUtils
    {
        private static Regex formatCard = new Regex("!([BDM])!",RegexOptions.Compiled);
        private static Regex formatColor = new Regex("( #[rgbyp]).*?( )", RegexOptions.Compiled);
        public static string FormatCardString(this AbstractCard card)
        {
            var s = card.Desc;
            s = s.Replace("D", card.Damage.ToString());
            s = s.Replace("B", card.Block.ToString());
            s = s.Replace("M", card.Magic.ToString());
            return s;
        }
    }
}