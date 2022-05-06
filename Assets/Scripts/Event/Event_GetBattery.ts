import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ItemDialog from '../ItemDialog';
import PanelMgr from '../PanelMgr';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice'

export default class Event_GetBattery extends ZepetoScriptBehaviour {

    Start() {
        var itemDialog = this.GetComponent<ItemDialog>();
        if(itemDialog.m_DialogKey != "")
            SetDialog.SetByKey(itemDialog.m_DialogKey);
        if(itemDialog.m_NoticeKey != "")
            SetNotice.SetByKey(itemDialog.m_NoticeKey);
        PanelMgr.Hide("InvenPanel");
        GameObject.Destroy(this.gameObject);
    }

}