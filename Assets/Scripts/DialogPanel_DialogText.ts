import { Text } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogData from './Data/DialogData';
import WaitTime from './WaitTime';

export default class DialogPanel_DialogText extends ZepetoScriptBehaviour {
    m_Text : Text;
    m_NumState : number = 0;    
    m_DialogIndex : number = 0;
    m_WaitTime : WaitTime = new WaitTime();
    Start() 
    {    
        this.m_Text = this.GetComponent<Text>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(DialogData.m_DialogPlaying)
            {
                this.m_DialogIndex = 0;
                if(this.m_DialogIndex >= DialogData.m_DialogText.length)
                {
                    DialogData.m_DialogPlaying = false;
                    return;
                }
                this.m_Text.text = DialogData.m_DialogText.charAt(this.m_DialogIndex);
                this.m_DialogIndex++;
                this.m_WaitTime.Start();
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            if(this.m_WaitTime.End(DialogData.m_DialogTextDelay))
            {
                this.m_WaitTime.Start();
                this.m_Text.text += DialogData.m_DialogText.charAt(this.m_DialogIndex);
                this.m_DialogIndex++;
                if(this.m_DialogIndex >= DialogData.m_DialogText.length)
                {
                    this.m_NumState++;
                    return;
                }
            }
        }
        else if(this.m_NumState === 2)
        {
            if(this.m_WaitTime.End(DialogData.m_DialogShowDuration))
            {
                DialogData.m_DialogPlaying = false;
                this.m_NumState = 0;
            }
        }
    }
}