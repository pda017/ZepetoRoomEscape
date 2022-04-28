import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import DoorLockData from './Data/DoorLockData';

export default class DoorLockPanel_NumButton extends ZepetoScriptBehaviour {
    Start() {
        var index = this.transform.GetSiblingIndex();    
        ButtonEvent.Add(this.gameObject,()=>
        {
            DoorLockData.m_Password += (index+1).toString();
            DoorLockData.m_PasswordDirty++;
        });
    }
}