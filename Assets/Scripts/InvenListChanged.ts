import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';

export default class InvenListChanged {
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    public Check() : boolean
    {
        if(this.m_Dirty !== InventoryData.m_InvenListDirty)
        {
            this.m_Dirty = InventoryData.m_InvenListDirty;
            return true;
        }
        return false;
    }
}