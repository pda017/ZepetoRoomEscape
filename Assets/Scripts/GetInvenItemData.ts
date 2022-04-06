import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';
import { ItemInfo } from './Data/ItemData';
import GetItemData from './GetItemData';

export default class GetInvenItemData {
    public static Get(index : number) : ItemInfo
    {
        if(index >= 0 && index < InventoryData.m_InvenList.length)
        {
            var itemKey = InventoryData.m_InvenList[index];
            var itemData = GetItemData.Get(itemKey);
            return itemData;
        }
        return null;
    }
}