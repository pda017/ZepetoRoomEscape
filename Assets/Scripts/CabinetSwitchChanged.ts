import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CabinetData from './Data/CabinetData';

export default class CabinetSwitchChanged {
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    public Check() : boolean
    {
        if(this.m_Dirty !== CabinetData.m_SwitchDirty)
        {
            this.m_Dirty = CabinetData.m_SwitchDirty;
            return true;
        }
        return false;
    }
}