import { Vector2 } from "./Vector2";

export class Rect{
    //Left
    public X:number;
    //Top
    public Y:number;
    public Width:number;
    public Height:number;
    public get CX(){
        return this.Width / 2 + this.X;
    }
    public get CY(){
        return this.Height / 2 + this.Y;
    }

    public get LeftTop():Vector2{
        return new Vector2(this.X,this.Y);
    }

    public get LeftBottom():Vector2{
        return new Vector2(this.X,this.Y + this.Height);
    }

    public get RightTop():Vector2{
        return new Vector2(this.X + this.Width,this.Y);
    }

    public get RightBottom():Vector2{
        return new Vector2(this.X + this.Width,this.Y + this.Height);
    }

    constructor(X: number, Y: number, Width: number, Height: number) {
        this.X = X;
        this.Y = Y;
        this.Width = Width;
        this.Height = Height;
    }
}