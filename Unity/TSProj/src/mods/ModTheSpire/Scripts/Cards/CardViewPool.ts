import { FairyGUI } from "csharp";

export class CardViewPool
{
   private activeList: Array<FairyGUI.GComponent>;
   private reserveList: Array<FairyGUI.GComponent>;

   private numberActive: number;
   private numberReserved: number;

   private func : ()=>FairyGUI.GComponent;
   constructor(reserve: number = 5,callback: () => FairyGUI.GComponent)
   {
       this.activeList = new Array<FairyGUI.GComponent>();
       this.reserveList = new Array<FairyGUI.GComponent>();

       this.numberActive = 0;
       this.numberReserved = 0;
       this.func = callback;
       this.initializeReserve(reserve);
   }

   private initializeReserve(reserve: number)
   {
       for(let i = 0; i < reserve; i++)
       {
           const ui = this.func();
           this.reserveList.push(ui);
       }
   }

   public Pop(): FairyGUI.GComponent
   {
       if(this.numberReserved == 0)
       {
        const ui = this.func();
        this.reserveList.push(ui);
           this.numberReserved++;
       }

       const com = this.reserveList.pop();
       this.numberReserved--;

       this.activeList.push(com);
       this.numberActive++;

       return com;
   }

   public Push(gameObject: FairyGUI.GComponent)
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