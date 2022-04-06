import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';

export default class InvenSelectIndexChanged {
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    public Check() : boolean
    {
        if(this.m_Dirty != InventoryData.m_SelectIndex)
        {
            this.m_Dirty = InventoryData.m_SelectIndex;
            return true;
        }
        return false;
    }
}