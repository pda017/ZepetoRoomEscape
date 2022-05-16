import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ItemData from '../Data/ItemData';
import PanelMgr from '../PanelMgr';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice'
import SpriteMgr from '../SpriteMgr';

export default class Event_ItemView extends ZepetoScriptBehaviour {
    public m_ImageName : string = "";
    Start() {    
        PanelMgr.Hide("InvenPanel");
        PanelMgr.Show("ItemViewPanel");
        ItemData.m_ItemViewImage = this.m_ImageName;
        ItemData.m_ItemViewImageDirty++;
        GameObject.Destroy(this.gameObject);
    }

}