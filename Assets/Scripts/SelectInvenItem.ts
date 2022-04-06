import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData'

export default class SelectInvenItem {
    public static Select(index : number)
    {
        if(index < InventoryData.m_InvenList.length)
            InventoryData.m_SelectIndex = index;
        else
            InventoryData.m_SelectIndex = -1;
    }
}