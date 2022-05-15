using Core.Game;
using Core.Utils;
using ModTheSpire.DataDefine;
using ModTheSpire.Dungeon;
using ModTheSpire.ModTheSpire_Effect;
using UnityEngine;

namespace ModTheSpire.Effect.Combat
{
    public class PowerExpireTextEffect : AbstractEffect
    {
        private float Interval = 2;
        private bool SpikeEffectTriggered = false;
        public FairyGUI.GComponent TextEffect;
        public PowerExpireTextEffect(float x,float y,string msg,string icon ) {
            this.TextEffect = View_PowerExpireTextEffect.CreateInstance();
            this.TextEffect.SetPosition(x, y, 0);
            this.TextEffect.text = msg;
            this.TextEffect.icon = icon;
            this.TextEffect.GetTransition("t0").Play();
        }

        public override void Update()
        {
            if(this.Duration >= this.Interval * 0.2 && !LocalSettings.Inst.DisableEffects && !this.SpikeEffectTriggered){
                this.SpikeEffectTriggered = true;
                for(var i = 0;i<10;i++)
                {
                    DungeonManager.EffectManager.Play(new FlyingSpikeEffect(this.TextEffect, Random.Range(-20, 0) + 64, Random.Range(20, 108), 0,
                        Random.Range(-80, -120), 0, MTSColor.BlueText.Clone()));
                }
                for(var i = 0;i<10;i++)
                {
                    DungeonManager.EffectManager.Play(new FlyingSpikeEffect(this.TextEffect, Random.Range(20, 0) + 64, Random.Range(20, 108), 0,
                        Random.Range(80, 120), 0, MTSColor.BlueText.Clone()));
                }
            }
            if(this.Duration >= this.Interval)
            {
                Finish();
            }
        }

        public override void Dispose()
        {
            base.Dispose();
            TextEffect.Dispose();
        }
    }
}