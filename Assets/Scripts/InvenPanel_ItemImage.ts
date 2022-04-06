import { Transform } from 'UnityEngine'
import { Image } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';
import GetItemData from './GetItemData';
import IndexTag from './IndexTag';
import InvenListChanged from './InvenListChanged';
import SpriteMgr from './SpriteMgr';

export default class InvenPanel_ItemImage extends ZepetoScriptBehaviour {
    m_IndexTf : Transform;
    m_Image : Image;
    m_InvenListChanged : InvenListChanged = new InvenListChanged();
    Start() 
    {    
        this.m_Image = this.GetComponent<Image>();
        var indexTag = this.GetComponentInParent<IndexTag>();
        this.m_IndexTf = indexTag.transform;
    }
    Update()
    {
        if(this.m_InvenListChanged.Check())
        {
            var index = this.m_IndexTf.GetSiblingIndex();
            if(index < InventoryData.m_InvenList.length)
            {
                this.m_Image.enabled = true;
                var itemKey = InventoryData.m_InvenList[index];
                var itemData = GetItemData.Get(itemKey);
                if(itemData != null)
                {
                    this.m_Image.sprite = SpriteMgr.Get(itemData.m_Icon);
                }
            }
            else
                this.m_Image.enabled = false;
        }
    }
}