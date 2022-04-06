import { Camera } from 'UnityEngine'
import { ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class GetZepetoCam {
    public static m_Cam : Camera = null;
    public static Get() : Camera
    {
        if(this.m_Cam === null)
        {
            var zpInst = ZepetoPlayers.instance;
            if(zpInst !== null)
            {
                this.m_Cam = zpInst.GetComponentInChildren<Camera>();
            }
        }
        return this.m_Cam;
    }
}