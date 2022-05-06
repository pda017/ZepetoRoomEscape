import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import RotateLockData from './Data/RotateLockData';

export default class RotatePasswordChanged {
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    public Check() : boolean
    {
        if(this.m_Dirty !== RotateLockData.m_PasswordDirty)
        {
            this.m_Dirty = RotateLockData.m_PasswordDirty;
            return true;
        }
        return false;
    }
}