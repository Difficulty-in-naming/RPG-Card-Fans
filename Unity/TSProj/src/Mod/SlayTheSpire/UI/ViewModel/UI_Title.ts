import {View_Title} from "../View/ModTheSpire_Title";
import {Log} from "../../../../Core/Module/Log/Log";
import {FairyGUI} from 'csharp'
export class UI_Title extends View_Title
{
    OnInit(...args) {
        this.View.MakeFullScreen();
        this.Start.data = "Test"
        this.Start.onClick.Add((t1) => {
            Log.Print("成功了");
            let button = <FairyGUI.GButton>t1.sender;
            Log.Print(button.data);
        })
    }

    OnUpdate() {
        console.log("gaga")
    }
}



