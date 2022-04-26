import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from '../AddItemToInventory';
import CheckEquipedItem from '../CheckEquipedItem';
import IsOn from '../IsOn';
import ItemDialog from '../ItemDialog';
import ItemKey from '../ItemKey'
import RequireItem from '../RequireItem';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice';

export default class Obj_Room3_DriverHandle extends ZepetoScriptBehaviour {
    m_ItemKey : ItemKey;
    m_ItemDialog : ItemDialog;
    m_IsOn : IsOn;
    m_RequireItem : RequireItem;
    m_NumState = 0;
    Start() {    
        this.m_RequireItem = this.GetComponent<RequireItem>();
        this.m_ItemKey = this.GetComponent<ItemKey>();
        this.m_ItemDialog = this.GetComponent<ItemDialog>();
        this.m_IsOn = this.GetComponent<IsOn>();
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
                    this.m_IsOn.m_Dirty = Time.time;
                    return ;
                }

                AddItemToInventory.Add(this.m_ItemKey.m_Value);
                if(this.m_ItemDialog != null)
                {
                    if(this.m_ItemDialog.m_DialogKey != "")
                        SetDialog.SetByKey(this.m_ItemDialog.m_DialogKey);
                    if(this.m_ItemDialog.m_NoticeKey != "")
                        SetNotice.SetByKey(this.m_ItemDialog.m_NoticeKey);
                }
                this.gameObject.SetActive(false);
                this.m_NumState++;
            }
        }
    }
}