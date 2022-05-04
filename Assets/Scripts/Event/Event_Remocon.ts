import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ItemDialog from '../ItemDialog';
import PanelMgr from '../PanelMgr';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice'

export default class Event_Remocon extends ZepetoScriptBehaviour {

    Start() {
        PanelMgr.Hide("InvenPanel");
        PanelMgr.Show("RemoconPanel");
        GameObject.Destroy(this.gameObject);
    }

}