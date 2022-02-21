import { FairyGUI, ResourcesManager, UnityEngine } from "csharp";
import { Vector2 } from "../../../../../Core/Define/Vector2";
import { Mathf } from "../../../../../Core/Module/Math/Mathf";
import { TimeKit } from "../../../../../Core/Utils/TimeKit";
import AbstractCard, {  CardRarity, CardTarget } from "../../Cards/AbstractCard";
import Strike from "../../Cards/Ironclad/Attack/Strike";
import { Defend } from "../../Cards/Ironclad/Skill/Defend";
import Color from "../../DataDefine/Color";
import DungeonManager from "../../DungeonManager";
import { GameSettings } from "../../Game/GameSettings";
import { LocalizationProperty } from "../../Gen/DB/Localization";
import { View_Card } from "../../Gen/View/ModTheSpire_Combat";
import { View_CardTrailEffect } from "../../Gen/View/ModTheSpire_Effect";
import { InputHelper } from "../../Helpers/InputHelper";
import { CombatRoom } from "../../Room/CombatRoom";
import UIHelper from "../UIHelper";
import { UI_Combat } from "./UI_Combat";
class CardLayoutInfo{
    constructor(public X : number,public Y:number = 0,public Rot : number = 0,public Scale:number=1){
    }
}

class HandCardInfo{
    constructor(public LayoutInfo : CardLayoutInfo,public Card : AbstractCard){
    }
}
export class UI_CombatHandLayout{
    private mReticleArrow = new Array<FairyGUI.GLoader>();
    private mHandCard = new Array<FairyGUI.GComponent>();
    private HandCardNumber : number = 0;
    private DragCard : FairyGUI.GObject;
    private NeedSelectTargetCard : FairyGUI.GObject;
    private Room : CombatRoom;
    constructor(private combat : UI_Combat){
        //Todo 测试代码
        this.Room = <CombatRoom>DungeonManager.Inst.CurrentRoom;
        this.Room.HandPile.push(new Strike());
        this.Room.HandPile.push(new Strike());
        this.Room.HandPile.push(new Strike());
        this.Room.HandPile.push(new Defend());
        this.Room.HandPile.push(new Defend());
        for(let i = 0;i<19;i++){
            let loader = new FairyGUI.GLoader();
            loader.url = "ui://ModTheSpire_Combat/reticleBlock";
            this.combat.View.AddChild(loader);
            loader.sortingOrder = 1;
            loader.visible = false;
            loader.autoSize = true;
            loader.SetPivot(0.5,1,true);
            this.mReticleArrow.push(loader)
        }
        let loader = new FairyGUI.GLoader();
        loader.url = "ui://ModTheSpire_Combat/reticleArrow";
        this.combat.View.AddChild(loader);
        loader.sortingOrder = 1;
        loader.visible = false;
        loader.autoSize = true;
        loader.SetPivot(0.5,1,true)
        this.mReticleArrow.push(loader)
    }
    GetHandLayout(num : number) : Array<CardLayoutInfo>{
        let array = new Array<CardLayoutInfo>();
        let angleRange = 50 - (10 - num) * 5;
        let incrementAngle = angleRange / num;
        const cardWidth = 400 / 2;
        switch(num){
            case 0 : break;
            case 1 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2)); 
                break;
            }
            case 2 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 0.47));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 0.53));
                break;
            }
            case 3 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 0.9,20));
                array.push(new CardLayoutInfo(this.combat.View.width / 2));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 0.9,20));
                break;
            }
            case 4 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 1.36));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 0.46,-10));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 0.46,-10));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 1.36));
                break;
            }
            case 5 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 1.7,25));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 0.9));
                array.push(new CardLayoutInfo(this.combat.View.width / 2,-10));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 0.9));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 1.7,25));
                break;
            }
            case 6 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 2.1,10));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 1.3));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 0.43));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 0.43));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 1.3));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 2.1,10));
                break;
            }
            case 7 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 2.4,25));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 1.7,18));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 0.9));
                array.push(new CardLayoutInfo(this.combat.View.width / 2,-6));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 0.9,));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 1.7,18));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 2.4,25));
                break;
            }
            case 8 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 2.5));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 1.82,10));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 1.1));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 0.38));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 0.38));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 1.1));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 1.82,10));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 2.5));
                break;
            }
            case 9 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 2.8));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 2.2,22));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 1.53,18));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 0.8,12));
                array.push(new CardLayoutInfo(this.combat.View.width / 2));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 0.8,12));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 1.53,18));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 2.2,22));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 2.8));
                break;
            }
            case 10 : {
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 2.9));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 2.4,20));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 1.8,17));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 1.1,12));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 - cardWidth * 0.4,5));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 0.4,5));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 1.1,12));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 1.8,17));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 2.4,20));
                array.push(new CardLayoutInfo(this.combat.View.width / 2 + cardWidth * 2.9));
                break;
            }
        }
        let middle = num / 2;
        for(let i = 0 ;i< num;i++){
            array[i].Rot = -(angleRange / 2 - incrementAngle * i - incrementAngle / 2);
            if(num == 8){
                array[i].Scale = 0.9625;
            }
            else if(num ==9){
                array[i].Scale = 0.925;
            }
            else if(num == 10){
                array[i].Scale = 0.888;
            }
        }
        return array;
    }

    public Render(){
        if(GameSettings.ShowCardHotKeys){
        }
        let combatRoom = <CombatRoom>DungeonManager.Inst.CurrentRoom;
        let num = combatRoom.HandPile.length;
        let arr = this.GetHandLayout(num);
        for(let i = 0;i<num;i++){
            var cardInfo = combatRoom.HandPile[i];
            var instance = View_Card.CreateInstance().asCom;
            instance.SetPivot(0.5,1,true);
            this.combat.View.AddChild(instance);
            instance.y = this.combat.View.height + 80;
            instance.rotation = 50;
            this.mHandCard.push(<FairyGUI.GComponent>instance);
            instance.TweenMoveX(arr[i].X,0.6);
            instance.TweenScale(new UnityEngine.Vector2(arr[i].Scale,arr[i].Scale),0.6);
            instance.TweenMoveY(this.combat.View.height + 80 + arr[i].Y,0.6);
            instance.TweenRotate(arr[i].Rot,0.6);
            instance.data = new HandCardInfo(arr[i],cardInfo);
            instance.draggable = true;
            let graph = instance.GetChild("TrailHolder").asGraph;
            let trailWrapper = new FairyGUI.GoWrapper();
            let obj = <UnityEngine.GameObject>UnityEngine.Object.Instantiate(UnityEngine.Resources.Load("Trail"));
            console.log(obj)
            trailWrapper.SetWrapTarget(obj,false);
            graph.SetNativeObject(trailWrapper);
            let main = instance.GetChild("Main").asCom;
            let pageName="skill";
            if(main.GetController("c1").HasPage(cardInfo.Type)){
                pageName = cardInfo.Type;
            }
            main.GetController("c1").selectedPage = pageName;
            console.log(cardInfo.Icon)
            main.GetChild("Bg").icon = "ui://ModTheSpire_Common/bg_" + pageName + "_" + cardInfo.Color;
            main.GetChild("icon").icon = cardInfo.Icon;
            main.GetChild("icon").asLoader.texture.nativeTexture.wrapMode = UnityEngine.TextureWrapMode.Clamp;
            if(cardInfo.Rarity == CardRarity.UNCOMMON || cardInfo.Rarity == CardRarity.RARE){
                main.GetChild("Banner").icon = "ui://ModTheSpire_Common/banner_" + cardInfo.Rarity;
            }
            else{
                main.GetChild("Banner").icon = "ui://ModTheSpire_Common/banner_common";
            }
            main.GetChild("Orb").icon = "ui://ModTheSpire_Common/card_" + cardInfo.Color + "_orb";
            main.GetChild("Energy").text = cardInfo.Energy.toString();
            main.GetChild("Type").text = LocalizationProperty.Read(cardInfo.Type);
            main.GetChild("Desc").text = cardInfo.GetDesc();
            main.GetChild("Name").text = LocalizationProperty.Read(cardInfo.Name);

            if(cardInfo.DisplayOrb == false){
                main.GetChild("Orb").visible = false;
                main.GetChild("Energy").text = "";
            }
            else{
                main.GetChild("Orb").visible = true;
            }

            let i1 = i;
            instance.onRollOver.Add((evt)=>{
                let obj = <FairyGUI.GObject>evt.sender;
                if(this.DragCard != null){
                    return;
                }
                FairyGUI.GTween.Kill(obj,FairyGUI.TweenPropType.Y,false);
                FairyGUI.GTween.Kill(obj,FairyGUI.TweenPropType.Scale,false);
                obj.SetScale(1.28,1.28);
                obj.rotation = 0;
                obj.y = this.combat.View.height;
                this.combat.View.AddChild(obj);
                this.HoverCard(i1);
            });
            instance.onRollOut.Add((evt)=>{
                let obj = <FairyGUI.GObject>evt.sender;
                if(this.DragCard != null){
                    return;
                }
                this.RevertLayout(obj, arr[i]);
            });
            instance.onDragMove.Add((evt)=>{
                let obj = <FairyGUI.GObject>evt.sender;
                this.DragCard = obj;
                FairyGUI.GTween.Kill(obj);
                obj.rotation = 0;
                let info = <HandCardInfo> obj.data;
                if(Mathf.Abs(obj.x - info.LayoutInfo.X) > 100 || Mathf.Abs(obj.y - info.LayoutInfo.Y)){
                    if(info.Card.Target == CardTarget.ENEMY){
                        this.NeedSelectTargetCard = obj;
                        this.NeedSelectTargetCard.draggable = false;
                        FairyGUI.GTween.Kill(obj);
                        obj.TweenScale(new UnityEngine.Vector2(1.18,1.18),0.6);
                        obj.TweenMoveX(this.combat.View.width / 2,0.6);
                        obj.TweenMoveY(this.combat.View.height + 80,0.6);
                    }
                }
            });
            instance.onDragEnd.Add((evt)=>{
                this.DragCard = null;
            });
        }
    }

    private RevertLayout(obj: FairyGUI.GObject, info: CardLayoutInfo) {
        console.log("Revert");
        FairyGUI.GTween.Kill(obj, FairyGUI.TweenPropType.Scale, false);
        FairyGUI.GTween.Kill(obj, FairyGUI.TweenPropType.Rotation, false);
        FairyGUI.GTween.Kill(obj, FairyGUI.TweenPropType.Y, false);
        obj.TweenScale(new UnityEngine.Vector2(info.Scale, info.Scale), 0.6);
        obj.TweenRotate(info.Rot, 0.6);
        obj.TweenMoveY(this.combat.View.height + 80 + info.Y, 0.6);
        let arr = this.GetHandLayout(this.Room.HandPile.length);
        //重新排序
        for (let j = 0; j < this.mHandCard.length; j++) {
            this.combat.View.AddChild(this.mHandCard[j]);
            this.mHandCard[j].TweenMoveX(arr[j].X, 0.6);
        }
    }

    private HoverCard(i1: number) {
        let pushAmt = 0.4;
        if (this.HandCardNumber == 2) {
            pushAmt = 0.2;
        }
        else if (this.HandCardNumber == 3 || this.HandCardNumber == 4) {
            pushAmt = 0.27;
        }
        for (let j = i1 - 1; j >= 0; j--) {
            FairyGUI.GTween.Kill(this.mHandCard[j],FairyGUI.TweenPropType.X,true);
            let info = <HandCardInfo>this.mHandCard[j].data
            this.mHandCard[j].TweenMoveX(info.LayoutInfo.X - pushAmt * 200,0.6);
            pushAmt *= 0.25;
        }
        pushAmt = 0.4;
        if (this.HandCardNumber == 2) {
            pushAmt = 0.2;
        }
        else if (this.HandCardNumber == 3 || this.HandCardNumber == 4) {
            pushAmt = 0.27;
        }
        for (let j = i1 + 1; j < this.mHandCard.length; j++) {
            let info = <HandCardInfo>this.mHandCard[j].data;
            FairyGUI.GTween.Kill(this.mHandCard[j],FairyGUI.TweenPropType.X,true);
            this.mHandCard[j].TweenMoveX(info.LayoutInfo.X + pushAmt * 200,0.6);
            pushAmt *= 0.25;
        }
    }

    private DiscardPile(){
        for(let i = 0;i<this.mHandCard.length;i++){
            let card = this.mHandCard[i]
            //card.
        }
    }

    private PlayedPile(){

    }

    public Update(){
        if(this.NeedSelectTargetCard){
            let mousePosition = InputHelper.MouseUIPoistion;
            let startPoint = new Vector2(this.NeedSelectTargetCard.x,this.NeedSelectTargetCard.y - 200);
            let controlPoint = new Vector2(this.NeedSelectTargetCard.x - (mousePosition.X - this.NeedSelectTargetCard.x) / 4,mousePosition.Y + (mousePosition.Y - this.NeedSelectTargetCard.y - 200) / 2);
            let endPoint = mousePosition;
            console.log(startPoint.toString(),controlPoint.toString(),endPoint.toString())
            let arr = new Array<Vector2>();
            for(let i = 0;i<20;i++){
                this.mReticleArrow[i].visible = true;
                arr.push(Mathf.CalculateQuadraticCurve2D(startPoint,controlPoint,endPoint, i / 20));
            }
            for(let i = 0;i<20;i++){
                let dir;
                if(i == 19){
                    dir = new Vector2(mousePosition.X - arr[i].X,mousePosition.Y - arr[i].Y);
                }
                else{
                    dir = new Vector2(arr[i + 1].X - arr[i].X,arr[i + 1].Y - arr[i].Y);
                }
                let rot_z = Mathf.Atan2(dir.Y, dir.X) * Mathf.Rad2Deg;
                    this.mReticleArrow[i].SetXY(arr[i].X,arr[i].Y);
                this.mReticleArrow[i].rotation = rot_z + 90;
            }
        }

        if(InputHelper.GetMouseButtonUp(1)){
            this.DragCard = null;
            if(this.NeedSelectTargetCard != null)
            {
                this.RevertLayout(this.NeedSelectTargetCard,(<HandCardInfo>this.NeedSelectTargetCard.data).LayoutInfo);
                this.NeedSelectTargetCard.draggable = true;
                this.NeedSelectTargetCard = null;
                for(let i = 0;i<20;i++){
                    this.mReticleArrow[i].visible = false;
                }
            }
        }
    }
}