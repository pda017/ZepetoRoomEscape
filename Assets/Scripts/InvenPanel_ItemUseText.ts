import { Text } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import InventoryData from './Data/InventoryData';
import StringData from './Data/StringData';
import EquipedItemChanged from './EquipedItemChanged';
import GetEquipedItemData from './GetEquipedItemData';
import GetSelectedItemData from './GetSelectedItemData';
import GetStringData from './GetStringData';
import InvenSelectIndexChanged from './InvenSelectIndexChanged';
import PanelMgr from './PanelMgr';
import PrefabMgr from './PrefabMgr';
import RemoveInvenItem from './RemoveInvenItem';

export default class InvenPanel_ItemUseText extends ZepetoScriptBehaviour {
    m_Text : Text;
    m_InvenSelectIndexChanged : InvenSelectIndexChanged = new InvenSelectIndexChanged();
    m_EquipedItemChanged : EquipedItemChanged = new EquipedItemChanged();
    Start() 
    {    
        
        this.m_Text = this.GetComponent<Text>();
    }
    Update()
    {
        if(this.m_InvenSelectIndexChanged.Check() || this.m_EquipedItemChanged.Check())
        {
            if(InventoryData.m_EquipedIndex === InventoryData.m_SelectIndex && InventoryData.m_SelectIndex !== -1)
            {
                this.m_Text.text = GetStringData.Get("ItemUnequipText");
            }
            else
            {
                this.m_Text.text = GetStringData.Get("ItemEquipText");
            }
        }
    }
}