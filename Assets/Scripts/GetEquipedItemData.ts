import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';
import { ItemInfo } from './Data/ItemData';
import GetInvenItemData from './GetInvenItemData';
import GetItemData from './GetItemData';

export default class GetEquipedItemData {
    public static Get() : ItemInfo
    {
        return GetInvenItemData.Get(InventoryData.m_EquipedIndex);
    }
}