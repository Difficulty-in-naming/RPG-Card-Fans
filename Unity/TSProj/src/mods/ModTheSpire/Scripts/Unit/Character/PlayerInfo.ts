import AbstractCard from "../../Cards/AbstractCard";
import { ILoader } from "../../Loader/ILoader";
import AbstractRelic from "../../Relics/AbstractRelic";

export interface PlayerInfo
{
    //名称
    Name : string;
    //角色描述
    Description : string;
    //篝火图片
    Shoulder : string;
    //篝火图片2
    Shoulder2 : string;
    //选择角色时显示的大图
    Portrait : string;
    //选择角色按钮图片
    CharSelectButton : string;
    //有能量时显示图片
    EnergyOrb : string[];
    //无能量时显示图片
    EmptyEnergyOrb : string[];
    //卡牌边框
    CardFrame : string;
    //初始遗物Id
    InitRelic : AbstractRelic[];
    InitCard : AbstractCard[];
    Health : number;
    Gold : number;
    Loader : ILoader;
}

export let AllPlayer : Array<PlayerInfo> = new Array<PlayerInfo>();

