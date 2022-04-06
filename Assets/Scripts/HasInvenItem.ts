import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData'

export default class HasInvenItem {
    public static Has(itemName : string) : boolean
    {
        return InventoryData.m_InvenList.includes(itemName,0);
    }
}