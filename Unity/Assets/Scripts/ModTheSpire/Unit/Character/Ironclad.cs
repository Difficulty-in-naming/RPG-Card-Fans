using System.Collections.Generic;
using ModTheSpire.Card;
using ModTheSpire.Relics;
using ModTheSpire.Unit.Loader;
using TCG.Config;

namespace ModTheSpire.Unit.Character
{
    public class Ironclad : IPlayerInfo
    {
        ////////////以下变量必须重载///////////
        public string Name { get; } = LocalizationProperty.Read("铁甲战士");
        public string Description { get; } = LocalizationProperty.Read("铁甲战士描述");
        public string Shoulder { get; } = "Characters/ironclad/shoulder.png";

        public string Shoulder2 { get; } = "Characters/ironclad/shoulder2.png";

        //选择角色时显示的大图
        public string Portrait { get; } = "Characters/ironclad/ironcladPortrait.jpg";

        //选择角色按钮图片
        public string CharSelectButton { get; } = "Characters/ironclad/ironcladButton.png";

        //有能量时显示图片
        public string[] EnergyOrb { get; } =
        {
            "Characters/ironclad/red/layer1.png",
            "Characters/ironclad/red/layer2.png",
            "Characters/ironclad/red/layer3.png",
            "Characters/ironclad/red/layer4.png",
            "Characters/ironclad/red/layer5.png",
        };

        //无能量时显示图片
        public string[] EmptyEnergyOrb { get; } =
        {
            "Characters/ironclad/red/layer1d.png",
            "Characters/ironclad/red/layer2d.png",
            "Characters/ironclad/red/layer3d.png",
            "Characters/ironclad/red/layer4d.png",
            "Characters/ironclad/red/layer5d.png",
        };

        public int Health { get; } = 75;
        public int Gold { get; } = 99;
        public AbstractRelic[] InitRelic { get; } = { new BurningBlood() };

        public ILoader Loader { get; } = new SpineLoader("Characters/Ironclad/Model/skeleton.atlas.txt", "Characters/Ironclad/Model/skeleton.json",
            "Characters/Ironclad/Model/ironclad.png");

        public string CardFrame { get; }

        public AbstractCard[] InitCard { get; }
        ///////////////////////////////
    }
}