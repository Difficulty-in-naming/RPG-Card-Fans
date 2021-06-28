import {UnityEngine} from 'csharp';
export default class PathHelper {
    //格式化文件路径
    public static FormatFilePath(filePath : string) : string
    {
        filePath = filePath.replace(/\\/g,"/");
        //filePath = filePath.replace(/\/\//g,"/");
        return filePath;
    }

    // 格式化文件路径并将路径截取到Mod文件夹
    public static FullPathToModPath(filePath : string) : string
    {
        filePath = this.FormatFilePath(filePath);
        return filePath = filePath.replace(UnityEngine.Application.persistentDataPath + "/Mod/","")
    }

    //删除文件名扩展名称
    public static RemoveFileExtension(filePath : string) : string
    {
        return filePath.split('.')[0];
    }

    //获取文件名称
    static GetFileName(filePath : string) : string
    {
        return filePath.split('/').pop();
    }
    
    //获取无扩展名称文件名
    static GetFileNameWithoutExtension(filePath : string) : string
    {
        return this.RemoveFileExtension(this.GetFileName(filePath));
    }

    //获取文件夹路径
    static GetDirPath(filePath : string) : string
    {
        filePath = this.FormatFilePath(filePath);
        filePath = filePath.substring(0,filePath.lastIndexOf('/'));
        return filePath;
    }
}