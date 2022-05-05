import { Animator, Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CheckAniEnd from '../CheckAniEnd';
import CheckEquipedItem from '../CheckEquipedItem';
import CheckPanelClose from '../CheckPanelClose';
import InventoryData from '../Data/InventoryData';
import RotateLockData from '../Data/RotateLockData';
import Interactable from '../Interactable';
import IsOn from '../IsOn';
import PanelMgr from '../PanelMgr';
import RemoveInvenItem from '../RemoveInvenItem';
import RotatePasswordChanged from '../RotatePasswordChanged';
import SetDialog from '../SetDialog';

export default class Obj_Room4_ExitDoor extends ZepetoScriptBehaviour {
    public m_Password : string = "1234";
    m_IsOn : IsOn;
    m_Anim : Animator;
    m_NumState :number = 0;
    m_CheckAniEnd : CheckAniEnd;
    m_Interactable : Interactable;
    m_RotatePasswordChanged : RotatePasswordChanged = new RotatePasswordChanged();
    m_CheckPanelClose : CheckPanelClose;
    Start() {
        this.m_CheckPanelClose = new CheckPanelClose("RotateLockPanel");
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_CheckAniEnd = new CheckAniEnd(this.gameObject,true);
        this.m_Anim = this.GetComponentInParent<Animator>();    
        this.m_IsOn = this.GetComponent<IsOn>();
    }
    Update()
    {
        this.m_CheckPanelClose.Init();

        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                PanelMgr.Show("RotateLockPanel");
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            if(this.m_CheckPanelClose.Check())
            {
                this.m_NumState = 0;
                return ;
            }

            if(this.m_RotatePasswordChanged.Check())
            {
                if(RotateLockData.m_Password === this.m_Password)
                {
                    SetDialog.SetByKey("ClassDoorUnLockDialog");
                    //console.log(RotateLockData.m_Password + " : " + this.m_Password);
                    PanelMgr.Hide("RotateLockPanel");
                    this.m_Interactable.m_Value = false;
                    this.m_Anim.Play("Open");
                    this.m_NumState++;
                    return ;
                }
            }
        }
    }
}