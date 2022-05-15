using Core.Utils;
using Core.Utils.Unity;
using FairyGUI;
using ModTheSpire.Dungeon;
using ModTheSpire.Effect;
using ModTheSpire.Effect.Other;
using ModTheSpire.ModTheSpire_SelectCharacter;
using ModTheSpire.Unit.Character;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.UI.ViewModel
{
    public class UI_SelectCharacter : UIBase<View_SelectCharacter>
    {
        private int AdvanceLevel;
        protected override void OnEnable(IUIParams p, bool refresh)
        {
            base.OnEnable(p, refresh);
            var selectGameMode = UIKit.Inst.Find<UI_SelectGameMode>();
            if (selectGameMode != null)
            {
                selectGameMode.CloseMySelf();
            }

            this.InitUI();
            this.InitPlayerList();
            InitAdvanceSeetings();
        }

        void InitUI()
        {
            View.Cancel.onClick.Add(() =>
            {
                UIKit.Inst.Create<UI_SelectGameMode>();
                this.CloseMySelf();
            });
        }

        void InitAdvanceSeetings()
        {
            AdvanceLevel = 1;
            View.Left.data = View.Right.data = this;
            View.Left.onClick.Add(t1=>
            {
                var selectCharacter = (UI_SelectCharacter)((GObject)t1.sender).data;
                selectCharacter.AdvanceLevel = Mathf.Max(1, selectCharacter.AdvanceLevel - 1);
                selectCharacter.View.Level.text = string.Format(LocalizationProperty.Read("进阶等级"), selectCharacter.AdvanceLevel);
                selectCharacter.View.AdvanceTip.text = LocalizationProperty.Read("进阶" + selectCharacter.AdvanceLevel + "描述");
            });
            View.Right.onClick.Add(t1=>
            {
                var selectCharacter = (UI_SelectCharacter)((GObject)t1.sender).data;
                selectCharacter.AdvanceLevel = Mathf.Min(20, selectCharacter.AdvanceLevel + 1);
                selectCharacter.View.Level.text = string.Format(LocalizationProperty.Read("进阶等级"), selectCharacter.AdvanceLevel);
                selectCharacter.View.AdvanceTip.text = LocalizationProperty.Read("进阶" + selectCharacter.AdvanceLevel + "描述");
            });
            View.Level.text = string.Format(LocalizationProperty.Read("进阶等级"), AdvanceLevel);
            View.AdvanceTip.text = LocalizationProperty.Read("进阶" + AdvanceLevel + "描述");
        }

        void InitPlayerList()
        {
            foreach (var node in PlayableCharacterManager.mAllPlayers)
            {
                var item = View.CharList.AddItemFromPool().asButton;
                item.icon = node.CharSelectButton;
                item.data = node;
                item.onClick.Add(t1 =>
                {
                    var playerInfo = (IPlayerInfo)((GObject)t1.sender).data;
                    View.SelectCharTitle.visible = false;
                    View.CharBg.visible = true;
                    View.AdvanceSettings.visible = true;
                    View.CharBg.icon = playerInfo.Portrait;
                    View.CharDesc.text = playerInfo.Description;
                    View.CharName.text = playerInfo.Name;
                    View.CharGroup.visible = true;
                    View.Health.SetVar("Health", playerInfo.Health.ZeroGCString()).FlushVars();
                    View.Gold.SetVar("Gold", playerInfo.Gold.ZeroGCString()).FlushVars();
                    if (playerInfo.InitRelic.Length > 0)
                    {
                        var relic = playerInfo.InitRelic[0];
                        View.Relic.url = relic.Icon;
                        View.RelicName.text = relic.Name;
                        View.RelicDesc.text = relic.Desc;
                    }

                    View.Confirm.visible = true;
                    View.Confirm.GetTransition("Enter").Play();
                    View.Confirm.onClick.Set(() =>
                    {
                        this.View.touchable = false;
                        View.Confirm.GetTransition("Enter").PlayReverse();
                        var fadeScreenEffect = new FadeScreenEffect(true, () =>
                        {
                            this.CloseMySelf();
                            UIKit.Inst.Destroy<UI_SelectGameMode>();
                            UIKit.Inst.Destroy<UI_Title>();
                            DungeonManager.NewGame(
                                playerInfo,
                                Mathf.Floor(Random.Range(-50000000, 50000001)).ToString()
                            );
                            DungeonManager.Inst.AdvanceLevel = this.AdvanceLevel;
                            UIKit.Inst.Create<UI_TopBar>();
                            UIKit.Inst.Create<UI_BottomScene>();
                            UIKit.Inst.Create<UI_DungeonTransition>(
                                new UI_DungeonTransition.UI_DungeonTransitionParams(LocalizationProperty.Read("第一阶段"),
                                    LocalizationProperty.Read("塔底")));
                        });
                    });
                    int rand = Random.Range(0, 2);
                    CameraUtils.Shake(ShakeVibrato.MED, ShakeDur.SHORT, new Vector3(rand == 0 ? 0.1f : 0, rand == 1 ? 0.1f : 0));
                });
            }
        }
    }
}