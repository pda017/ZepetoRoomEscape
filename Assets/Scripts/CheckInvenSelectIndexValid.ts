import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData'

export default class CheckInvenSelectIndexValid {
    public static Check() : boolean
    {
        if(InventoryData.m_SelectIndex >= 0 && InventoryData.m_SelectIndex < InventoryData.m_InvenList.length)
            return true;
        return false; 
    }
}