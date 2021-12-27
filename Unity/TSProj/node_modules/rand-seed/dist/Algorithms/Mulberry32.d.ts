import Base from './Base';
import Algorithm from '../Algorithm';
declare class Mulberry32 extends Base implements Algorithm {
    private a;
    constructor(str: string);
    next(): number;
}
export default Mulberry32;
