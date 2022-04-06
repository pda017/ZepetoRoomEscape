import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData'

export default class AddItemToInventory {
    public static Add(itemKey : string)
    {
        InventoryData.m_InvenList.push(itemKey);
        InventoryData.m_InvenListDirty = Date.now();
    }
}