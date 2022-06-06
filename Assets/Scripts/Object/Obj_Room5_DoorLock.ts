import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DoorLockData from '../Data/DoorLockData';
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn';
import PanelMgr from '../PanelMgr';
import SetDialog from '../SetDialog';
import SetNotice from '../SetNotice';
import ShowDoorLock from '../ShowDoorLock';

export default class Obj_Room5_DoorLock extends ZepetoScriptBehaviour {
    public m_Password : string;
    public m_DoorKey : string;
    m_IsOn : IsOn;
    m_NumState : number = 0;
    m_FuseOn : IsOn;
    m_Interactable : Interactable;
    Start() {    
        this.m_Interactable = this.GetComponent<Interactable>();
        this.m_IsOn = this.GetComponent<IsOn>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                ShowDoorLock.Show("DoorLockPanel",this.m_Password.length);
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            if(DoorLockData.m_InputDone)
            {
                if(DoorLockData.m_Password === this.m_Password)
                {
                    this.m_Interactable.m_Value = false;
                    SetNotice.SetByKey("Room3_correctDoorLockNotice");
                    Finder.Find(this.m_DoorKey).GetComponent<IsOn>().m_Value = true;
                    this.m_NumState++;
                    return ;
                }
                if(DoorLockData.m_Password.length >= 6)
                    SetDialog.SetByKey("Room3_IncorrectDoorLockDialog");
                this.m_IsOn.m_Value = false;
                this.m_NumState = 0;
            }
        }
    }
}