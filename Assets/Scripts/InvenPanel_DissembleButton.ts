import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from './AddItemToInventory';
import ButtonEvent from './ButtonEvent'
import DisassemblyData from './Data/DisassemblyData';
import InventoryData from './Data/InventoryData';
import GetDissemblyData from './GetDissemblyData';
import GetSelectedItemData from './GetSelectedItemData';
import PrefabMgr from './PrefabMgr';
import RemoveInvenItem from './RemoveInvenItem';

export default class InvenPanel_DissembleButton extends ZepetoScriptBehaviour {

    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            var selectItemData = GetSelectedItemData.Get();
            if(selectItemData != null)
            {
                var dissemblyData = GetDissemblyData.Get(selectItemData.m_Key);
                if(dissemblyData != null)
                {
                    dissemblyData.m_MatList.forEach(v=>AddItemToInventory.Add(v));
                    if(InventoryData.m_SelectIndex === InventoryData.m_EquipedIndex)
                        InventoryData.m_EquipedIndex = -1;
                    RemoveInvenItem.RemoveSelectedItem();
                    if(dissemblyData.m_Event !== "" && dissemblyData.m_Event != null)
                    {
                        PrefabMgr.Create(dissemblyData.m_Event);
                    }
                }
            }
        });
    }

}