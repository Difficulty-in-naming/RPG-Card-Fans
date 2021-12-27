import { Spine, MediaManager } from "csharp";
import { Mathf } from "../../../../../../Core/Module/Math/Mathf";


export function SlimeAnimListener(trackEntry : Spine.TrackEntry){
    let roll = Mathf.Floor(Mathf.RandomRange(1,5));
    MediaManager.PlayVoice(`Audio/sound/SOTE_SFX_SlimeBlink_${roll}_v2.ogg`);
}