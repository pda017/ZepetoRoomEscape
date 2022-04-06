import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import DialogData from './Data/DialogData';

export default class NoticeTextTest extends ZepetoScriptBehaviour {

    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            DialogData.m_NoticeText = "열쇠를 획득하였습니다.";
            DialogData.m_NoticeDirty = Time.time;
            DialogData.m_NoticePlaying = true;
        });
    }
}