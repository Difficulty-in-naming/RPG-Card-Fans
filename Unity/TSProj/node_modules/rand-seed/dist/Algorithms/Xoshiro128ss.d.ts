import Base from './Base';
import Algorithm from '../Algorithm';
declare class Xoshiro128ss extends Base implements Algorithm {
    private a;
    private b;
    private c;
    private d;
    constructor(str: string);
    next(): number;
}
export default Xoshiro128ss;
