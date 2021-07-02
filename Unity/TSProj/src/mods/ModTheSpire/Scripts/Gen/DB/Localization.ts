/********************************
  该脚本是自动生成的请勿手动修改
*********************************/
import PathHelper from "../../../../../Core/Utils/PathHelper";
import {ConfigAssetManager} from "../../../../../Core/Module/Config/ConfigAssetManager";
import Settings from "../../../../../Core/Settings";


export class LocalizationProperty
{
			// Id
	public Id : string;
		// 中文
	public Chinese : string;

	public static Read(id : string) : string
	{
		// @ts-ignore
		let dirName = __dirname;
		let result = ConfigAssetManager.Read(PathHelper.GetModName(dirName),id)[Settings.Inst().Language];
		if(!result)
			return id;
		return result
	}

	public static ReadDict() : Map<string, LocalizationProperty>
	{
		// @ts-ignore
		let dirName = __dirname;
		return ConfigAssetManager.ReadDict(PathHelper.GetModName(dirName));
	}
}

