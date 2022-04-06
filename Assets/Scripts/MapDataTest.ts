import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ItemData from './Data/ItemData'

export default class MapDataTest extends ZepetoScriptBehaviour {

    Start() {    
        var itemMap = ItemData.GetItemMap();
        itemMap.forEach((value,key)=>
        {
            console.log(key + "," + value);
        });
    }

}