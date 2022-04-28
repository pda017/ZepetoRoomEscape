import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from '../AddItemToInventory';
import CheckEquipedItem from '../CheckEquipedItem';
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn';
import ItemDialog from '../ItemDialog';
import ItemKey from '../ItemKey'
import RemoveInvenItem from '../RemoveInvenItem';
import RequireItem from '../RequireItem';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice';
import ZAnimator from '../ZAnimator';

export default class Obj_Room3_Fuse_Selector extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_RequireItem : RequireItem;
    m_NumState = 0;
    m_Anim : ZAnimator;
    m_Interactable : Interactable;
    Start() {    
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_Anim = new ZAnimator(this.gameObject,true);
        this.m_RequireItem = this.GetComponent<RequireItem>();
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
                RemoveInvenItem.RemoveEquipedItem();
                this.m_Interactable.m_Value = false;
                Finder.Find("Room3_Fuse").GetComponent<IsOn>().m_Value = true;
                this.m_NumState++;
            }
        }
    }
}