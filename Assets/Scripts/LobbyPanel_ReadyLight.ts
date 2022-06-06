import { Image } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import LobbyData from './Data/LobbyData';

export default class LobbyPanel_ReadyLight extends ZepetoScriptBehaviour {
    m_Image : Image;
    Start() {    
        this.m_Image = this.GetComponent<Image>();
    }
    Update()
    {
        if(LobbyData.m_bReady)
            this.m_Image.enabled = true;
        else
            this.m_Image.enabled = false;
    }
}