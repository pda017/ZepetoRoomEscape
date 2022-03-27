import { GameObject, Transform } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class GetStartPoint {
    static m_StartPoints : Transform = null;
    public static Init()
    {
        if(this.m_StartPoints === null)
        {
            var obj = GameObject.FindWithTag("StartPoints");
            this.m_StartPoints = obj.transform;
        }
    }
    public static Get(index : number) : Transform
    {
        this.Init();
        if(index < this.m_StartPoints.childCount)
        {
            return this.m_StartPoints.GetChild(index);
        } 
        return null;
    }
}