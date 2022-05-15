namespace ModTheSpire.Event.Ids
{
    public class PreModifyBlockMessage : IEventHandle
    {
        public int Amount;

        public PreModifyBlockMessage(int amount)
        {
            Amount = amount;
        }
    }
}