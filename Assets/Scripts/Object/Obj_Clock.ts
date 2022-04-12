import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import IsOn from '../IsOn';
import ItemDialog from '../ItemDialog';
import SetDialog from '../SetDialog';

export default class Obj_Clock extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_ItemDialog : ItemDialog;
    m_NumState : number = 0;
    Start() 
    {
        this.m_ItemDialog = this.GetComponent<ItemDialog>();
        this.m_IsOn = this.GetComponent<IsOn>();    
    }
    Update()
    {
        if(this.m_IsOn.m_Value)
        {
            this.m_IsOn.m_Value = false;
            SetDialog.SetByKey(this.m_ItemDialog.m_DialogKey);
        }
    }
}