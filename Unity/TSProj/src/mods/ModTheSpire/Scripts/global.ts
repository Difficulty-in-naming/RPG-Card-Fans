import { FairyGUI } from "csharp";
import { UIKit } from "../../../Core/Module/UI/UIKit";
import { CardViewPool } from "./Cards/CardViewPool";
import { View_Card } from "./Gen/View/ModTheSpire_Common";
import SaveKit from "./SaveKit";

export class S{
    public static UIKit = <UIKit>UIKit.Inst();
    public static SaveKit = <SaveKit>SaveKit.Inst();
    public static CommonCardViewPool = new CardViewPool(()=><FairyGUI.GComponent>View_Card.CreateInstance());
}