using Febucci.UI;
using Febucci.UI.Core;

[UnityEngine.Scripting.Preserve]
[EffectInfo(tag: "speechsize")]
class SpeechSizeAppearance : AppearanceBase
{
    float amplitude;
    public override void SetDefaultValues(AppearanceDefaultValues data)
    {
        effectDuration = data.defaults.sizeDuration;
        amplitude = 0 * -1 + 1;
    }

    public override void ApplyEffect(ref CharacterData data, int charIndex)
    {
        data.vertices.LerpUnclamped(
            data.vertices.GetMiddlePos(),
            Tween.EaseIn(1 - (data.passedTime / effectDuration)) * amplitude
        );
    }
}