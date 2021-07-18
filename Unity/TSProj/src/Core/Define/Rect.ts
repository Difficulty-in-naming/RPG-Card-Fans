export class Rect{
    public X:number;
    public Y:number;
    public Width:number;
    public Height:number;
    public get CX(){
        return this.Width / 2 + this.X;
    }
    public get CY(){
        return this.Height / 2 + this.Y;
    }
    constructor(X: number, Y: number, Width: number, Height: number) {
        this.X = X;
        this.Y = Y;
        this.Width = Width;
        this.Height = Height;
    }
}