import Color from "./DataDefine/Color";
import {UnityEngine} from 'csharp';
export default class AbstractCreature{
    //正在死亡
    public IsDying : boolean;
    //已经死亡
    public IsDead: boolean;
    //着色
    public Tint : Color;
    public GameObject : UnityEngine.GameObject
    //private Renderer : UnityEngine.Renderer;
    
    public Update(){
    }
}