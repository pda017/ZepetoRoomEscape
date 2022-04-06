import { Animator, Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CheckAniEnd from './CheckAniEnd';
import CheckEquipedItem from './CheckEquipedItem';
import InventoryData from './Data/InventoryData';
import HasInvenItem from './HasInvenItem';
import Interactable from './Interactable';
import IsOn from './IsOn'
import RemoveInvenItem from './RemoveInvenItem';

export default class Obj_Door extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_Anim : Animator;
    m_NumState :number = 0;
    m_CheckAniEnd : CheckAniEnd;
    m_Interactable : Interactable;
    Start() {
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_CheckAniEnd = new CheckAniEnd(this.gameObject,true);
        this.m_Anim = this.GetComponentInParent<Animator>();    
        this.m_IsOn = this.GetComponent<IsOn>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                if(CheckEquipedItem.Check("Key"))
                {
                    RemoveInvenItem.RemoveByIndex(InventoryData.m_EquipedIndex);
                    this.m_Anim.Play("Open",0,0);
                    this.m_Interactable.m_Value = false;
                    this.m_Interactable.m_Dirty = Time.time;
                    this.m_NumState++;
                }
                else
                {
                    this.m_IsOn.m_Value = false;
                    this.m_IsOn.m_Dirty = Time.time;
                }
            }
        }
    }
}