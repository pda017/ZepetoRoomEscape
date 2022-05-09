import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ActiveInteractable from '../ActiveInteractable';
import AddItemToInventory from '../AddItemToInventory';
import CheckPanelClose from '../CheckPanelClose';
import SafeBoxData from '../Data/SafeBoxData';
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn'
import ItemDialog from '../ItemDialog';
import PanelMgr from '../PanelMgr';
import SetDialog from '../SetDialog';
import SetInteractable from '../SetInteractable';
import ZAnimator from '../ZAnimator';

export default class Obj_Room5_SafeBox extends ZepetoScriptBehaviour {
    public m_Password : string;
    public m_bFindAnimSibling : boolean = false;
    m_IsOn : IsOn;
    m_Interactable : Interactable;
    m_NumState : number = 0;
    m_Anim : ZAnimator;
    m_ActiveInteractable : ActiveInteractable;
    m_CheckPanelClose : CheckPanelClose;
    Start() {    
        this.m_CheckPanelClose = new CheckPanelClose("SafeBoxPanel");
        this.m_ActiveInteractable = this.GetComponent<ActiveInteractable>();
        if(this.m_bFindAnimSibling == true)
            this.m_Anim = new ZAnimator(this.transform.parent.gameObject,false);
        else
            this.m_Anim = new ZAnimator(this.gameObject,true);
        this.m_IsOn = this.GetComponent<IsOn>();
        this.m_Interactable = this.GetComponent<Interactable>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                SafeBoxData.Init();
                PanelMgr.Show("SafeBoxPanel");
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

            if(SafeBoxData.m_bEnter)
            {
                SafeBoxData.m_bEnter = false;
                if(this.m_Password === SafeBoxData.m_InputCommand)
                {
                    PanelMgr.Hide("SafeBoxPanel");
                    this.m_Anim.Play("Open");
                    this.m_NumState++;
                    return ;
                }
            }
        }
        else if(this.m_NumState === 2)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                this.m_Interactable.m_Value = false;
                Finder.Find("Room5_SecretLedger").SetActive(false);
                AddItemToInventory.Add("Secret_Note");
                this.m_NumState++;
            }
        }
    }
}