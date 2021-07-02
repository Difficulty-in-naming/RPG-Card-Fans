import {UI_SelectGameMode} from "./UI_SelectGameMode";
import {View_Title} from "../../Gen/View/ModTheSpire_Title";
import Color from "../../DataDefine/Color";
export class UI_Title extends View_Title
{
    OnInit(...args) {
        this.View.MakeFullScreen();
        this.View.Center();
        this.Start.onClick.Add(() => {
            UI_SelectGameMode.CreatePanel();
        });
    }

    OnUpdate() {
    }
}



