import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from './AddItemToInventory';
import CheckInvenSelectIndexValid from './CheckInvenSelectIndexValid'
import CombineData from './Data/CombineData';
import InventoryData from './Data/InventoryData'
import RemoveInvenItem from './RemoveInvenItem';

export default class CombineItem {
    public static Combine(selectIndex : number) : boolean
    {
        InventoryData.m_CombineMode = false;
        InventoryData.m_CombineModeDirty = Time.time;
        if(selectIndex !== InventoryData.m_SelectIndex && selectIndex >=0 && selectIndex < InventoryData.m_InvenList.length)
        {
            var firstItem = InventoryData.m_InvenList[InventoryData.m_SelectIndex];
            var secondItem = InventoryData.m_InvenList[selectIndex];
            //console.log("firstItem:"+firstItem+",secondItem:" + secondItem);
            var combineMap = CombineData.GetCombineMap();
            for(var item of combineMap)
            {
                var value = item[1];
                //value.m_MatSet.forEach(value=>console.log(value));
                var count = 0;
                if(value.m_MatSet.has(firstItem))
                    count++;
                if(value.m_MatSet.has(secondItem))
                    count++;
                //console.log("count:"+count);
                if(count >= 2)
                {
                    RemoveInvenItem.Remove(firstItem);
                    RemoveInvenItem.Remove(secondItem);
                    AddItemToInventory.Add(value.m_Result);
                    return true;
                }
            }
            return false;
        }
        return false;
    }
}