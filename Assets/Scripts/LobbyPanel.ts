import { Canvas } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import LobbyData from './Data/LobbyData';

export default class LobbyPanel extends ZepetoScriptBehaviour {
    m_NumState : number = 0;
    m_Canvas : Canvas;
    Start() {    
        this.m_Canvas = this.GetComponent<Canvas>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(LobbyData.m_PlayerNum === LobbyData.m_ReadyNum)
            {
                this.m_Canvas.enabled = false;
                this.m_NumState++;
            }
        }
    }
}