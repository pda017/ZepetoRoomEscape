import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from './AddItemToInventory';

export default class DebugAddItem extends ZepetoScriptBehaviour {
    public m_Value : string[] = [];
    Start() {    
        this.m_Value.forEach(value=>
            {
                AddItemToInventory.Add(value);
            });
    }

}