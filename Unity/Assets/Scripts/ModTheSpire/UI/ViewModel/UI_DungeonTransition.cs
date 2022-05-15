using ModTheSpire.ModTheSpire_Combat;

namespace ModTheSpire.UI.ViewModel
{
    public class UI_DungeonTransition : UIBase<View_DungeonTransition>
    {
        public class UI_DungeonTransitionParams : IUIParams
        {
            public string StageText;
            public string SceneText;

            public UI_DungeonTransitionParams(string stageText, string sceneText)
            {
                StageText = stageText;
                SceneText = sceneText;
            }
        }
        
        protected override void OnInit(IUIParams p)
        {
            base.OnInit(p);
            var args = p as UI_DungeonTransitionParams;
            var color = View.Scene.strokeColor;
            color.a = 0.33f;
            View.Scene.strokeColor = color;
            color = View.Stage.strokeColor;
            color.a = 0.5f;
            View.Stage.strokeColor = color;
            if (args != null)
            {
                View.Stage.text = args.StageText;
                View.Scene.text = args.SceneText;
            }
        }
    }
}