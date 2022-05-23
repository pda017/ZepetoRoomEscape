import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import {InputField} from 'UnityEngine.UI'
import AddItemToInventory from './AddItemToInventory';
export default class AddItemPanel_AddButton extends ZepetoScriptBehaviour {
    m_InputField : InputField;
    Start() {    
        this.m_InputField = this.transform.parent.GetComponentInChildren<InputField>();
        ButtonEvent.Add(this.gameObject,()=>
        {
            AddItemToInventory.Add(this.m_InputField.text);
            this.m_InputField.text = "";
        });
    }

}