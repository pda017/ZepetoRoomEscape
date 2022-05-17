import { Image } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ItemData from './Data/ItemData';
import SpriteMgr from './SpriteMgr';

export default class ItemViewPanel_ItemImage extends ZepetoScriptBehaviour {
    m_Image : Image;
    m_ImageViewDirty : number = Number.MIN_SAFE_INTEGER;
    Start() {    
        this.m_Image = this.GetComponent<Image>();
    }
    Update()
    {
        if(this.m_ImageViewDirty !== ItemData.m_ItemViewImageDirty)
        {
            this.m_ImageViewDirty = ItemData.m_ItemViewImageDirty;
            if(ItemData.m_ItemViewImage != null)
            {
                this.m_Image.sprite = SpriteMgr.Get(ItemData.m_ItemViewImage);
                this.m_Image.SetNativeSize();
            }
        }
    }
}