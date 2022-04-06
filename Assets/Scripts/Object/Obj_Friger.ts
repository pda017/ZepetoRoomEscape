import { Collider, Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Interactable from './Interactable';
import IsOn from './IsOn';
import ZAnimator from './ZAnimator'

export default class Obj_Friger extends ZepetoScriptBehaviour {
    m_Anim : ZAnimator;
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_Col : Collider;
    m_NumState : number = 0;
    Start() {    
        this.m_Col = this.GetComponent<Collider>();
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_IsOn = this.GetComponent<IsOn>();
        this.m_Anim = new ZAnimator(this.gameObject,true);
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_Col.enabled = false;
                this.m_Interactable.m_Value = false;
                this.m_Interactable.m_Dirty = Time.time;
                this.m_Anim.Play("Open");
                this.m_NumState = 1;
                return ;
            }
        }
    }
}