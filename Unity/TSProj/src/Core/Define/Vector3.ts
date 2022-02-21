import { UnityEngine } from "csharp";

export class Vector3{
    constructor(public X:number,public Y:number,public Z:number){
    }
    public get UnityVec(){
        return new UnityEngine.Vector3(this.X,this.Y,this.Z);
    }
    public Multiply(x : number){
        return new Vector3(this.X * x,this.Y * x,this.Z * x);
    }
    public Add(x : Vector3){
        return new Vector3(this.X +x.X,this.Y+x.Y,this.Z + x.Z);
    }
}