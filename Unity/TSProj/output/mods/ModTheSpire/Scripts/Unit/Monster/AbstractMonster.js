"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMonster = void 0;
const Mathf_1 = require("../../../../../Core/Module/Math/Mathf");
const tween_1 = require("../../../../../ThirdParty/@tweenjs/tween");
const DungeonManager_1 = require("../../DungeonManager");
const AbstractCreature_1 = require("../AbstractCreature");
class AbstractMonster extends AbstractCreature_1.default {
    Info;
    MoveName;
    Gold;
    MoveIndex;
    DeathTime;
    Intent;
    //行动历史
    MoveHistory = new Array();
    //伤害列表,不同难度填充的伤害内容不一样
    DamageInfo = new Array();
    constructor(Info) {
        super();
        this.Info = Info;
        this.DisplayObject = this.Info.Loader.Create();
        this.Initialize();
        this.RollMove();
    }
    //随机敌人的行为
    RollMove() {
        this.GetMove(Mathf_1.Mathf.Floor(Mathf_1.Mathf.RandomRange(0, 101, DungeonManager_1.default.Inst.CurrentDungeon.AIRng)));
    }
    //获取敌人的最后两次行为是否和传入的行为Index匹配
    LastTwoMoves(num) {
        let length = this.MoveHistory.length;
        if (length < 2)
            return false;
        return this.MoveHistory[length - 2] == num && this.MoveHistory[length - 1] == num;
    }
    //获取敌人的最后一次行为是否和传入的行为Index匹配
    LastMove(num) {
        let length = this.MoveHistory.length;
        if (length < 1)
            return false;
        return this.MoveHistory[length - 1] == num;
    }
    //设置敌人的下一次行动
    SetMove(moveIndex, intent, options) {
        this.MoveName = options.moveName;
        if (moveIndex != -1)
            this.MoveHistory.push(moveIndex);
        this.MoveIndex = moveIndex;
        this.Intent = intent;
    }
    //敌人死亡回调
    Die() { }
    ;
    Escape() {
        this.HealthComponent.Visible = false;
        this.IsEscaping = true;
        this.DisplayObject.FlipX = true;
        new tween_1.default.Tween({ x: this.X }).to({ x: this.X + 400 }).easing(tween_1.default.Easing.Linear.None).duration(3000).start().onComplete(() => {
            this.IsEscaped = true;
            if (DungeonManager_1.default.Inst.CurrentRoom.Monsters.AreMonstersBasicallyDead())
                DungeonManager_1.default.Inst.CurrentRoom.End();
        });
    }
    PreBattleAction(msg) { }
    ;
}
exports.AbstractMonster = AbstractMonster;
//# sourceMappingURL=AbstractMonster.js.map