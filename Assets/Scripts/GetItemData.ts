import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ItemData, { ItemInfo } from './Data/ItemData';

export default class GetItemData {
    public static Get(itemKey : string) : ItemInfo
    {
        var itemMap = ItemData.GetItemMap();
        return itemMap.get(itemKey);
    }
}