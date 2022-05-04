import { Time, Vector2Int } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent';
import RemoconData from './Data/RemoconData';

export default class RemoconPanel_DirButton extends ZepetoScriptBehaviour {
    public m_DirX : number;
    public m_DirY : number;
    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            RemoconData.m_Dir.x = this.m_DirX;
            RemoconData.m_Dir.y = this.m_DirY;
            RemoconData.m_InputDirty = Time.time;
        });
    }

}