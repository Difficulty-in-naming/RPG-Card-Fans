export interface IMessage{
}

export class ObserverMessageKit
{
    private map : Map<string,Array<(msg:IMessage,...args:any[])=>void>> = new Map<string, Array<((msg:IMessage,...args:any[])=>void)>>();
    
    public Add(key:string,func : (IMessage))
    {
        let list = this.map[key];
        if(!list){
            list = new Array<(msg:IMessage)=>void>();
            this.map.set(key,list);
        }
        list.push(func);
    }
    
    public Remove(key:string,func : (IMessage)){
        let list = this.map[key];
        if(list){
            this.map[key] = list.filter(item => item == func);
        }
    }
    
    public Send(key : string,message:IMessage,...args){
        let list = this.map[key];
        if(list){
            this.map[key].forEach(item=>{
                item(message,args);
            })
        }
    }
}