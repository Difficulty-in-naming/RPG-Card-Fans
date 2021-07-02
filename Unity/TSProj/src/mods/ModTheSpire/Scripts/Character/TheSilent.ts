import {LocalizationProperty} from "../Gen/DB/Localization";
import AbstractPlayer from "./AbstractPlayer";

export default class TheSilent extends AbstractPlayer
{
    public Name : string = LocalizationProperty.Read("铁甲战士");
    public Description : string = LocalizationProperty.Read("铁甲战士描述");
}