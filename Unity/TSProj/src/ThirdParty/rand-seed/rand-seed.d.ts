export declare enum PRNG {
    sfc32 = "sfc32",
    mulberry32 = "mulberry32",
    xoshiro128ss = "xoshiro128ss"
}
declare class Rand {
    private str?;
    private prng;
    private generator;
    constructor(str?: string, prng?: PRNG);
    next(): number;
    private _initializeGenerator;
    private wrap;
}
export default Rand;
