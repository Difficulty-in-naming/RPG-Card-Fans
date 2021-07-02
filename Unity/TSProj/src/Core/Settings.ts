import SaveHelper from "./Utils/SaveHelper";

export default class Settings{
    public Language : string = "Chinese";
    public Resolution : string = "1280x800";
    public Frame : number = 60;
    public FullScreen : boolean = false;
    public BorderlessFullScreen : boolean = false;
    public ScreenShake : boolean = true;
    public Vsync : boolean = true;
    public MainVolume : number = 50;
    public SoundVolume : number = 100;
    public MusicVolume : number = 100;
    public MuteWhenBackgroundIsRunning : boolean = true;

    private static inst: Settings;
    public static Inst(): Settings {
        if (!Settings.inst) {
            Settings.inst = new Settings();
        }
        return Settings.inst;
    }
    
    private constructor() 
    {
        let temp = SaveHelper.Load("Settings.json");
        if(temp)
            Settings.inst = temp; 
    }
}