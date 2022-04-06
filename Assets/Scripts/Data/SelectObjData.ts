import { Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SelectObjData {
    public static m_ObjPos : Vector3;
    public static m_canSelect : boolean;
    public static m_ButtonHeightPer : number = 10;
    public static Init()
    {
        this.m_canSelect = false;
    }
}