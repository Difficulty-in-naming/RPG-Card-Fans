import { FairyGUI } from "csharp";
import { UIKit } from '../../../../Core/Module/UI/UIKit';
import { ViewInfo } from "../../../../Core/Module/UI/ViewInfo";

export class CardViewPool
{
   private activeList: Array<any>;
   private reserveList: Array<any>;

   private numberActive: number;
   private numberReserved: number;

   private func : (view:ViewInfo,url:string)=>any;
   constructor(reserve: number = 5,callback: (viewInfo:ViewInfo,url: string) => any)
   {
       this.activeList = new Array<any>();
       this.reserveList = new Array<any>();

       this.numberActive = 0;
       this.numberReserved = 0;
       this.func = callback;
       this.initializeReserve(reserve);
   }

   private initializeReserve(reserve: number)
   {
       for(let i = 0; i < reserve; i++)
       {
           const ui = func();
           this.reserveList.push(<T><unknown>ui);
       }
   }

   public getGameObject(): FairyGUI.GComponent
   {
       if(this.numberReserved == 0)
       {
        const ui = UIKit.Inst().CreatePanel(viewInfo,UIKit.Inst().Get(url),null);
        this.reserveList.push(<T><unknown>ui);
           this.numberReserved++;
       }

       const gameObject = this.reserveList.pop();
       this.numberReserved--;

       this.activeList.push(gameObject);
       this.numberActive++;

       gameObject.clear();

       return gameObject;
   }

   public returnGameObject(gameObject: FairyGUI.GComponent)
   {
       const index = this.activeList.indexOf(gameObject);
       if(index >= 0)
       {
           this.activeList.splice(index, 1);
           this.numberActive--;

           this.reserveList.push(gameObject);
           this.numberReserved++;
       }
   }
}