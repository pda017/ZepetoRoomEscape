import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import PanelMgr from '../PanelMgr';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice'

export default class Event_Apple extends ZepetoScriptBehaviour {

    Start() {    
        PanelMgr.Hide("InvenPanel");
        SetDialog.SetByKey("AppleUseDialog");
        GameObject.Destroy(this.gameObject);
    }

}