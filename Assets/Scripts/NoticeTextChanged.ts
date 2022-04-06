import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogData from './Data/DialogData';

export default class NoticeTextChanged {
    m_Dirty : number = Number.MIN_SAFE_INTEGER; 
    public Check() : boolean
    {
        if(this.m_Dirty !== DialogData.m_NoticeDirty)
        {
            this.m_Dirty = DialogData.m_NoticeDirty;
            return true;
        }
        return false;
    }
}