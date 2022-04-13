import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Interactable from '../Interactable';
import IsOn from '../IsOn'
import SetDialog from '../SetDialog';

export default class Obj_Room3_TextBoard extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_NumState : number = 0;
    Start() {    
        this.m_IsOn = this.GetComponent<IsOn>();
        this.m_Interactable = this.GetComponent<Interactable>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_Interactable.m_Value = false;
                this.m_Interactable.m_Dirty = Time.time;
                SetDialog.SetByKey("Room3_TextBoard");
                this.m_NumState++;
            }
        }
    }
}