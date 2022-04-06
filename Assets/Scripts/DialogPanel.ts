import { Canvas } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogData from './Data/DialogData';

export default class DialogPanel extends ZepetoScriptBehaviour {
    m_Canvas : Canvas;
    Start() {    
        this.m_Canvas = this.GetComponent<Canvas>();
    }
    Update()
    {
        this.m_Canvas.enabled = DialogData.m_DialogPlaying;
    }
}