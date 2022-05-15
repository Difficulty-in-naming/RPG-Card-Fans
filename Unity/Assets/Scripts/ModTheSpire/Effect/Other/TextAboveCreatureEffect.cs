using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Other
{
    public class TextAboveCreatureEffect : AbstractEffect
    {
        private float Interval = 2.2f;
        private int TargetOffestY = 80;
        public FairyGUI.GComponent TextComponent;

        public TextAboveCreatureEffect(float x, float y, string msg, Color targetColor)
        {
            TextComponent = View_TextAboveEffect.CreateInstance();
            TextComponent.SetPosition(x, y, 0);
            TextComponent.text = msg;
            var transition = this.TextComponent.GetTransition("t0");
            transition.SetValue("FromColor", targetColor);
            transition.Play(1, 0, Finish);
        }

        public override void Dispose()
        {
            TextComponent.Dispose();
        }
    }
}