namespace ModTheSpire.Event.Ids
{
    ///回合开始失去护盾
    public class AtEndOfTurnRemoveBlockMessage : IEventHandle
    {
        public int Block;

        public AtEndOfTurnRemoveBlockMessage(int block)
        {
            Block = block;
        }
    }
}