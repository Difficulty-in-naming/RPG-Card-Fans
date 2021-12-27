import { FairyGUI } from "csharp";
import { View_Tooltips } from "../../Gen/View/ModTheSpire_Common";

export class UI_Tooltips extends View_Tooltips
{
    OnUpdate() {
        super.OnUpdate();
        let pt = FairyGUI.GRoot.inst.GlobalToLocal(FairyGUI.Stage.inst.GetTouchPosition(-1));
        this.View.SetPosition(pt.x + 30,pt.y + 30,0);
    }
}