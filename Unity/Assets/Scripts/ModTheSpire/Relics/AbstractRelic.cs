using System;
using Core.Utils;
using ModTheSpire.Dungeon;
using ModTheSpire.Event;
using Newtonsoft.Json;

namespace ModTheSpire.Relics
{
    public abstract class AbstractRelic
    {
        [JsonProperty]
        public abstract string Id { get; }
        [JsonProperty]
        public abstract string Name { get; }
        [JsonProperty]
        public abstract string Icon { get; }
        //遗物效果描述
        [JsonProperty]
        public abstract string Desc { get; }
        //遗物特殊描述
        [JsonProperty]
        public abstract string Flavor { get; }
        [JsonProperty]
        private string UUID { get; set; }
        //只在构造函数初始数值,不要监听任何事件,不要调用任何方法,继承这个方法调用自己的接口.
        public abstract void OnObtain();
    
        public abstract void OnLose();

        //获得一份数值上完全一样的该类复制
        public AbstractRelic Clone(bool newUuid = true)
        {
            var json = JsonConvert.SerializeObject(this);
            var relic = (AbstractRelic)JsonConvert.DeserializeObject(json, this.GetType());
            if (newUuid)
                relic.UUID = UUIDGenerator.Get();
            return relic;
        }
        //重新生成该类.并得到生成后的引用
        public AbstractRelic NewInstance()
        {
            return (AbstractRelic)Activator.CreateInstance(this.GetType());
        }
        protected void AddToBot(IGameAction action){DungeonManager.ActionManager.AddToBottom(action);}
        protected void AddToTop(IGameAction action){DungeonManager.ActionManager.AddToTop(action);}
    }
}