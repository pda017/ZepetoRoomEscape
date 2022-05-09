import { Time, Transform, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CheckCabinetIndex from '../CheckCabinetIndex';
import CheckPanelClose from '../CheckPanelClose';
import CheckSecretCabinetIndex from '../CheckSecretCabinetIndex';
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn';
import ItemDialog from '../ItemDialog';
import PanelMgr from '../PanelMgr';
import PanelName from '../PanelName';
import SetDialog from '../SetDialog';

export default class Obj_Room5_SecretCabinet extends ZepetoScriptBehaviour {
    public m_CabinetMoveTime : number = 1;
    public m_CabinetIndexList : number[] = [];
    public m_SecretCabinetIndexList : number[] = [];
    m_Parent : Transform;
    m_IsOn : IsOn;
    m_NumState : number = 0;
    m_PanelName : PanelName;
    m_CheckPanelClose : CheckPanelClose;
    m_Interactable : Interactable;
    m_Stamp : number;
    m_CabinetStartPos : Transform;
    m_CabinetEndPos : Transform;
    Start() 
    {
        this.m_CabinetStartPos = Finder.Find("Pos_SecretCabinetStart").transform;
        this.m_CabinetEndPos = Finder.Find("Pos_SecretCabinetEnd").transform;
        this.m_Parent = this.transform.parent;
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_CheckPanelClose = new CheckPanelClose("SecretCabinetPanel");
        this.m_PanelName = this.GetComponent<PanelName>();
        this.m_IsOn = this.GetComponent<IsOn>();    
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_IsOn.m_Value = false;
                if(CheckCabinetIndex.Check(this.m_CabinetIndexList))
                {
                    PanelMgr.Show("SecretCabinetPanel");
                    this.m_NumState++;
                    return ;
                }
                else
                {
                    SetDialog.SetByKey("SecretRoomCabinetDialog");
                }
            }
        }
        else if(this.m_NumState === 1)
        {
            this.m_CheckPanelClose.Init();
            if(this.m_CheckPanelClose.Check())
            {
                this.m_NumState = 0;
                return ;
            }

            if(CheckSecretCabinetIndex.Check(this.m_SecretCabinetIndexList))
            {
                PanelMgr.Hide("SecretCabinetPanel");
                this.m_Stamp = Time.time;
                this.m_Interactable.m_Value = false;
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 2)
        {
            var t = (Time.time - this.m_Stamp) / this.m_CabinetMoveTime;
            this.m_Parent.position = Vector3.Lerp(this.m_CabinetStartPos.position,this.m_CabinetEndPos.position,t);
            if(t>= 1)
                this.m_NumState++;
        }
    }
}