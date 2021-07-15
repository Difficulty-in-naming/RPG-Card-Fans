import {LocalizationProperty} from "../../Gen/DB/Localization";
import BurningBlood from "../../Relics/BurningBlood";
import FileHelper, {basePath} from "../../FileHelper";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {SpineLoader} from "mods/ModTheSpire/Scripts/Loader/SpineLoader";
import {PlayerInfo} from "mods/ModTheSpire/Scripts/Unit/Character/PlayerInfo";
import AbstractCard from "mods/ModTheSpire/Scripts/Cards/AbstractCard";

export default class Ironclad implements PlayerInfo
{
    ////////////以下变量必须重载///////////
    public Name = LocalizationProperty.Read("铁甲战士");
    public Description = LocalizationProperty.Read("铁甲战士描述");
    public Shoulder = FileHelper.FormatPath("Characters/ironclad/shoulder.png");
    public Shoulder2 = FileHelper.FormatPath("Characters/ironclad/shoulder2.png");
    //选择角色时显示的大图
    public Portrait = FileHelper.FormatPath("Characters/ironclad/ironcladPortrait.jpg");
    //选择角色按钮图片
    public CharSelectButton = FileHelper.FormatPath("Characters/ironclad/ironcladButton.png");
    //有能量时显示图片
    public EnergyOrb = [
        FileHelper.FormatPath("Characters/ironclad/red/layer1.png"),
        FileHelper.FormatPath("Characters/ironclad/red/layer2.png"),
        FileHelper.FormatPath("Characters/ironclad/red/layer3.png"),
        FileHelper.FormatPath("Characters/ironclad/red/layer4.png"),
        FileHelper.FormatPath("Characters/ironclad/red/layer5.png"),
    ];
    //无能量时显示图片
    public EmptyEnergyOrb = [
        FileHelper.FormatPath("Characters/ironclad/red/layer1d.png"),
        FileHelper.FormatPath("Characters/ironclad/red/layer2d.png"),
        FileHelper.FormatPath("Characters/ironclad/red/layer3d.png"),
        FileHelper.FormatPath("Characters/ironclad/red/layer4d.png"),
        FileHelper.FormatPath("Characters/ironclad/red/layer5d.png"),
    ]
    public Health = 75;
    public Gold = 99;
    public InitRelic = [new BurningBlood()];
    public Loader = new SpineLoader(FileHelper.FormatPath2("Characters/ironclad/idle/skeleton.atlas"),
        FileHelper.FormatPath2("Characters/ironclad/idle/skeleton.json"),
        FileHelper.FormatPath2("Characters/ironclad/idle/ironclad.png"));
    CardFrame: string;
    InitCard: AbstractCard[];
    ///////////////////////////////
}