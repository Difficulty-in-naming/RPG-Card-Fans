using System.Drawing;
using TCG.Config;

namespace ModTheSpire.Relics
{
    public class BurningBlood : AbstractRelic
    {
        public override string Name { get; }= LocalizationProperty.Read("燃烧之血");
        public override string Desc { get; }= LocalizationProperty.Read("燃烧之血描述");
        public override string Icon { get; }= "Relics/burningBlood.png";
        public override string Flavor { get; }
        public override string Id { get; } = nameof(BurningBlood);

        public override void OnObtain()
        {
            
        }

        public override void OnLose()
        {
            
        }
    }
}