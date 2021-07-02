import {LocalizationProperty} from "../Gen/DB/Localization";
import AbstractPlayer from "./AbstractPlayer";
import BurningBlood from "../Relics/BurningBlood";
import {basePath} from "../FileHelper";

export default class Ironclad extends AbstractPlayer
{
    ////////////以下变量必须重载///////////
    public Name = "铁甲战士";
    public Description = "铁甲战士描述";
    public Shoulder = basePath + "Res/Characters/ironclad/shoulder.png";
    public Shoulder2 = basePath + "Res/Characters/ironclad/shoulder2.png";
    //选择角色时显示的大图
    public Portrait = basePath + "Res/Characters/ironclad/ironcladPortrait.jpg";
    //选择角色按钮图片
    public CharSelectButton = basePath + "Res/Characters/ironclad/ironcladButton.png";
    //有能量时显示图片
    public EnergyOrb = [
        basePath + "Res/Characters/ironclad/red/layer1.png",
        basePath + "Res/Characters/ironclad/red/layer2.png",
        basePath + "Res/Characters/ironclad/red/layer3.png",
        basePath + "Res/Characters/ironclad/red/layer4.png",
        basePath + "Res/Characters/ironclad/red/layer5.png",
    ];
    //无能量时显示图片
    public EmptyEnergyOrb = [
        basePath + "Res/Characters/ironclad/red/layer1d.png",
        basePath + "Res/Characters/ironclad/red/layer2d.png",
        basePath + "Res/Characters/ironclad/red/layer3d.png",
        basePath + "Res/Characters/ironclad/red/layer4d.png",
        basePath + "Res/Characters/ironclad/red/layer5d.png",
    ]
    public Health = 75;
    public Gold = 99;
    public InitRelic = [new BurningBlood()];
    ///////////////////////////////
}