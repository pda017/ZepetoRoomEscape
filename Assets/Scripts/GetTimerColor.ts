import { Color } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import TimerData from './Data/TimerData';

export default class GetTimerColor {
    public static Get() : Color
    {
        var color = Color.white;
        for(let i =0; i<TimerData.m_TimeColorList.length;i++)
        {
            var info = TimerData.m_TimeColorList[i];
            if(TimerData.m_RemainTime <= info.m_Time)
                color = info.m_Color;
            else
                break;
        }
        return color;
    }
}