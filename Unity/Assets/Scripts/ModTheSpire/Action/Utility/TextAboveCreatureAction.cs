using Core.Utils;
using Cysharp.Threading.Tasks;
using ModTheSpire.Dungeon;
using ModTheSpire.Event;
using ModTheSpire.Unit;
using UnityEngine;

namespace ModTheSpire.Effect.Other
{
    public class TextAboveCreatureAction : IGameAction
    {
        private string Msg;
        public ActionType Type { get; } = ActionType.TEXT;
        public float Duration { get; set; }
        private AbstractCreature Source;
        public TextAboveCreatureAction(AbstractCreature source,TextType text) {
            Msg = text.Key;
            Source = source;
        }
        
        public TextAboveCreatureAction(AbstractCreature source,string text) {
            this.Msg = text;
            Source = source;
        }


        public void Init()
        {
        }

        public UniTask<bool> Update()
        {
            DungeonManager.EffectManager.Play(new TextAboveCreatureEffect(this.Source.DisplayObject.X, this.Source.DisplayObject.Y, this.Msg,
                Color.white.Clone()));
            return UniTask.FromResult(true);
        }
    }
    
    public class TextType
    {
        public static TextType STUNNED = new TextType("打断！");
        public static TextType INTERRUPTED = new TextType("击晕！");
        public string Key { get; }

        public TextType(string key)
        {
            Key = key;
        }
    }
}