import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ActiveInteractable from '../ActiveInteractable';
import CheckEquipedItem from '../CheckEquipedItem';
import Interactable from '../Interactable';
import IsDisposableItem from '../IsDisposableItem';
import IsOn from '../IsOn'
import ItemDialog from '../ItemDialog';
import LockDialog from '../LockDialog';
import RemoveInvenItem from '../RemoveInvenItem';
import RequireItem from '../RequireItem';
import SetDialog from '../SetDialog';
import SetInteractable from '../SetInteractable';
import ZAnimator from '../ZAnimator';

export default class Obj_Room3_Cabinet102 extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_NumState : number = 0;
    m_Anim : ZAnimator;
    m_RequireItem : RequireItem;
    m_LockDialog : LockDialog;
    m_ActiveInteractable : ActiveInteractable;
    Start() {    
        this.m_LockDialog = this.GetComponent<LockDialog>();
        this.m_RequireItem = this.GetComponent<RequireItem>();
        this.m_Anim = new ZAnimator(this.gameObject,true);
        this.m_IsOn = this.GetComponent<IsOn>();
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_ActiveInteractable = this.GetComponent<ActiveInteractable>();
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
                if(IsDisposableItem.Check(this.m_RequireItem.m_Value))
                    RemoveInvenItem.RemoveEquipedItem();
                SetDialog.SetByKey(this.m_LockDialog.m_UnlockDialogKey);
                if(this.m_ActiveInteractable != null)
                    SetInteractable.SetArray(this.m_ActiveInteractable.m_Value,true);
                this.m_Anim.Play("Open");
                this.m_Interactable.m_Value = false;
                this.m_Interactable.m_Dirty = Time.time;
                this.m_NumState++;
            }
        }
    }
}