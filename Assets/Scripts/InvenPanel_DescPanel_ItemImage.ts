import { Image } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';
import GetInvenItemData from './GetInvenItemData';
import GetItemData from './GetItemData';
import InvenListChanged from './InvenListChanged';
import InvenSelectIndexChanged from './InvenSelectIndexChanged';
import SpriteMgr from './SpriteMgr';

export default class InvenPanel_DescPanel_ItemImage extends ZepetoScriptBehaviour {
    m_Image : Image;
    m_SelectItemChanged : InvenSelectIndexChanged = new InvenSelectIndexChanged();
    m_InvenListChanged : InvenListChanged = new InvenListChanged();
    Start() {    
        this.m_Image = this.GetComponent<Image>();
    }
    Update()
    {
        if(this.m_SelectItemChanged.Check() || this.m_InvenListChanged.Check())
        {
            var itemData = GetInvenItemData.Get(InventoryData.m_SelectIndex);
            if(itemData != null)
            {
                this.m_Image.enabled = true;
                this.m_Image.sprite = SpriteMgr.Get(itemData.m_Icon);
            }
            else
                this.m_Image.enabled = false;
        }
    }
}