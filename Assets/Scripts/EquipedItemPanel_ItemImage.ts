import { Image } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import EquipedItemChanged from './EquipedItemChanged';
import GetEquipedItemData from './GetEquipedItemData';
import InvenListChanged from './InvenListChanged';
import SpriteMgr from './SpriteMgr';

export default class EquipedItemPanel_ItemImage extends ZepetoScriptBehaviour {
    m_Image : Image;
    m_InvenItemChanged : InvenListChanged = new InvenListChanged();
    m_EquipedItemChanged : EquipedItemChanged = new EquipedItemChanged();
    Start() {    
        this.m_Image = this.GetComponent<Image>();
    }
    Update()
    {
        if(this.m_InvenItemChanged.Check() || this.m_EquipedItemChanged.Check())
        {
            var itemData = GetEquipedItemData.Get();
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