import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from '../AddItemToInventory';
import ItemData from '../Data/ItemData';
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn';
import ItemDialog from '../ItemDialog';
import ItemKey from '../ItemKey'
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice';

export default class Obj_Room3_Calander extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_ItemDialog : ItemDialog;
    m_Interactable : Interactable;
    m_ItemKey : ItemKey;
    m_NumState = 0;
    Start() {    
        this.m_ItemKey = this.GetComponent<ItemKey>();
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_ItemDialog = this.GetComponent<ItemDialog>();
        this.m_IsOn = this.GetComponent<IsOn>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_Interactable.m_Value = false;
                AddItemToInventory.AddWithItemDialog(this.m_ItemKey.m_Value,this.m_ItemDialog);
                Finder.Find("Room3_CalanderImage").SetActive(false);
                this.m_NumState++;
            }
        }
    }
}