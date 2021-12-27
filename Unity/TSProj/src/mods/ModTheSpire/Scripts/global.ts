import { UIKit } from "../../../Core/Module/UI/UIKit";
import SaveKit from "./SaveKit";

export class S{
    public static UIKit = <UIKit>UIKit.Inst();
    public static SaveKit = <SaveKit>SaveKit.Inst();
}