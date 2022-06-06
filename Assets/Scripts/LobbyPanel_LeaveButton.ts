import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import LobbyData from './Data/LobbyData';

export default class LobbyPanel_LeaveButton extends ZepetoScriptBehaviour {

    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            LobbyData.m_bLeave = true;
        });
    }

}