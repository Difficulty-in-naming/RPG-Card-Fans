import { UnityEngine } from "csharp";

export class Vector3{
    constructor(public X:number,public Y:number,public Z:number){
    }
    public get UnityVec(){
        return new UnityEngine.Vector3(this.X,this.Y,this.Z);
    }
}