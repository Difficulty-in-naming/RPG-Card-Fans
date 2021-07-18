import { MediaManager } from "csharp"
import {Mathf} from "Core/Module/Math/Mathf";
import FileHelper from "mods/ModTheSpire/Scripts/FileHelper";

export class MusicMaster{
    public static Map:Map<string,string> = new Map<string, string>([
        ["SHOP_BGM", FileHelper.FormatPath("Audio/music/STS_Merchant_NewMix_v1.ogg")],
        ["SHRINE_BGM", FileHelper.FormatPath("Audio/music/STS_Merchant_NewMix_v1.ogg")],
        ["MINDBLOOM_BGM", FileHelper.FormatPath("Audio/music/STS_Shrine_NewMix_v1.ogg")],
        ["LEVEL_1_BOSS_BGM", FileHelper.FormatPath("Audio/music/STS_Boss1MindBloom_v1.ogg")],
        ["LEVEL_2_BOSS_BGM", FileHelper.FormatPath("Audio/music/STS_Boss2MindBloom_v1.ogg")],
        ["LEVEL_3_BOSS_BGM", FileHelper.FormatPath("Audio/music/STS_Boss3MindBloom_v1.ogg")],
        ["LEVEL_4_BOSS_BGM", FileHelper.FormatPath("Audio/music/STS_Boss4_v6.ogg")],
        ["ELITE_BGM", FileHelper.FormatPath("Audio/music/STS_EliteBoss_NewMix_v1.ogg")],
        ["CREDITS", FileHelper.FormatPath("Audio/music/STS_Credits_v5.ogg")],
    ]);

    public static Play(key:string){
        let bgm = this.Map.get(key);
        if(bgm){
            MediaManager.PlayMusic(bgm,true);
        }
    }
    
    public static Silence(){
        
    }
    
    public static FadeOut(){
        
    }
}