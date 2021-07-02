import Ironclad from "./Ironclad";
import Defect from "./Defect";
import TheSilent from "./TheSilent";
import Watcher from "./Watcher";
import AbstractRelic from "../Relics/AbstractRelic";
import AbstractCard from "../Cards/AbstractCard";
import AbstractCreature from "../AbstractCreature";

export default class AbstractPlayer extends AbstractCreature
{
    //名称
    public Name : string;
    //角色描述
    public Description : string;
    //篝火图片
    public Shoulder : string;
    //篝火图片2
    public Shoulder2 : string;
    //选择角色时显示的大图
    public Portrait : string;
    //选择角色按钮图片
    public CharSelectButton : string;
    //有能量时显示图片
    public EnergyOrb : string[];
    //无能量时显示图片
    public EmptyEnergyOrb : string[];
    //卡牌边框
    public CardFrame : string;
    //初始遗物Id
    public InitRelic : AbstractRelic[];
    public InitCard : AbstractCard[];
    public Health : number;
    public Gold : number;
}

export let AllPlayer : Array<AbstractPlayer> = new Array<AbstractPlayer>();

