import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogData from './Data/DialogData';

export default class DialogPlayChanged {
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    public Check() : Boolean
    {
        if(this.m_Dirty !== DialogData.m_DialogPlayDirty)
        {
            this.m_Dirty = DialogData.m_DialogPlayDirty;
            return true;
        }
        return false;
    }
}