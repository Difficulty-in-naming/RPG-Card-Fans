import { FairyGUI } from "csharp";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { AbstractEffect } from "../AbstractEffect";
import { SoundMaster } from "../../Audio/SoundMaster";
import DungeonManager from "../../DungeonManager";
import { HealNumberEffect } from "./HealNumberEffect";
import { HealVerticalLineEffect } from "./HealVerticalLineEffect";

export class HealEffect extends AbstractEffect{
    public Effect:FairyGUI.GComponent
    private X_JITTER = 120.0;
    private Y_JITTER = 120.0;
    private OFFSET_Y = -50.0;
    public constructor(X : number,Y:number,Amount:number) {
        super();
        let roll = Mathf.RandomRange(0, 3);
        if (roll == 0) {
            SoundMaster.PlayVoice("HEAL_1");
        } else if (roll == 1) {
            SoundMaster.PlayVoice("HEAL_2");
        } else {
            SoundMaster.PlayVoice("HEAL_3");
        }
        DungeonManager.EffectManager.Play(new HealNumberEffect(X, Y, Amount));
        for (let i = 0; i < 18; ++i) {
            DungeonManager.EffectManager.Play(new HealVerticalLineEffect(X + Mathf.RandomRange(-this.X_JITTER * 1.5, this.X_JITTER * 1.5), Y + this.OFFSET_Y + Mathf.RandomRange(-this.Y_JITTER, this.Y_JITTER)));
        }
    }
}