import {IDisplay} from "mods/ModTheSpire/Scripts/Loader/IDisplay";
import Color from "mods/ModTheSpire/Scripts/DataDefine/Color";
import { FairyGUI } from "csharp";
import {Rect} from "Core/Define/Rect";

export class TextureDisplay implements IDisplay {
    Bounds: FairyGUI.GGraph;
    Rotation: number;
    ScaleX: number;
    ScaleY: number;
    Self: any;
    SortingOrder: number;
    Visible: boolean;
    X: number;
    Y: number;
    Color: Color;

    Dispose() {
    }

    SetAnimation(animation: string) {
    }

    SetParent(object: any) {
    }

    PlayFastAttack() {
    }

    PlayFastShake() {
    }

    PlayHop() {
    }

    PlayJump() {
    }

    PlaySlowAttack() {
    }

    PlaySlowShake() {
    }

    PlayStagger() {
    }

    FlipX: boolean;
    FlipY: boolean;
    HealthComponent: any;
    UnitComponent: any;

    AddAnimation(animation: string, loop?: boolean): any {
    }

    GetHitBox(): Rect {
        return undefined;
    }

    SetHitBox(rect: Rect) {
    }

    
}