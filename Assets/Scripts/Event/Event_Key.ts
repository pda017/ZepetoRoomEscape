import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice'

export default class Event_Key extends ZepetoScriptBehaviour {

    Start() {    
        SetNotice.SetByKey("ROOM1_KeyGetNotice");
        SetDialog.SetByKey("ROOM1_KeyGetDialog");
        GameObject.Destroy(this.gameObject);
    }

}