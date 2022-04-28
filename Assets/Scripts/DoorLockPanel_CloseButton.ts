import { Canvas } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import DoorLockData from './Data/DoorLockData';

export default class DoorLockPanel_CloseButton extends ZepetoScriptBehaviour {
    m_Canvas : Canvas ;
    Start() {    
        this.m_Canvas = this.GetComponentInParent<Canvas>();
        ButtonEvent.Add(this.gameObject,()=>
        {
            this.m_Canvas.enabled = false;
            DoorLockData.m_InputDone = true;
        });
    }

}