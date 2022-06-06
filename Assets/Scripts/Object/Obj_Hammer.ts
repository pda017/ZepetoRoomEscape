import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from '../AddItemToInventory';
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn';
import ItemDialog from '../ItemDialog';
import ItemKey from '../ItemKey'
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice';

export default class Obj_Hammer extends ZepetoScriptBehaviour {
    public m_bDisableParent : boolean;
    m_ItemKey : ItemKey;
    m_ItemDialog : ItemDialog;
    m_IsOn : IsOn;
    m_NumState = 0;
    Start() {    
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
                AddItemToInventory.AddWithDialog(this.m_ItemKey.m_Value,this.m_ItemDialog.m_DialogKey,this.m_ItemDialog.m_NoticeKey);
                Finder.Find("Room2_Cabinet").GetComponent<Interactable>().m_Value = true;
                if(this.m_bDisableParent)
                    this.transform.parent.gameObject.SetActive(false);
                else
                    this.gameObject.SetActive(false);
                this.m_NumState++;
            }
        }
    }
}