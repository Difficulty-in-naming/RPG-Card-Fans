import { UnityEngine } from "csharp";

export class Vector2{
    constructor(public X:number,public Y:number){
    }
    public get UnityVec(){
        return new UnityEngine.Vector2(this.X,this.Y);
    }

    public Multiply(x : number){
        return new Vector2(this.X * x,this.Y * x);
    }

    public Add(x : Vector2){
        return new Vector2(this.X +x.X,this.Y+x.Y);
    }

    public toString(){
        return "x:" + this.X + ", y:" + this.Y;
    }

    public Equals(vec : Vector2){
        return this.X == vec.X && this.Y == vec.Y;
    }
}