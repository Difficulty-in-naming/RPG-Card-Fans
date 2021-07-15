export class LocalSettings{
    private static inst: LocalSettings;
    public static Inst(): LocalSettings {
        if (!LocalSettings.inst) {
            LocalSettings.inst = new LocalSettings();
        }
        return LocalSettings.inst;
    }
    
    public DisableEffects : boolean = false;
}