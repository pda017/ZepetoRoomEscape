import { Canvas } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World';
import ButtonEvent from './ButtonEvent'

export default class PanelCloseButton extends ZepetoScriptBehaviour {
    m_Canvas : Canvas;
    Start() {    
        this.m_Canvas = this.GetComponentInParent<Canvas>();
        ButtonEvent.Add(this.gameObject,()=>
        {
            this.m_Canvas.enabled = false;
        });
    }
}