import { Canvas } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogData from './Data/DialogData';
import WaitTime from './WaitTime';

export default class NoticePanel extends ZepetoScriptBehaviour {
    m_Canvas : Canvas;
    m_WaitTime : WaitTime = new WaitTime();
    m_NumState : number = 0;
    Start() {    
        this.m_Canvas = this.GetComponent<Canvas>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(DialogData.m_NoticePlaying)
            {
                this.m_WaitTime.Start();
                this.m_Canvas.enabled = true;
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            if(this.m_WaitTime.End(DialogData.m_NoticeTime))
            {
                DialogData.m_NoticePlaying = false;
                this.m_Canvas.enabled = false;
                this.m_NumState = 0;
            }
        }
    }
}