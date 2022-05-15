using Core.Utils;
using ModTheSpire.Dungeon;
using ModTheSpire.ModTheSpire_TopBar;
using ModTheSpire.Unit.Character;

namespace ModTheSpire.UI.ViewModel
{
    public class UI_TopBar : UIBase<View_TopBar>
    {
        private IPlayerInfo CharacterInfo;
        private AbstractPlayer Player;
        protected override void OnInit(IUIParams p)
        {
            base.OnInit(p);
            this.Player = DungeonManager.Inst.Player;
            this.CharacterInfo = this.Player.PlayerInfo;
            View.ClassName.text = this.CharacterInfo.Name;
            if(DungeonManager.Inst.AdvanceLevel > 0){
                View.Advance.visible = true;
                View.AdvanceLevel.text = DungeonManager.Inst.AdvanceLevel.ZeroGCString();
            }

            View.Deck.asButton.onClick.Set(() =>
            {
                var view = UIKit.Inst.Find<UI_MasterDeckView>();
                if (view != null)
                    view.CloseMySelf();
                else
                    UIKit.Inst.Create<UI_MasterDeckView>();
            });
        }

        public override void Update()
        {
            base.Update();
            /*this.Health.GetChild("Health").asTextField.SetVar("Health",this.Player.Health + "/" + this.Player.MaxHealth).FlushVars();
this.Gold.GetChild("Gold").asTextField.SetVar("Gold",this.CharacterInfo.Gold.toString()).FlushVars();
this.PotionList.RemoveChildrenToPool(this.Player.PotionSlots,-1);
for (let i = 0; i < this.Player.PotionSlots; i++) {

}*/
        }
    }
}