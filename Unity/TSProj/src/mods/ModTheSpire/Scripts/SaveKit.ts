import SaveHelper from "../../../Core/Utils/SaveHelper";
export default class SaveKit {
    private static inst: SaveKit;
    public static Inst(): SaveKit {
        if (!SaveKit.inst) {
            SaveKit.inst = new SaveKit();
        }
        return SaveKit.inst;
    }
    private basePath = "ModTheSpire/";
    
    private constructor() {
    }
    
    public Save(){
    }
}