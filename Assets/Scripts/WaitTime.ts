import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class WaitTime {
    m_Stamp : number = 0;
    public Start()
    {
        this.m_Stamp = Time.time;
    }
    public End(time : number) : boolean
    {
        if(Time.time - this.m_Stamp > time)
        {
            this.m_Stamp = Time.time;
            return true;
        }
        return false;
    }
}