"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_tool_1 = require("../../../../ThirdParty/uuid-tool");
const DungeonManager_1 = require("../DungeonManager");
class AbstractRelic {
    //获得一份数值上完全一样的该类复制
    Clone(newUuid = true) {
        let serialize = JSON.stringify(this);
        if (newUuid)
            serialize["UUID"] = uuid_tool_1.UuidTool.newUuid();
        return JSON.parse(serialize);
    }
    //重新生成该类.并得到生成后的引用
    NewInstance() {
        return new this.constructor();
    }
    AddToBot(action) { DungeonManager_1.default.ActionManager.AddToBottom(action); }
    AddToTop(action) { DungeonManager_1.default.ActionManager.AddToTop(action); }
}
exports.default = AbstractRelic;
//# sourceMappingURL=AbstractRelic.js.map