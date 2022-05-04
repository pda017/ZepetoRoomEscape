import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';
import { ItemInfo } from './Data/ItemData';
import GetInvenItemData from './GetInvenItemData';

export default class GetSelectedItemData {

    public static Get() : ItemInfo
    {
        return GetInvenItemData.Get(InventoryData.m_SelectIndex);
    }
}