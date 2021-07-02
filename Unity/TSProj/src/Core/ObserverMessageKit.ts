export class ObserverMessageKit
{
    private static inst: ObserverMessageKit;
    public static Inst(): ObserverMessageKit {
        if (!ObserverMessageKit.inst) {
            ObserverMessageKit.inst = new ObserverMessageKit();
        }
        return ObserverMessageKit.inst;
    }
    
    private map : Map<string,Array<Function>> = new Map<string, Array<Function>>();
    
    public Add(key:string,func : Function)
    {
        let list = this.map[key];
        if(!list){
            list = new Array<Function>();
            this.map.set(key,list);
        }
        list.push(func);
    }
    
    public Remove(key:string,func : Function){
        let list : Array<Function> = this.map[key];
        if(list){
            this.map[key] = list.filter(item => item == func);
        }
    }
    
    public Send(key : string,...args){
        let list : Array<Function> = this.map[key];
        if(list){
            this.map[key].forEach(item=>{
                (<Function>item)(args);
            })
        }
    }
}