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
		let c = ConfigAssetManager.Read("ModTheSpire_Localization",id);
		if(!c)
			return id;
		let result = c[Settings.Inst().Language];
		if(!result)
			return id;
		return result
	}

	public static ReadDict() : Map<string, LocalizationProperty>
	{
		// @ts-ignore
		let dirName = __dirname;
		return ConfigAssetManager.ReadDict("ModTheSpire_Localization");
	}
}

