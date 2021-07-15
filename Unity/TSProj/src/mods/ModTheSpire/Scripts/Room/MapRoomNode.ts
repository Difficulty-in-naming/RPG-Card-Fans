export class MapRoomNode{
    public Next : Array<MapRoomNode> = new Array<MapRoomNode>();
    public Prev : Array<MapRoomNode> = new Array<MapRoomNode>();
    public RoomType : RoomType = RoomType.MONSTER;
    public constructor(public X : number,public Y : number) 
    {
    }
    
    public Connect(node : MapRoomNode){
        node.Prev.push(this);
        this.Next.push(node);
    }
}

export enum RoomType{
    MONSTER = "monster",
    EVENT = "event",
    CHEST = "chest",
    ELITE = "elite",
    REST = "rest",
    SHOP = "shop"
}