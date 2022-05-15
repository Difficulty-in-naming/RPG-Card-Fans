using FairyGUI;
using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class BiteEffect : AbstractEffect
    {
        readonly GImage mTop;
        readonly GImage mBot;
        readonly View_BiteEffect mInstance;
        public BiteEffect(float x,float y,Color? color = null)
        {
            mInstance = View_BiteEffect.CreateInstance();
            mTop = mInstance.GetChild("Top").asImage;
            mBot = mInstance.GetChild("Bot").asImage;
            color ??= new Color(179, 230, 255, 255);
            mTop.color = color.Value;
            mBot.color = color.Value;
        }

        public override void Update()
        {
            base.Update();
            mTop.SetScale(1 + Random.Range(-0.05f,0.05f),1 + Random.Range(-0.05f,0.05f));
            mBot.SetScale(1 + Random.Range(-0.05f,0.05f),1 + Random.Range(-0.05f,0.05f));
            if(Duration >= 1)
                Finish();
        }

        public override void Dispose()
        {
            base.Dispose();
            mInstance.Dispose();
        }
    }
}