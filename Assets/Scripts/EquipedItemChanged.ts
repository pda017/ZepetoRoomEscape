import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';

export default class EquipedItemChanged {
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    public Check() : boolean
    {
        if(this.m_Dirty != InventoryData.m_EquipedIndex)
        {
            this.m_Dirty = InventoryData.m_EquipedIndex;
            return true;
        }
        return false;
    }
}