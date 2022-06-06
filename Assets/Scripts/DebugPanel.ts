import { Canvas } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DebugData from './Data/DebugData'

export default class DebugPanel extends ZepetoScriptBehaviour {
    m_Canvas : Canvas;
    Start() {    
        this.m_Canvas = this.GetComponent<Canvas>();
        if(DebugData.m_DebugMode)
            this.m_Canvas.enabled = true;
        else
            this.m_Canvas.enabled = false;
    }

}