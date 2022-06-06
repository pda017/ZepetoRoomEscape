import { Text } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import LobbyData from './Data/LobbyData';

export default class LobbyPanel_PlayerNumText extends ZepetoScriptBehaviour {
    m_Text : Text;
    m_NumDirty : number = Number.MIN_SAFE_INTEGER;
    m_ReadyDirty : number = Number.MIN_SAFE_INTEGER;
    Start() {    
        this.m_Text = this.GetComponent<Text>();
    }
    Update()
    {
        if(this.m_NumDirty != LobbyData.m_PlayerNum || this.m_ReadyDirty != LobbyData.m_ReadyNum)
        {
            this.m_NumDirty = LobbyData.m_PlayerNum;
            this.m_ReadyDirty = LobbyData.m_ReadyNum;
            this.m_Text.text = LobbyData.m_ReadyNum + "/" + LobbyData.m_PlayerNum;
        }
    }
}