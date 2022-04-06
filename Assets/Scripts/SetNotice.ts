import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogData from './Data/DialogData';
import GetStringData from './GetStringData';

export default class SetNotice {
    public static Set(text : string)
    {
        DialogData.m_NoticeText = text;
        DialogData.m_NoticeDirty = Time.time;
        DialogData.m_NoticePlaying = true;
    }
    public static SetByKey(key : string)
    {
        this.Set(GetStringData.Get(key));
    }
}