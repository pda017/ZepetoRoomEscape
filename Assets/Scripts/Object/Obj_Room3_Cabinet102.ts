import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CheckEquipedItem from '../CheckEquipedItem';
import Interactable from '../Interactable';
import IsOn from '../IsOn'
import ItemDialog from '../ItemDialog';
import LockDialog from '../LockDialog';
import RemoveInvenItem from '../RemoveInvenItem';
import RequireItem from '../RequireItem';
import SetDialog from '../SetDialog';
import ZAnimator from '../ZAnimator';

export default class Obj_Room3_Cabinet102 extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_NumState : number = 0;
    m_Anim : ZAnimator;
    m_RequireItem : RequireItem;
    m_LockDialog : LockDialog;
    Start() {    
        this.m_LockDialog = this.GetComponent<LockDialog>();
        this.m_RequireItem = this.GetComponent<RequireItem>();
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
                if(!CheckEquipedItem.Check(this.m_RequireItem.m_Value))
                {
                    this.m_IsOn.m_Value = false;
                    SetDialog.SetByKey(this.m_LockDialog.m_LockDialogKey);
                    return ;
                }
                RemoveInvenItem.RemoveEquipedItem();
                SetDialog.SetByKey(this.m_LockDialog.m_UnlockDialogKey);
                this.m_Anim.Play("Open");
                this.m_Interactable.m_Value = false;
                this.m_Interactable.m_Dirty = Time.time;
                this.m_NumState++;
            }
        }
    }
}