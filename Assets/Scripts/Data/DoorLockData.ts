import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class DoorLockData {
    public static m_Password : string;
    public static m_PasswordDirty : number;
    public static m_InputDone : boolean;
    public static m_PasswordLimit : number = 6;
    public static Init()
    {
        this.m_InputDone = false;
        this.m_Password = "";
    }
}