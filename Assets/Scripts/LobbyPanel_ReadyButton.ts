import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import LobbyData from './Data/LobbyData';

export default class LobbyPanel_ReadyButton extends ZepetoScriptBehaviour {
    
    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            LobbyData.m_bReady = !LobbyData.m_bReady;
            LobbyData.m_ReadyDirty++;
        });
    }

}