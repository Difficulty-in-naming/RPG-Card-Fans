namespace DB
{
    public interface ILocalization
    {
        string Chinese { get; set; }
        string Chinese_tw { get; set; }

        string English { get; set; }
        /*string Spanish { get; set; }
        string German { get; set; }
        string French { get; set; }
        string Indonesian { get; set; }
        string Portugese { get; set; }
        string Thai { get; set; }
        string Italian { get; set; }*/
    }

    public static class LocalizationReader
    {
        public static string ToLoc(this ILocalization localization, Language? language)
        {
            if (!language.HasValue)
            {
                language = Language.CurrentLanguage;
            }

            if (language.Equals(Language.Chinese))
            {
                return localization.Chinese;
            }
            else if (language.Equals(Language.Chinese_tw))
            {
                return localization.Chinese_tw;
            }
            else if (language.Equals(Language.English))
            {
                return localization.English;
            }

            /*else if (language.Equals(Language.Spanish))
                return localization.Spanish;
            else if (language.Equals(Language.German))
                return localization.German;
            else if (language.Equals(Language.French))
                return localization.French;
            else if (language.Equals(Language.Indonesian))
                return localization.Indonesian;
            else if (language.Equals(Language.Portugese))
                return localization.Portugese;
            else if (language.Equals(Language.Thai))
                return localization.Thai;
            else if (language.Equals(Language.Italian))
                return localization.Italian;*/
            return localization.English;
        }
    }
}