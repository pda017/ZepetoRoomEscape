import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import InventoryData from './Data/InventoryData';
import GetEquipedItemData from './GetEquipedItemData';
import GetSelectedItemData from './GetSelectedItemData';
import PanelMgr from './PanelMgr';
import PrefabMgr from './PrefabMgr';
import RemoveInvenItem from './RemoveInvenItem';

export default class InvenPanel_ItemUseButton extends ZepetoScriptBehaviour {

    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            if(InventoryData.m_SelectIndex >= 0 && InventoryData.m_SelectIndex < InventoryData.m_InvenList.length)
            {
                if(!InventoryData.m_CombineMode)
                {
                    var selectedItemData = GetSelectedItemData.Get();
                    if(selectedItemData.m_UseItem)
                    {
                        if(selectedItemData.m_UseEvent != null && selectedItemData.m_UseEvent != "")
                        {
                            PrefabMgr.Create(selectedItemData.m_UseEvent);
                        }
                    }
                    else
                    {
                        if(InventoryData.m_EquipedIndex === InventoryData.m_SelectIndex)
                            InventoryData.m_EquipedIndex = -1;
                        else
                        {
                            InventoryData.m_EquipedIndex = InventoryData.m_SelectIndex;
                            PanelMgr.Hide("InvenPanel");
                        }
                    }

                    if(selectedItemData.m_Disposable)
                        RemoveInvenItem.RemoveSelectedItem();
                }
            }
        });
    }

}