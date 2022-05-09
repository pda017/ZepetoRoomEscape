import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import SafeBoxData from './Data/SafeBoxData';

export default class SafeBoxInputChanged {
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    public Check() : boolean
    {
        if(this.m_Dirty !== SafeBoxData.m_InputDirty)
        {
            this.m_Dirty = SafeBoxData.m_InputDirty;
            return true;
        }
        return false;
    }
}