import { Mathf } from 'UnityEngine';
import { Text } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import TimerData from './Data/TimerData';
import GetTimerColor from './GetTimerColor';
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
            var remainTime = Mathf.Clamp(TimerData.m_RemainTime,0,Number.MAX_SAFE_INTEGER);
            var date = new Date(remainTime * 1000);
            this.m_Text.text = date.getMinutes() + ":" + date.getSeconds();
            this.m_Text.color = GetTimerColor.Get();
        }
    }
}