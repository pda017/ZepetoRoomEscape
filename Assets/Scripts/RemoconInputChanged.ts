import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import RemoconData from './Data/RemoconData';

export default class RemoconInputChanged {
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    public Check() : boolean
    {
        if(this.m_Dirty !== RemoconData.m_InputDirty)
        {
            this.m_Dirty = RemoconData.m_InputDirty;
            return true;
        }
        return false;
    }
}