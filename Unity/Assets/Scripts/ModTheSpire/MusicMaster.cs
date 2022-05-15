namespace ModTheSpire
{
    public class MusicMaster
    {
        public static MusicMaster SHOP_BGM= new MusicMaster("Audio/music/STS_Merchant_NewMix_v1.ogg");
        public static MusicMaster SHRINE_BGM= new MusicMaster("Audio/music/STS_Merchant_NewMix_v1.ogg");
        public static MusicMaster MINDBLOOM_BGM= new MusicMaster("Audio/music/STS_Shrine_NewMix_v1.ogg");
        public static MusicMaster LEVEL_1_BOSS_BGM= new MusicMaster("Audio/music/STS_Boss1MindBloom_v1.ogg");
        public static MusicMaster LEVEL_2_BOSS_BGM= new MusicMaster("Audio/music/STS_Boss2MindBloom_v1.ogg");
        public static MusicMaster LEVEL_3_BOSS_BGM= new MusicMaster("Audio/music/STS_Boss3MindBloom_v1.ogg");
        public static MusicMaster LEVEL_4_BOSS_BGM= new MusicMaster("Audio/music/STS_Boss4_v6.ogg");
        public static MusicMaster ELITE_BGM= new MusicMaster("Audio/music/STS_EliteBoss_NewMix_v1.ogg");
        public static MusicMaster CREDITS= new MusicMaster("Audio/music/STS_Credits_v5.ogg");
            
        public string Key { get; }

        public MusicMaster(string key)
        {
            Key = key;
        }


        public static void Play(MusicMaster key)
        {
            MediaManager.PlayMusic(key.Key, true);
        }
    
        public static void Silence(){
        
        }
    
        public static void FadeOut(){
        
        }
    }
}