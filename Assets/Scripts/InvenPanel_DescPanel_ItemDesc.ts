import { Image , Text } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';
import GetInvenItemData from './GetInvenItemData';
import GetItemData from './GetItemData';
import InvenSelectIndexChanged from './InvenSelectIndexChanged';
import SpriteMgr from './SpriteMgr';

export default class InvenPanel_DescPanel_ItemDesc extends ZepetoScriptBehaviour {
    m_Text : Text;
    m_SelectItemChanged : InvenSelectIndexChanged = new InvenSelectIndexChanged();
    Start() {    
        this.m_Text = this.GetComponent<Text>();
    }
    Update()
    {
        if(this.m_SelectItemChanged.Check())
        {
            var itemData = GetInvenItemData.Get(InventoryData.m_SelectIndex);
            if(itemData != null)
            {
                this.m_Text.text = itemData.m_Desc;
            }
            else
                this.m_Text.text = "";
        }
    }
}