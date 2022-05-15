using System.Collections.Generic;
using Core.Utils;
using Core.Utils.Math;
using DreamLib.Unity.UI.FairyGUIExtension;
using FairyGUI;
using ModTheSpire.Card;
using ModTheSpire.Dungeon;
using ModTheSpire.Room;
using TCG.Config;
using UnityEngine;

namespace ModTheSpire.UI.ViewModel
{
    
    public class CardLayoutInfo{
        public float X { get; set; }
        public float Y { get; set; }
        public float Rot { get; set; }
        public float Scale { get; set; }

        public CardLayoutInfo(float x, float y = 0, float rot = 0, float scale = 1)
        {
            X = x;
            Y = y;
            Rot = rot;
            Scale = scale;
        }
    }

    public class HandCardInfo
    {
        public CardLayoutInfo LayoutInfo;
        public AbstractCard Card;

        public HandCardInfo(CardLayoutInfo layoutInfo, AbstractCard card)
        {
            LayoutInfo = layoutInfo;
            Card = card;
        }
    }

    public class UI_CombatHandLayout
    {
        private List<GLoader> mReticleArrow = new();
        private List<GComponent> mHandCard = new();
        private int HandCardNumber = 0;
        private GObject DragCard;
        private GObject NeedSelectTargetCard;
        private CombatRoom Room;
        private UI_Combat Combat;
        public UI_CombatHandLayout(UI_Combat combat){
            Combat = combat;
        }
        public List<CardLayoutInfo> GetHandLayout(int num ){
            var array = new List<CardLayoutInfo>();
            var angleRange = 50 - (10 - num) * 5;
            var incrementAngle = angleRange / num;
            const float cardWidth  = 400 / 2f;
            switch (num)
            {
                case 0: break;
                case 1:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2));
                    break;
                }
                case 2:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 0.47f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 0.53f));
                    break;
                }
                case 3:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 0.9f, 20));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 0.9f, 20));
                    break;
                }
                case 4:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 1.36f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 0.46f, -10));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 0.46f, -10));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 1.36f));
                    break;
                }
                case 5:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 1.7f, 25));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 0.9f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2, -10));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 0.9f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 1.7f, 25));
                    break;
                }
                case 6:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 2.1f, 10));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 1.3f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 0.43f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 0.43f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 1.3f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 2.1f, 10));
                    break;
                }
                case 7:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 2.4f, 25));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 1.7f, 18));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 0.9f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2, -6));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 0.9f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 1.7f, 18));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 2.4f, 25));
                    break;
                }
                case 8:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 2.5f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 1.82f, 10));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 1.1f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 0.38f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 0.38f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 1.1f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 1.82f, 10));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 2.5f));
                    break;
                }
                case 9:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 2.8f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 2.2f, 22));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 1.53f, 18));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 0.8f, 12));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 0.8f, 12));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 1.53f, 18));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 2.2f, 22));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 2.8f));
                    break;
                }
                case 10:
                {
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 2.9f));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 2.4f, 20));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 1.8f, 17));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 1.1f, 12));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 - cardWidth * 0.4f, 5));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 0.4f, 5));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 1.1f, 12));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 1.8f, 17));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 2.4f, 20));
                    array.Add(new CardLayoutInfo(Combat.View.width / 2 + cardWidth * 2.9f));
                    break;
                }
            }

            var middle = num / 2;
            for (var i = 0; i < num; i++)
            {
                array[i].Rot = -(angleRange / 2 - incrementAngle * i - incrementAngle / 2);
                if (num == 8)
                {
                    array[i].Scale = 0.9625f;
                }
                else if (num == 9)
                {
                    array[i].Scale = 0.925f;
                }
                else if (num == 10)
                {
                    array[i].Scale = 0.888f;
                }
            }

            return array;
        }

        public void Render()
        {
            if (GameSettings.Inst.ShowCardHotKeys)
            {
            }

            CombatRoom combatRoom = (CombatRoom)DungeonManager.Inst.CurrentRoom;
            var num = combatRoom.HandPile.Count;
            var arr = this.GetHandLayout(num);
            for (var i = 0; i < num; i++)
            {
                var cardInfo = combatRoom.HandPile[i];
                var instance = cardInfo.View.GComponent;
                instance.SetPivot(0.5f, 1, true);
                Combat.View.AddChild(instance);
                instance.y = Combat.View.height + 80;
                instance.rotation = 50;
                this.mHandCard.Add(instance);
                instance.TweenMoveX(arr[i].X, 0.6f);
                instance.TweenScale(new UnityEngine.Vector2(arr[i].Scale, arr[i].Scale), 0.6f);
                instance.TweenMoveY(Combat.View.height + 80 + arr[i].Y, 0.6f);
                instance.TweenRotate(arr[i].Rot, 0.6f);
                instance.data = new HandCardInfo(arr[i], cardInfo);
                instance.draggable = true;
                var graph = instance.GetChild("TrailHolder").asGraph;
                var trailWrapper = new GoWrapper();
                var obj = (GameObject)Object.Instantiate(Resources.Load("Trail"));
                trailWrapper.SetWrapTarget(obj, false);
                graph.SetNativeObject(trailWrapper);
                var main = instance.GetChild("Main").asCom;
                var pageName = "skill";
                if (main.GetController("c1").HasPage(cardInfo.Type.Key))
                {
                    pageName = cardInfo.Type.Key;
                }

                main.GetController("c1").selectedPage = pageName;
                main.GetChild("Bg").icon = "ui://ModTheSpire_Common/bg_" + pageName + "_" + cardInfo.Color;
                main.GetChild("icon").icon = cardInfo.Icon;
                main.GetChild("icon").asLoader.texture.nativeTexture.wrapMode = UnityEngine.TextureWrapMode.Clamp;
                if (cardInfo.Rarity == CardRarity.UNCOMMON || cardInfo.Rarity == CardRarity.RARE)
                {
                    main.GetChild("Banner").icon = "ui://ModTheSpire_Common/banner_" + cardInfo.Rarity;
                }
                else
                {
                    main.GetChild("Banner").icon = "ui://ModTheSpire_Common/banner_common";
                }

                main.GetChild("Orb").icon = "ui://ModTheSpire_Common/card_" + cardInfo.Color + "_orb";
                main.GetChild("Energy").text = cardInfo.Energy.ZeroGCString();
                main.GetChild("Type").text = LocalizationProperty.Read(cardInfo.Type.Key);
                main.GetChild("Desc").text = cardInfo.GetDesc();
                main.GetChild("Name").text = LocalizationProperty.Read(cardInfo.Name);

                if (cardInfo.DisplayOrb == false)
                {
                    main.GetChild("Orb").visible = false;
                    main.GetChild("Energy").text = "";
                }
                else
                {
                    main.GetChild("Orb").visible = true;
                }

                var i1 = i;
                instance.onRollOver.Add((evt) =>
                {
                    var sender = (GObject) evt.sender;
                    if (this.DragCard != null)
                    {
                        return;
                    }

                    GTween.Kill(sender, TweenPropType.Y, false);
                    GTween.Kill(sender, TweenPropType.Scale, false);
                    sender.SetScale(1.28f, 1.28f);
                    sender.rotation = 0;
                    sender.y = Combat.View.height;
                    Combat.View.AddChild(sender);//等于是安插到了战斗UI的最后一个渲染位置上
                    HoverCard(i1);
                });
                var i2 = i;
                instance.onRollOut.Add((evt) =>
                {
                    var sender = (GObject)evt.sender;
                    if (this.DragCard != null)
                    {
                        return;
                    }

                    RevertLayout(sender, arr[i2]);
                });
                instance.onDragMove.Add((evt) =>
                {
                    var sender = (GObject)evt.sender;
                    DragCard = sender;
                    GTween.Kill(sender);
                    sender.rotation = 0;
                    var info = (HandCardInfo)sender.data;
                    if (Mathf.Abs(sender.x - info.LayoutInfo.X) > 100 || Mathf.Abs(sender.y - info.LayoutInfo.Y) > 100)
                    {
                        if (info.Card.Target == CardTarget.ENEMY)
                        {
                            this.NeedSelectTargetCard = sender;
                            this.NeedSelectTargetCard.draggable = false;
                            FairyGUI.GTween.Kill(sender);
                            sender.TweenScale(new UnityEngine.Vector2(1.18f, 1.18f), 0.6f);
                            sender.TweenMoveX(Combat.View.width / 2, 0.6f);
                            sender.TweenMoveY(Combat.View.height + 80, 0.6f);
                        }
                    }
                });
                instance.onDragEnd.Add((evt) => { this.DragCard = null; });
            }
        }

        private void RevertLayout(GObject obj, CardLayoutInfo info) {
            GTween.Kill(obj, TweenPropType.Scale, false);
            GTween.Kill(obj, TweenPropType.Rotation, false);
            GTween.Kill(obj, TweenPropType.Y, false);
            obj.TweenScale(new Vector2(info.Scale, info.Scale), 0.6f);
            obj.TweenRotate(info.Rot, 0.6f);
            obj.TweenMoveY(Combat.View.height + 80 + info.Y, 0.6f);
            var arr = this.GetHandLayout(this.Room.HandPile.Count);
            //重新排序
            for (var j = 0; j < this.mHandCard.Count; j++)
            {
                Combat.View.AddChild(this.mHandCard[j]);
                this.mHandCard[j].TweenMoveX(arr[j].X, 0.6f);
            }
        }

        private void HoverCard(int i1)
        {
            var pushAmt = 0.4f;
            if (this.HandCardNumber == 2)
            {
                pushAmt = 0.2f;
            }
            else if (this.HandCardNumber is 3 or 4)
            {
                pushAmt = 0.27f;
            }

            for (var j = i1 - 1; j >= 0; j--)
            {
                GTween.Kill(this.mHandCard[j], TweenPropType.X, true);
                var info = (HandCardInfo)this.mHandCard[j].data;
                this.mHandCard[j].TweenMoveX(info.LayoutInfo.X - pushAmt * 200, 0.6f);
                pushAmt *= 0.25f;
            }

            pushAmt = 0.4f;
            if (this.HandCardNumber == 2)
            {
                pushAmt = 0.2f;
            }
            else if (this.HandCardNumber == 3 || this.HandCardNumber == 4)
            {
                pushAmt = 0.27f;
            }

            for (var j = i1 + 1; j < this.mHandCard.Count; j++)
            {
                var info = (HandCardInfo) this.mHandCard[j].data;
                FairyGUI.GTween.Kill(this.mHandCard[j], FairyGUI.TweenPropType.X, true);
                this.mHandCard[j].TweenMoveX(info.LayoutInfo.X + pushAmt * 200, 0.6f);
                pushAmt *= 0.25f;
            }
        }

        private void DiscardPile()
        {
            for (var i = 0; i < this.mHandCard.Count; i++)
            {
                //var card = this.mHandCard[i]
                //card.
            }
        }

        private void PlayedPile()
        {

        }

        public void Update()
        {
            if (this.NeedSelectTargetCard != null)
            {
                var mousePosition = FairyGUIExtension.MousePosition;
                var startPoint = new Vector2(this.NeedSelectTargetCard.x, this.NeedSelectTargetCard.y - 200);
                var controlPoint = new Vector2(this.NeedSelectTargetCard.x - (mousePosition.x - this.NeedSelectTargetCard.x) / 4,
                    mousePosition.y + (mousePosition.y - this.NeedSelectTargetCard.y - 200) / 2);
                var endPoint = mousePosition;
                var arr = new List<Vector2>();
                for (var i = 0; i < 20; i++)
                {
                    this.mReticleArrow[i].visible = true;
                    arr.Add(BezierCurve.CalculateQuadraticCurve2D(startPoint, controlPoint, endPoint, i / 20f));
                }

                for (var i = 0; i < 20; i++)
                {
                    Vector2 dir;
                    if (i == 19)
                    {
                        dir = new Vector2(mousePosition.x - arr[i].x, mousePosition.y - arr[i].y);
                    }
                    else
                    {
                        dir = new Vector2(arr[i + 1].x - arr[i].x, arr[i + 1].y - arr[i].y);
                    }

                    var rot_z = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
                    this.mReticleArrow[i].SetXY(arr[i].x, arr[i].y);
                    this.mReticleArrow[i].rotation = rot_z + 90;
                }
            }

            if (Input.GetMouseButtonUp(1))
            {
                this.DragCard = null;
                if (this.NeedSelectTargetCard != null)
                {
                    this.RevertLayout(this.NeedSelectTargetCard, ((HandCardInfo)this.NeedSelectTargetCard.data).LayoutInfo);
                    this.NeedSelectTargetCard.draggable = true;
                    this.NeedSelectTargetCard = null;
                    for (var i = 0; i < 20; i++)
                    {
                        this.mReticleArrow[i].visible = false;
                    }
                }
            }
        }
    }
}