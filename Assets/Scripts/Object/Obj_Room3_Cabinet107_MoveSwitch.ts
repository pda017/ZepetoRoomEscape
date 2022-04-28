import { Animator, Debug, Time, Transform, Vector3 } from 'UnityEngine';
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

export default class Obj_Room3_Cabinet107_MoveSwitch extends ZepetoScriptBehaviour {
    public m_MoveTime : number = 1;
    m_IsOn : IsOn;
    m_NumState = 0;
    m_Interactable : Interactable;
    m_Stamp : number;
    m_StartPos : Transform;
    m_EndPos : Transform;
    m_Parent : Transform;
    Start() {    
        this.m_Parent = this.transform.parent;
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_IsOn = this.GetComponent<IsOn>();
        this.m_StartPos = Finder.Find("Pos_Cabinet107_Start").transform;
        this.m_EndPos = Finder.Find("Pos_Cabinet107_End").transform;
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_Interactable.m_Value = false;
                this.m_Stamp = Time.time;
                Finder.Find("Room3_Cabinet107").GetComponent<IsOn>().m_Value = false;
                Finder.Find("Room3_RippedCalander_Other_Selector").GetComponent<Interactable>().m_Value = true;
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            var t = (Time.time - this.m_Stamp) / this.m_MoveTime;
            this.m_Parent.position = Vector3.Lerp(this.m_StartPos.position,this.m_EndPos.position,t);

            if(t >= 1)
            {
                this.m_NumState++;
            }
        }
    }
}