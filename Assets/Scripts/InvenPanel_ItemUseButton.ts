import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import InventoryData from './Data/InventoryData';

export default class InvenPanel_ItemUseButton extends ZepetoScriptBehaviour {

    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            if(InventoryData.m_SelectIndex >= 0 && InventoryData.m_SelectIndex < InventoryData.m_InvenList.length)
            {
                InventoryData.m_EquipedIndex = InventoryData.m_SelectIndex;
            }
        });
    }

}