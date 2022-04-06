import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice';

export default class Event_GetItem extends ZepetoScriptBehaviour {
    public m_DialogKey : string;
    public m_NoticeKey : string;
    Start() {    
        SetNotice.SetByKey(this.m_NoticeKey);
        SetDialog.SetByKey(this.m_DialogKey);
        GameObject.Destroy(this.gameObject);
    }

}