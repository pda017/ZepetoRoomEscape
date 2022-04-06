import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice'

export default class Event_Key extends ZepetoScriptBehaviour {

    Start() {    
        SetNotice.SetByKey("KeyGetNotice");
        SetDialog.SetByKey("KeyGetDialog");
        GameObject.Destroy(this.gameObject);
    }

}