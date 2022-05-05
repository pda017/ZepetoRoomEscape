import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ActiveInteractable from '../ActiveInteractable';
import Interactable from '../Interactable';
import IsOn from '../IsOn'
import ItemDialog from '../ItemDialog';
import SetDialog from '../SetDialog';
import SetInteractable from '../SetInteractable';
import ZAnimator from '../ZAnimator';

export default class Obj_Room3_Cabinet101 extends ZepetoScriptBehaviour {
    public m_bFindAnimSibling : boolean = false;
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_ItemDialog : ItemDialog;
    m_NumState : number = 0;
    m_Anim : ZAnimator;
    m_ActiveInteractable : ActiveInteractable;
    Start() {    
        this.m_ActiveInteractable = this.GetComponent<ActiveInteractable>();
        if(this.m_bFindAnimSibling == true)
            this.m_Anim = new ZAnimator(this.transform.parent.gameObject,false);
        else
            this.m_Anim = new ZAnimator(this.gameObject,true);
        this.m_ItemDialog = this.GetComponent<ItemDialog>();
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
                if(this.m_ActiveInteractable != null)
                    SetInteractable.SetArray(this.m_ActiveInteractable.m_Value,true);
                if(this.m_ItemDialog != null)
                    SetDialog.SetByKey(this.m_ItemDialog.m_DialogKey);
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            if(!this.m_IsOn.m_Value)
            {
                this.m_Anim.Play("Close");
                this.m_NumState = 0;
            }
        }
    }
}