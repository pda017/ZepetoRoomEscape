import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData'

export default class CheckEquipedItem {
    public static Check(itemName : string) : boolean
    {
        if(InventoryData.m_EquipedIndex >= 0 && InventoryData.m_EquipedIndex < InventoryData.m_InvenList.length)
        {
            var equipedItem = InventoryData.m_InvenList[InventoryData.m_EquipedIndex];
            if(equipedItem === itemName)
                return true;
        }
        return false;
    }
}