import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DoorLockData from './Data/DoorLockData';
import PanelMgr from './PanelMgr';

export default class ShowDoorLock {
    public static Show(panelName : string,passwordLimit : number)
    {
        PanelMgr.Show(panelName);
        DoorLockData.m_PasswordLimit = passwordLimit;
        DoorLockData.m_InputDone = false;
        DoorLockData.m_Password = "";
        DoorLockData.m_PasswordDirty++;
    }
}