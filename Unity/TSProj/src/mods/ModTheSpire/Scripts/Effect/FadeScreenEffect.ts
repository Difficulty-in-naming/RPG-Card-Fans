import TWEEN from "../../../../ThirdParty/@tweenjs/tween";
import Color from "../DataDefine/Color";
import UIHelper from "../UI/UIHelper";
import { AbstractEffect } from "./AbstractEffect";

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
        graph.color = Color.Black.UnityColor;
        let t = new TWEEN.Tween({a:alpha}).to({a:alpha == 0 ? 1 :0}, 1500).easing(TWEEN.Easing.Sinusoidal.InOut)
            .onUpdate(object => {
                graph.alpha = object.a;
                this.IsDone = true;
                graph.Dispose();
                callback();
            }).start();
    }
}