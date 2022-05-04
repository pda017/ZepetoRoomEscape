import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn'
import ItemDialog from '../ItemDialog';
import SetDialog from '../SetDialog';
import ZAnimator from '../ZAnimator';

export default class Obj_Room4_OldTv extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_ItemDialog : ItemDialog;
    m_NumState : number = 0;
    m_Anim : ZAnimator;
    Start() {    
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
                if(this.m_ItemDialog != null)
                    SetDialog.SetByKey(this.m_ItemDialog.m_DialogKey);
                Finder.Find("Room4_RemoconSelector").GetComponent<Interactable>().m_Value = true;
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            if(!this.m_IsOn.m_Value)
            {
                this.m_Anim.Play("Close");
                this.m_NumState++;
            }
        }
    }
}