import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {Vector3 ,Quaternion} from 'UnityEngine'
export default class StartPointData {
    public static m_StartPointList : StartPointInfo[];
    public static Init()
    {
        this.m_StartPointList = [];
    }
}

export class StartPointInfo
{
    public m_Pos : Vector3;
    public m_Rot : Quaternion;
}