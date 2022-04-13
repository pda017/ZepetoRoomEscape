import { Color, Time } from 'UnityEngine';
import { Image } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import CheckInvenSelectIndexValid from './CheckInvenSelectIndexValid';
import CombineData from './Data/CombineData';
import InventoryData from './Data/InventoryData';

export default class InvenPanel_CombineButton extends ZepetoScriptBehaviour {
    m_Image : Image;
    m_OriColor : Color;
    static m_CombineModeColor : Color = new Color(1,0,0,1);
    Start() {
        this.m_Image = this.GetComponent<Image>();
        this.m_OriColor = this.m_Image.color;
        ButtonEvent.Add(this.gameObject,()=>
        {
            InventoryData.m_CombineMode = !InventoryData.m_CombineMode;
            if(InventoryData.m_CombineMode && !CheckInvenSelectIndexValid.Check())
                InventoryData.m_CombineMode = false;
            InventoryData.m_CombineModeDirty = Time.time;
        });
    }
    Update()
    {
        if(InventoryData.m_CombineMode)
            this.m_Image.color = InvenPanel_CombineButton.m_CombineModeColor;
        else
            this.m_Image.color = this.m_OriColor;
    }
}