import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Interactable from '../Interactable'
import IsOn from '../IsOn';

export default class Obj_Ice extends ZepetoScriptBehaviour {
    m_Interactable : Interactable;
    m_IsDoorOn : IsOn;
    m_NumState : number = 0;
    Start() {    
        this.m_IsDoorOn = this.GetComponentInParent<IsOn>();
        if(this.m_IsDoorOn == null)
        {
            this.m_IsDoorOn = this.transform.parent.GetComponentInChildren<IsOn>();
        }
        this.m_Interactable = this.GetComponent<Interactable>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsDoorOn.m_Value)
            {
                this.m_Interactable.m_Value = true;
                this.m_Interactable.m_Dirty = Time.time;
                this.m_NumState++;
            }
        }
    }
}