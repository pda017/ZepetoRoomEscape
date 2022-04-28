import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ItemData from './Data/ItemData'

export default class DebugLogItemDataAll extends ZepetoScriptBehaviour {

    Start() {    
        var map = ItemData.GetItemMap();
        map.forEach((value,key)=>
        {
            console.log(" Desc : " + value.m_Desc 
            + " Disposable : " + value.m_Disposable
            + " Icon : " + value.m_Icon
            + " ItemName : " + value.m_ItemName
            + " Key : " + value.m_Key
            + " Prefab : " + value.m_Prefab
            + " UseItem : " + value.m_UseItem);
        });
    }

}