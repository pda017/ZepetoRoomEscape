import { Canvas, Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent';
import InventoryData from './Data/InventoryData';

export default class InvenPanel_CloseButton extends ZepetoScriptBehaviour {

    m_Canvas : Canvas;
    Start() {    
        this.m_Canvas = this.GetComponentInParent<Canvas>();
        ButtonEvent.Add(this.gameObject,()=>
        {
            InventoryData.m_CombineMode = false;
            InventoryData.m_CombineModeDirty = Time.time;
            this.m_Canvas.enabled = false;
        });
    }

}