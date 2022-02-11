import Base from './Base';
import Algorithm from '../Algorithm';
declare class Sfc32 extends Base implements Algorithm {
    private a;
    private b;
    private c;
    private d;
    constructor(str: string);
    next(): number;
}
export default Sfc32;
