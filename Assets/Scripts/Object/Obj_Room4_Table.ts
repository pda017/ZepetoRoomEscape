import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from '../AddItemToInventory';
import ItemData from '../Data/ItemData';
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn';
import ItemDialog from '../ItemDialog';
import ItemKey from '../ItemKey'
import NumState from '../NumState';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice';

export default class Obj_Room4_Table extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_ItemKey : ItemKey;
    m_NumState : NumState;
    Start() {    
        this.m_NumState = this.GetComponentInParent<NumState>();
        this.m_ItemKey = this.GetComponent<ItemKey>();
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_IsOn = this.GetComponent<IsOn>();
    }
    Update()
    {
        if(this.m_NumState.m_Value === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                SetDialog.SetByKey("std_Desk&Chair1Dialog");
                this.m_NumState.m_Value++;
            }
        }
        else if(this.m_NumState.m_Value === 1)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                SetDialog.SetByKey("std_Desk&Chair2Dialog");
                this.m_NumState.m_Value++;
            }
        }
        else if(this.m_NumState.m_Value === 2)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                SetDialog.SetByKey("std_Desk&Chair3Dialog");
                this.m_NumState.m_Value++;
            }
        }
        else if(this.m_NumState.m_Value === 3)
        {
            if(this.m_IsOn.m_Value)
            {
                //this.m_IsOn.m_Value = false;
                this.m_Interactable.m_Value = false;
                SetDialog.SetByKey("std_Desk&Chair4Dialog");
                this.m_NumState.m_Value++;
            }
        }
    }
}