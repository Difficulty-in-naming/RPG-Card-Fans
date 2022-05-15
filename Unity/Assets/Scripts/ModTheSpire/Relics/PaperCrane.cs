namespace ModTheSpire.Relics
{
    //TODO 未实现的遗物
    public class PaperCrane : AbstractRelic
    {
        public override string Id { get; }
        public override string Name { get; }
        public override string Icon { get; }
        public override string Desc { get; }
        public override string Flavor { get; }
        public override void OnObtain()
        {
            throw new System.NotImplementedException();
        }

        public override void OnLose()
        {
            throw new System.NotImplementedException();
        }
    }
}