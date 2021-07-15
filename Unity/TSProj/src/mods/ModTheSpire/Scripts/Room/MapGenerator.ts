import {MapRoomNode, RoomType} from "mods/ModTheSpire/Scripts/Room/MapRoomNode";
import DungeonManager from "mods/ModTheSpire/Scripts/DungeonManager";
import {Mathf} from "Core/Module/Math/Mathf";

export class MapGenerator{
    //地图的宽和地图的高,和地图路径密度,密度越大.生成的路径越多
    public static Generate(width:number,height:number,pathDensity:number) : Array<Array<MapRoomNode>>{
        let map = this.InitNodes(width,height);
        this.CreatePaths(map,pathDensity);
        this.FilterPaths(map);
        this.AssignRoomType(map);
        return map;
    }
    
    //我们首先根据设定的地图宽高创建出所有的点.以方便接下来我们处理各个点的连接
    private static InitNodes(width:number,height:number) : Array<Array<MapRoomNode>>{
        let map = new Array<Array<MapRoomNode>>();
        for (let y = 0; y < height; y++) {
            let row = new Array<MapRoomNode>();
            for(let x = 0; x< width; x++){
                row.push(new MapRoomNode(x,y));
            }
            map.push(row);
        }
        return map;
    }
    
    private static FilterPaths(map : Array<Array<MapRoomNode>>){
        map.forEach((t1,index)=>map[index] = t1.filter((t2)=>t2.Next.length != 0 || t2.Prev.length != 0));
    }
    
    //创建节点之间的连接
    //每个阶段先随机节点选取.再以此选择下一阶段的三个节点
    //  Y   Y   Y
    //      Y
    //然后对这三个节点进行随机.每随机一次路线的成功连接率提高30%,初始为{pathDensity}的概率,最后一个节点必定连接成功
    //(第一层)随机选取2-4个节点.(如果列表不足则只选一个)
    private static CreatePaths(map : Array<Array<MapRoomNode>>,pathDensity : number){
        let rng = DungeonManager.Inst.CurrentDungeon.Rng;
        let stage = map[0];
        let fixed = this.GetFixedSizeArray(stage.length);
        let count = Mathf.Clamp(Mathf.RandomRange(2,4,rng),1,stage.length);
        for(let i = 0;i<fixed.length && count > 0;i++){
            let index = Mathf.Floor(Mathf.RandomRange(0,fixed.length,rng));
            if(this.Connect(map,stage[fixed[index]],true)){
                count--;
                fixed = fixed.filter((t1)=>t1 != fixed[index]);
            }
        }
        for(let y = 1;y<map.length;y++) {
            stage = map[y];
            for (let x = 0; x < stage.length; x++) {
                if(stage[x].Prev.length > 0){
                    this.Connect(map,stage[x],true);
                }
            }
        }
    }
    
    private static Connect(map : Array<Array<MapRoomNode>>,node : MapRoomNode,mustPass :boolean) : boolean{
        let rng = DungeonManager.Inst.CurrentDungeon.Rng;
        let nextStage = map[node.Y + 1];
        let successRate = 0.1;
        let pass = false;
        if(nextStage){
            let connectNodes = new Array<MapRoomNode>();
            for(let i = -1;i<=1;i++){
                let findNode = nextStage[node.X + i];
                if(findNode)
                    connectNodes.push(findNode);
            }
            //避免交叉路线.我们要判断我们正上方的节点也就是0节点左边或者右边是否有连接
            let prev = nextStage[node.X].Prev;
            for(let i = 0;i<prev.length;i++){
                if(prev[i].X >= node.X){//删除所有左边的节点
                    connectNodes = connectNodes.filter((t1)=>t1.X <= node.X);
                }
                if(prev[i].X <= node.X){
                    connectNodes = connectNodes.filter((t1)=>t1.X >= node.X);
                }
            }
            for(let i = connectNodes.length - 1;i >= 0;i--){
                let index = Mathf.Floor(Mathf.RandomRange(0,connectNodes.length,rng));
                let isSuccess = 0;
                if(mustPass && i == 0)
                    isSuccess = 0;
                else
                    isSuccess = Mathf.Random(rng);
                if(isSuccess < successRate){
                    node.Connect(connectNodes[index]);
                    pass = true;
                }
                successRate += 0.1;
                connectNodes = connectNodes.filter((t1)=>t1 != connectNodes[index]);
            }
        }
        return pass;
    }

    private static GetFixedSizeArray(width:number):Array<number>{
        let numbers = new Array<number>();
        for (let i = 0; i < width; i++) {
            numbers.push(i);
        }
        return numbers;
    }
    
    private static AssignRoomType(map : Array<Array<MapRoomNode>>){
        let restCount = 2;
        let eliteCount = 2;
        let shopCount = 2;
        for(let x = 0;x<map[0].length;x++){
            let next = map[0][x];
            this.IterationAssignRoomType(next,restCount,eliteCount,shopCount);
        }
    }
    
    private static IterationAssignRoomType(node : MapRoomNode,restCount:number,eliteCount:number,shopCount:number)
    {
        let rng = DungeonManager.Inst.CurrentDungeon.Rng;
        let type = Mathf.Random(rng);
        if(node.Y == 6){
            node.RoomType = RoomType.CHEST;
        }
        else if(node.Y == 14){
            node.RoomType = RoomType.REST;
        }
        else if(node.Y == 0){
            node.RoomType = RoomType.MONSTER;
        }
        else {
            if(type > 0.85){
                node.RoomType = RoomType.EVENT;
            }
            else if(node.Y >= 5){
                if(type > 0.8 && eliteCount > 0){
                    eliteCount --;
                    node.RoomType = RoomType.ELITE;
                }
                else if(type > 0.7 && restCount > 0){
                    restCount --;
                    node.RoomType = RoomType.REST;
                }
                else if(type > 0.6 && shopCount >0){
                    shopCount --;
                    node.RoomType = RoomType.SHOP;
                }
            }
        }
        node.Next.forEach(t1=>{
            this.IterationAssignRoomType(t1,restCount,eliteCount,shopCount);
        })
    }
}