using System.Collections.Generic;
using UnityEngine;

namespace ModTheSpire.Effect
{
    public class EffectKit
    {
        private static EffectKit _inst;
        public static EffectKit Inst => _inst ??= new EffectKit();

        private EffectKit()
        {
        }

        private bool Waiting { get; set; }
        public List<AbstractEffect> List { get; } = new();
        public void Play(AbstractEffect effect)
        {
            this.List.Add(effect);
        }

        public void Update()
        {
            for (var i = this.List.Count - 1; i >= 0; i--)
            {
                var node = this.List[i];
                try
                {
                    node.Update();
                    if (!node.IsDone)
                    {
                        node.Duration += Time.deltaTime;
                    }
                    else
                    {
                        node.Dispose();
                        this.List.RemoveAt(i);
                    }
                }
                catch
                {
                    node.Dispose();
                    this.List.RemoveAt(i);
                }
            }
        }
    }

    public enum EffectOrder
    {
        BOT = 0,
        MID = 1,
        TOP = 3,
    }
}