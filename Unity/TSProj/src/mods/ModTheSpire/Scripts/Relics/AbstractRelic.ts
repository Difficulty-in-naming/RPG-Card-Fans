import {UuidTool} from "Core/Module/UUID";
import {IGameAction} from "Core/QueueMessageKit";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";

export default abstract class AbstractRelic{
    public abstract Id :string;
    public abstract Name : string;
    public abstract Icon : string;
    //遗物效果描述
    public abstract Desc : string;
    //遗物特殊描述
    public abstract Flavor : string;
    
    //只在构造函数初始数值,不要监听任何事件,不要调用任何方法,继承这个方法调用自己的接口.
    public abstract OnObtain();
    
    public abstract OnLose();

    //获得一份数值上完全一样的该类复制
    public Clone(newUuid : boolean = true) : this
    {
        let serialize = JSON.stringify(this);
        if(newUuid)
            serialize["UUID"] = UuidTool.newUuid();
        return JSON.parse(serialize);
    }
    //重新生成该类.并得到生成后的引用
    public NewInstance() : this{
        return new (this.constructor as any)();
    }
    protected AddToBot(action : IGameAction){DungeonManager.ActionManager.AddToBottom(action);}
    protected AddToTop(action : IGameAction){DungeonManager.ActionManager.AddToTop(action);}
}