namespace ModTheSpire.Room
{
    public class RoomPhase
    {
        public static RoomPhase Combat = new RoomPhase("Combat");
        public static RoomPhase Event = new RoomPhase("Event");
        public static RoomPhase Complete = new RoomPhase("Complete");
        public static RoomPhase InComplete = new RoomPhase("InComplete");
            
        public string Key { get; }

        public RoomPhase(string key)
        {
            Key = key;
        }
    }
}