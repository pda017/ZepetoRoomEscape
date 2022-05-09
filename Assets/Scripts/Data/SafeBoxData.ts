import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SafeBoxData {
    public static m_bReset : boolean = false;
    public static m_RotateTime :number = 0.5;
    public static m_RotatorAngle : number = 0;
    public static m_InputDirty : number = 0;
    public static m_InputCommand : string = "";
    public static m_bEnter = false;
    public static Init()
    {
        this.m_bReset = true;
        this.m_bEnter = false;
        this.m_RotatorAngle = 0;
        this.m_InputDirty = 0;
        this.m_InputCommand = "";
    }
}