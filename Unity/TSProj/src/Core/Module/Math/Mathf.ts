import Rand from "Core/Module/RandomGenerator";

export class Mathf {
    public static Rad2Deg = 57.29578;


    public static Abs(value : number) : number{
        return Math.abs(value);
    }
    
    public static Atan2(value1 : number,value2 : number) : number{
        return Math.atan2(value1,value2);
    }
    
    
    public static Clamp01(value : number) : number
    {
        if (value < 0.0)
            return 0;
        return value > 1.0 ? 1 : value;
    }

    public static Lerp(x:number,y:number,t:number) : number
    {
        return x + (y - x) * Mathf.Clamp01(t);
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