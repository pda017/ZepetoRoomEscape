import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class DialogData {
    public static m_DialogText : string = "";
    public static m_DialogTextDelay : number = 0.1;
    public static m_DialogShowDuration : number = 2;
    public static m_DialogPlaying : boolean = false;
    public static m_NoticeText : string = "";
    public static m_NoticeDirty : number;
    public static m_NoticeTime : number = 2;
    public static m_NoticePlaying : boolean = false;
    public static Init()
    {
        this.m_DialogText = "";
        this.m_NoticeText = "";
        this.m_NoticePlaying = false;
        this.m_DialogPlaying = false;
    }
}