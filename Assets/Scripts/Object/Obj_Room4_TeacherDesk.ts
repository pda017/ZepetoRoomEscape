import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from '../AddItemToInventory';
import CheckEquipedItem from '../CheckEquipedItem';
import ItemData from '../Data/ItemData';
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn';
import ItemDialog from '../ItemDialog';
import ItemKey from '../ItemKey'
import NumState from '../NumState';
import RequireItem from '../RequireItem';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice';
import ZAnimator from '../ZAnimator';

export default class Obj_Room4_TeacherDesk extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_NumState : number = 0;
    m_RequireItem : RequireItem;
    m_UpperDrawerAnim : ZAnimator;
    m_LowerDrawerAnim : ZAnimator;
    Start() {    
        this.m_UpperDrawerAnim = ZAnimator.Find(this.transform.parent.gameObject,"UpperDrawer");
        this.m_LowerDrawerAnim = ZAnimator.Find(this.transform.parent.gameObject,"LowerDrawer");
        this.m_RequireItem = this.GetComponent<RequireItem>();
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_IsOn = this.GetComponent<IsOn>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                if(!CheckEquipedItem.Check(this.m_RequireItem.m_Value))
                {
                    SetDialog.SetByKey("TeacherDeskDialog");
                    return ;
                }
                this.m_UpperDrawerAnim.Play("Open");
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                if(!CheckEquipedItem.Check(this.m_RequireItem.m_Value))
                {
                    SetDialog.SetByKey("TeacherDeskDialog");
                    return ;
                }
                this.m_UpperDrawerAnim.Play("Close");
                this.m_LowerDrawerAnim.Play("Open");
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 2)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                SetDialog.SetByKey("TeacherNoteGetDialog");
                SetNotice.SetByKey("TeacherNoteGetNotice");
                AddItemToInventory.Add("Teacher_Note");
                this.m_Interactable.m_Value = false;
                Finder.Find("Room4_TeacherNote").SetActive(false);
                this.m_LowerDrawerAnim.Play("Close");
                this.m_NumState++;
            }
        }
    }
}