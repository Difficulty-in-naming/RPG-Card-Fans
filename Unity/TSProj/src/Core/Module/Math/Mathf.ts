import Rand from 'rand-seed';

export class Mathf {
    public static Rad2Deg = 57.29578;
    public static Deg2Rad = 0.01745329;

    public static Abs(value : number) : number{
        return Math.abs(value);
    }
    
    public static Atan2(value1 : number,value2 : number) : number{
        return Math.atan2(value1,value2);
    }
    
    public static Cos(value:number):number{
        return Math.cos(value);
    }
    
    public static CosDeg(value:number):number{
        return Mathf.Cos(value * this.Deg2Rad);
    }
    
    public static Tan(value:number):number{
        return Math.tan(value);
    }
    
    public static Sin(value:number):number{
        return Math.sin(value);
    }

    public static SinDeg(value:number):number{
        return Mathf.Sin(value * this.Deg2Rad);
    }
    
    public static Angle(x:number,y:number):number{
        let angle = this.Atan2(y,x) * this.Rad2Deg;
        if(angle<0)
            angle += 360;
        return angle;
    }
    
    public static Asin(value:number):number{
        return Math.asin(value);
    }
    
    public static Acos(value:number):number{
        return Math.acos(value);
    }
    
    public static Atan(value:number):number{
        return Math.atan(value);
    }
    
    public static Sqrt(value:number):number{
        return Math.sqrt(value);
    }
    
    public static Clamp01(value : number) : number
    {
        if (value < 0.0)
            return 0;
        return value > 1.0 ? 1 : value;
    }
    
    public static Min(...value:number[]):number{
        return Math.min(...value);
    }
    
    public static Max(...value:number[]):number{
        return Math.max(...value);
    }

    public static Pow(value1:number,value2:number):number{
        return Math.pow(value1,value2);
    }
    
    public static Exp(value:number):number{
        return Math.exp(value)
    }
    
    public static Log(value1:number,value2?:number):number{
        if(value2){
            return Math.log(value1) / Math.log(value2);
        }
        return Math.log(value1);
    }
    
    public static Log10(value:number):number{
        return Math.log10(value);
    }
    
    public static Log2(value:number):number{
        return Math.log2(value);
    }
    
    public static Log1p(value:number):number{
        return Math.log1p(value);
    }
    
    public static Sign(value:number):number{
        return Math.sign(value);
    }
    
    public static BigMul(value1:number,value2:number){
        return value1 * value2;
    }
    
    public static Lerp(x:number,y:number,t:number) : number
    {
        return x + (y - x) * Mathf.Clamp01(t);
    }

    public static Distance(x:number,y:number,tx:number,ty:number):number{
        let xd = tx - x;
        let yd = ty - y;
        return Mathf.Sqrt(xd * xd + yd * yd);
    }
    
    public static Clamp(value : number,min : number,max : number) : number
    {
        if (value < min)
            return min;
        else if(value > max)
            return max;
        return value;
    }

    public static Floor(value : number) : number
    {
        return Math.floor(value);
    }

    public static Ceil(value : number) : number
    {
        return Math.ceil(value);
    }
    
    public static Round(value:number):number{
        return Math.round(value);
    }
    
    public static FRound(value:number):number{
        return Math.fround(value);
    }
    
    public static LerpUnclamped(x:number,y:number,t:number):number{
        return x + (y - x) * t;
    }
    
    public static LerpAngle(x:number,y:number,t:number):number{
        let num = Mathf.Repeat(y-x,360);
        if(num > 180)
            num -=360;
        return x + num * Mathf.Clamp01(t);
    }
    
    public static MoveTowards(current:number,target:number,maxDelta){
        return Mathf.Abs(target-current) <= maxDelta ? target:current +Mathf.Sign(target-current)*maxDelta;
    }

    public static MoveTowardsAngle(current:number,target:number,maxDelta){
        let num = Mathf.Repeat(current,target);
        if(-maxDelta < num && num < maxDelta)
            return target;
        target = current + num;
        return Mathf.MoveTowards(current,target,maxDelta);
    }
    
    public static Repeat(t:number,length:number):number{
        return Mathf.Clamp(t-Mathf.Floor(t/length) * length,0,length);
    }
    
    public static Random(rng:Rand = undefined) : number
    {
        if(rng)
            return rng.next();
        else
            return Math.random();
    }
    
    public static RandomRange(min:number,max:number,rng:Rand = undefined) : number
    {
        if(min < 0) {
            if(max < 0) {
                min = this.Abs(min);
                return this.Random(rng) * (min + max) - min;
            }
        } else {
            if(max > 0) {
                min = min*-1;
                return this.Random(rng) * (min + max) - min;
            }
        }
        return this.Random(rng) * (max - min) + min;
    }
}