import { Canvas } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DoorLockData from './Data/DoorLockData'

export default class DoorLockPanel extends ZepetoScriptBehaviour {
    m_Canvas : Canvas;
    Start() {    
        this.m_Canvas = this.GetComponent<Canvas>();
    }
    Update()
    {
        if(DoorLockData.m_Password.length >= DoorLockData.m_PasswordLimit)
        {
            DoorLockData.m_InputDone = true;
            this.m_Canvas.enabled = false;
        }
    }
}