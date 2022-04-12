import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn'
import ZAnimator from '../ZAnimator';

export default class Obj_Room3_Drawer extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_NumState = 0;
    m_Anim : ZAnimator;
    Start() {    
        this.m_Anim = new ZAnimator(this.gameObject,true);
        this.m_IsOn = this.GetComponent<IsOn>();
        this.m_Interactable = this.GetComponent<Interactable>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_Anim.Play("Open");
                this.m_Interactable.m_Value = false;
                this.m_Interactable.m_Dirty = Time.time;
                var driverTipInteractable = Finder.Find("Room3_DriverTip").GetComponent<Interactable>();
                driverTipInteractable.m_Value = true;
                driverTipInteractable.m_Dirty = Time.time;
                this.m_NumState++;
            }
        }
    }
}