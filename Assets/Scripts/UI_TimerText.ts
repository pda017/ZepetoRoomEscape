import { Text } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import TimerData from '../Data/TimerData';
export default class UI_TimerText extends ZepetoScriptBehaviour {
    m_Text : Text;
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    Start() {    
        this.m_Text = this.GetComponent<Text>();
    }
    Update()
    {
        if(this.m_Dirty !== TimerData.m_RemainTime)
        {
            this.m_Dirty = TimerData.m_RemainTime;
            var date = new Date(TimerData.m_RemainTime * 1000);
            this.m_Text.text = date.getMinutes() + ":" + date.getSeconds();
        }
    }
}