import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogData from './Data/DialogData';
import GetStringData from './GetStringData';

export default class SetDialog  {
    public static Set(text : string)
    {
        DialogData.m_DialogPlaying = true;
        DialogData.m_DialogText = text;
        DialogData.m_DialogPlayDirty = Time.time;
    }
    public static SetByKey(key : string)
    {
        this.Set(GetStringData.Get(key));
    }
}