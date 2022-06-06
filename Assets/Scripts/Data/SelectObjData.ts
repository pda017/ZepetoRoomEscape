import { Vector3, Vector3Int } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SelectObjData {
    public static m_ObjPos : Vector3 = Vector3.zero;
    public static m_canSelect : boolean = false;
    public static m_ButtonHeightPer : number = 0;
    public static Init()
    {
        this.m_canSelect = false;
    }
}