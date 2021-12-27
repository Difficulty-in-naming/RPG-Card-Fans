export class ViewInfo {
    pkg : string;
    name : string;
    constructor(pkg:string,name:string) {
        this.pkg = pkg;
        this.name = name;
    }
    public toString(){
        return this.pkg + "." + this.name;
    }
}