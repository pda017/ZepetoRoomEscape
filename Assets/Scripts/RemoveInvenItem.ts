import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData'

export default class RemoveInvenItem {
    public static Remove(itemName : string)
    {
        var index = InventoryData.m_InvenList.indexOf(itemName);
        this.RemoveByIndex(index);
    }
    public static RemoveByIndex(index : number)
    {
        if(index >= 0)
        {
            InventoryData.m_InvenList.splice(index,1);
            InventoryData.m_InvenListDirty = Time.time;
        }
    }
}