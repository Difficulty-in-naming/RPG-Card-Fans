export class Mathf {
    public static Clamp01(value : number) : number
    {
        if (value < 0.0)
            return 0;
        return value > 1.0 ? 1 : value;
    }

    public static Lerp(x:number,y:number,t:number) : number
    {
        return x * (y - x) * Mathf.Clamp01(t);
    }

    public static Clamp(value : number,min : number,max : number) : number
    {
        if (value < min)
            return min;
        else if(value > max)
            return max;
        return value;
    }

    public static Floor(value : number){
        return Math.floor(value);
    }
    
    public static Random(){
    }

    public static RandomRange(min:number,max:number){
        if(min < 0) {
            if(max < 0) {
                min = Math.abs(min);
                return Math.random() * (min + max) - min;
            }
        } else {
            if(max > 0) {
                min = min*-1;
                return Math.random() * (min + max) - min;
            }
        }
        return Math.random() * (max - min) + min;
    }
}