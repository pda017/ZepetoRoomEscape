import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import DoorLockData from './Data/DoorLockData';

export default class DoorLockPanel_NumButton extends ZepetoScriptBehaviour {
    public m_PadKey : string = "";
    Start() {
        ButtonEvent.Add(this.gameObject,()=>
        {
            DoorLockData.m_Password += this.m_PadKey;
            DoorLockData.m_PasswordDirty++;
        });
    }
}