using ModTheSpire.ModTheSpire_MainMenuPanel;
using ModTheSpire.ModTheSpire_SelectCharacter;
using TCG.Config;

namespace ModTheSpire.UI.ViewModel
{
    
    public class UI_SelectGameMode : UIBase<View_MainMenuPanel>
    {
        protected override void OnInit(IUIParams p)
        {
            base.OnInit(p);
            InitList();
        
            View.Cancel.onClick.Add(()=>
            {
                View.Close.Play(1, 0, this.CloseMySelf);
                UIKit.Inst.Find<UI_Title>()?.View.MainMenuEnter.Play(1,0.125f,null);
            });
        }

        void InitList()
        {
            var item = View.List.AddItemFromPool().asCom;
            item.icon = "ui://ModTheSpire_MainMenuPanel/standard";
            item.text = LocalizationProperty.Read("标准模式");
            item.GetChild("description").asTextField.text = LocalizationProperty.Read("标准模式描述"); 
            item.onClick.Add(()=>{
                UIKit.Inst.Create<UI_SelectCharacter>();
            });
            item.GetController("Style").selectedPage = "0";
            //item.GetTransition("Enter").Play(1,Random)
        
            item = View.List.AddItemFromPool().asCom;
            item.icon = "ui://ModTheSpire_MainMenuPanel/daily";
            item.text = LocalizationProperty.Read("每日挑战");
            item.GetChild("description").asTextField.text = LocalizationProperty.Read("每日挑战描述");
            item.GetController("Style").selectedPage = "1";
        
            item = View.List.AddItemFromPool().asCom;
            item.icon = "ui://ModTheSpire_MainMenuPanel/loop";
            item.text = LocalizationProperty.Read("自定模式");
            item.GetChild("description").asTextField.text = LocalizationProperty.Read("自定模式描述");
            item.GetController("Style").selectedPage = "2";
        }
    }
}