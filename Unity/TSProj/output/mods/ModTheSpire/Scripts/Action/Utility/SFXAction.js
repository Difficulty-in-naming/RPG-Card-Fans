"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SFXAction = void 0;
const SoundMaster_1 = require("../../Audio/SoundMaster");
const AbstractGameAction_1 = require("../AbstractGameAction");
class SFXAction extends AbstractGameAction_1.default {
    path;
    pitchVar;
    pitchAdjust;
    constructor(path, pitchVar, pitchAdjust) {
        super();
        this.path = path;
        this.pitchVar = pitchVar;
        this.pitchAdjust = pitchAdjust;
    }
    async Update() {
        if (this.pitchAdjust)
            SoundMaster_1.SoundMaster.PlayVoiceA(this.path, this.pitchVar);
        else
            SoundMaster_1.SoundMaster.PlayVoice(this.path, this.pitchVar);
        return super.Update();
    }
}
exports.SFXAction = SFXAction;
//# sourceMappingURL=SFXAction.js.map