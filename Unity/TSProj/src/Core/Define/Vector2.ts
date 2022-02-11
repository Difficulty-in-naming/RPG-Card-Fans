import { UnityEngine } from "csharp";

export class Vector2{
    constructor(public X:number,public Y:number){
    }
    public get UnityVec(){
        return new UnityEngine.Vector2(this.X,this.Y);
    }
}