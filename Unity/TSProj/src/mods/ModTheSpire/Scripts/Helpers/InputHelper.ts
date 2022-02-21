import { FairyGUI, UnityEngine } from "csharp";
import { Vector2 } from "../../../../Core/Define/Vector2";

export class InputHelper{
    public static get MouseScreenPoistion(){
        let pos = UnityEngine.Input.mousePosition;
        return new Vector2(pos.x,pos.y);
    }   

    public static get MouseUIPoistion(){
        let pos = FairyGUI.GRoot.inst.GlobalToLocal(FairyGUI.Stage.inst.GetTouchPosition(-1))
        return new Vector2(pos.x,pos.y);
    }

    public static GetMouseButtonUp(button : number){
        return UnityEngine.Input.GetMouseButtonUp(button);
    }

    public static GetMouseButtonDown(button : number){
        return UnityEngine.Input.GetMouseButtonDown(button);
    }

    public static GetMouseButton(button : number){
        return UnityEngine.Input.GetMouseButton(button);
    }

    public static GetKey(button : UnityEngine.KeyCode){
        return UnityEngine.Input.GetKey(button);
    }

    public static GetKeyDown(button : UnityEngine.KeyCode){
        return UnityEngine.Input.GetKeyDown(button);
    }

    public static GetKeyUp(button : UnityEngine.KeyCode){
        return UnityEngine.Input.GetKeyUp(button);
    }
}