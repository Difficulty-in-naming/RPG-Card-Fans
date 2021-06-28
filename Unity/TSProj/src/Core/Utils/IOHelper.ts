import {Log} from "../Module/Log/Log";
import PathHelper from "./PathHelper";
import {System} from 'csharp';
export default class IOHelper {
    static GetFiles(dir:string,searchPattern:string,searchOption:System.IO.SearchOption) : Array<string>
    {
        let array : Array<string> = new Array<string>();
        let files = System.IO.Directory.GetFiles(dir,searchPattern,searchOption);
        let fileNumber = files.Length;
        for (let i = 0; i < fileNumber; i++) {
            array.push(PathHelper.FormatFilePath(files.get_Item(i)));
        }
        return array;
    }
}
