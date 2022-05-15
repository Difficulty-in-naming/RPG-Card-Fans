namespace ModTheSpire.Power
{
    public class PowerType
    {
        public static PowerType Buff = new PowerType(nameof(PowerType));
        public static PowerType Special = new PowerType(nameof(Special));
        public static PowerType Debuff = new PowerType(nameof(Debuff));
        public string Key { get; }

        public PowerType(string key)
        {
            Key = key;
        }
    }
}