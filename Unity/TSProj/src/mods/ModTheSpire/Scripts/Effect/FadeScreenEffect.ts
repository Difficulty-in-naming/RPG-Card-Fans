import UIHelper from "mods/ModTheSpire/Scripts/UI/UIHelper";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import Tween from "Core/Module/Tween";
import {AbstractEffect} from "mods/ModTheSpire/Scripts/Effect/AbstractEffect";

export class FadeScreenEffect extends AbstractEffect
{
    public constructor(toDark : boolean,callback : Function) {
        super();
        let graph = UIHelper.CreateGGraph();
        graph.MakeFullScreen();
        graph.Center();
        let alpha = toDark ? 1 : 0;
        graph.alpha = alpha;
        graph.sortingOrder = 10;
        graph.color = Color.Black.UnityColor();
        let t = new Tween.Tween({a:alpha}).to({a:alpha == 0 ? 1 :0}, 1500).easing(Tween.Easing.Sinusoidal.InOut)
            .onUpdate(object => {
                graph.alpha = object.a;
                this.IsDone = true;
                graph.Dispose();
                callback();
            }).start();
    }
}