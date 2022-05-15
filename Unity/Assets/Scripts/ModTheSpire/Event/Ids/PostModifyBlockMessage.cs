namespace ModTheSpire.Event.Ids
{
    ///修改防御
    public class PostModifyBlockMessage : IEventHandle
    {
        public int Amount;

        public PostModifyBlockMessage(int amount)
        {
            Amount = amount;
        }
    }
}