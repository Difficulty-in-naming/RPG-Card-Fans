"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicMaster = void 0;
const csharp_1 = require("csharp");
const FileHelper_1 = require("../FileHelper");
class MusicMaster {
    static Map = new Map([
        ["SHOP_BGM", FileHelper_1.default.FormatPath("Audio/music/STS_Merchant_NewMix_v1.ogg")],
        ["SHRINE_BGM", FileHelper_1.default.FormatPath("Audio/music/STS_Merchant_NewMix_v1.ogg")],
        ["MINDBLOOM_BGM", FileHelper_1.default.FormatPath("Audio/music/STS_Shrine_NewMix_v1.ogg")],
        ["LEVEL_1_BOSS_BGM", FileHelper_1.default.FormatPath("Audio/music/STS_Boss1MindBloom_v1.ogg")],
        ["LEVEL_2_BOSS_BGM", FileHelper_1.default.FormatPath("Audio/music/STS_Boss2MindBloom_v1.ogg")],
        ["LEVEL_3_BOSS_BGM", FileHelper_1.default.FormatPath("Audio/music/STS_Boss3MindBloom_v1.ogg")],
        ["LEVEL_4_BOSS_BGM", FileHelper_1.default.FormatPath("Audio/music/STS_Boss4_v6.ogg")],
        ["ELITE_BGM", FileHelper_1.default.FormatPath("Audio/music/STS_EliteBoss_NewMix_v1.ogg")],
        ["CREDITS", FileHelper_1.default.FormatPath("Audio/music/STS_Credits_v5.ogg")],
    ]);
    static Play(key) {
        let bgm = this.Map.get(key);
        if (bgm) {
            csharp_1.MediaManager.PlayMusic(bgm, true);
        }
    }
    static Silence() {
    }
    static FadeOut() {
    }
}
exports.MusicMaster = MusicMaster;
//# sourceMappingURL=MusicMaster.js.map