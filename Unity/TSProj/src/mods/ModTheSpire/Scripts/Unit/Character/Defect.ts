import {LocalizationProperty} from "../../Gen/DB/Localization";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";
import BurningBlood from "mods/ModTheSpire/Scripts/Relics/BurningBlood";
import AbstractCard from "mods/ModTheSpire/Scripts/Cards/AbstractCard";
import {ILoader} from "mods/ModTheSpire/Scripts/Loader/ILoader";
import {PlayerInfo} from "mods/ModTheSpire/Scripts/Unit/Character/PlayerInfo";

export default class Defect implements PlayerInfo
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
    CardFrame: string;
    InitCard: AbstractCard[];
    Loader: ILoader;
    ///////////////////////////////
}