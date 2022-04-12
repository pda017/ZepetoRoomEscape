import { Time, Transform, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CheckEquipedItem from '../CheckEquipedItem';
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn'
import RemoveInvenItem from '../RemoveInvenItem';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice';
import ZAnimator from '../ZAnimator';

export default class Obj_Room2_Cabinet extends ZepetoScriptBehaviour {
    public m_MoveTime : number = 3;
    m_Parent : Transform;
    m_IsOn : IsOn;
    m_NumState : number = 0;
    m_Anim : ZAnimator;
    m_Interactable : Interactable;
    m_MoveStartTf : Transform;
    m_MoveEndTf : Transform;
    m_MoveStamp : number = 0;
    Start() {
        this.m_Parent = this.transform.parent;
        this.m_MoveEndTf = Finder.Find("Room2_Cabinet_End").transform;
        this.m_MoveStartTf = Finder.Find("Room2_Cabinet_Start").transform;
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_Anim = new ZAnimator(this.gameObject,true);
        this.m_IsOn = this.GetComponent<IsOn>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                var hammerInteractable = Finder.Find("Room2_Item_Hammer").GetComponent<Interactable>();
                hammerInteractable.m_Value = true;
                hammerInteractable.m_Dirty = Time.time;
                this.m_Interactable.m_Value = false;
                this.m_Interactable.m_Dirty = Time.time;
                this.m_IsOn.m_Value = false;
                this.m_IsOn.m_Dirty = Time.time;
                this.m_Anim.Play("Open");
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            if(this.m_IsOn.m_Value)
            {
                if(!CheckEquipedItem.Check("Cabinet_Key"))
                {
                    SetDialog.SetByKey("CabinetDialog");
                    this.m_IsOn.m_Value = false;
                    this.m_IsOn.m_Dirty = Time.time;
                    return ;
                }

                SetNotice.SetByKey("CabinetNotice");
                RemoveInvenItem.RemoveEquipedItem();
                this.m_MoveStamp = Time.time;
                this.m_Anim.Play("Close");
                this.m_Interactable.m_Value = false;
                this.m_Interactable.m_Dirty = Time.time;
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 2)
        {
            var t = (Time.time - this.m_MoveStamp) / this.m_MoveTime;
            this.m_Parent.position = Vector3.Lerp(this.m_MoveStartTf.position,this.m_MoveEndTf.position,t);
            if(t >= 1)
            {
                var openButtonInter = Finder.Find("Room2_OpenButton").GetComponent<Interactable>();
                openButtonInter.m_Value = true;
                openButtonInter.m_Dirty = Time.time;
                this.m_NumState++;
            }
        }   
    }
}