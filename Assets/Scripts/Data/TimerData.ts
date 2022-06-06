import { Color, ColorUtility } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import HexCodeToColor from '../HexCodeToColor';

export default class TimerData {
    public static m_RemainTime : number; 
    public static m_TimeColorList : TimerColorInfo[];
    public static Init()
    {
        this.m_TimeColorList = [];
        this.m_TimeColorList.push(new TimerColorInfo(3600,HexCodeToColor.Convert("#00004E")));
        this.m_TimeColorList.push(new TimerColorInfo(3000,HexCodeToColor.Convert("#7030A0")));
        this.m_TimeColorList.push(new TimerColorInfo(2400,HexCodeToColor.Convert("#6B72C4")));
        this.m_TimeColorList.push(new TimerColorInfo(1800,HexCodeToColor.Convert("#70AD47")));
        this.m_TimeColorList.push(new TimerColorInfo(1200,HexCodeToColor.Convert("#FEC000")));
        this.m_TimeColorList.push(new TimerColorInfo(600,HexCodeToColor.Convert("#ED7D31")));
        this.m_TimeColorList.push(new TimerColorInfo(60,HexCodeToColor.Convert("#FD0000")));
    }
}

export class TimerColorInfo
{
    public m_Time : number = 0;
    public m_Color : Color = Color.white;
    constructor(time : number,color : Color)
    {
        this.m_Time = time;
        this.m_Color = color;
    }
}