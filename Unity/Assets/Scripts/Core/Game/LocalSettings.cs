namespace Core.Game
{
    public class LocalSettings
    {
        public static LocalSettings Inst = new LocalSettings();
        public bool DisableEffects = false;
        public Language Language;
    }
}