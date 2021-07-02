export class MessageKit
{
    private static inst: MessageKit;
    public static Inst(): MessageKit {
        if (!MessageKit.inst) {
            MessageKit.inst = new MessageKit();
        }
        return MessageKit.inst;
    }
    
    private Observer : Map<string,Array<Function>> = new Map<string, Array<Function>>();
    
    public Add(key:string,func : Function)
    {
        let list = this.Observer[key];
        if(!list){
            list = new Array<Function>();
            this.Observer.set(key,list);
        }
        list.push(func);
    }
    
    public Remove(key:string,func : Function){
        let list : Array<Function> = this.Observer[key];
        if(list){
            list.filter()
        }
    }
}