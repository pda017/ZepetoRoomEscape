import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class RotateLockData {
    public static m_PasswordArr : number[] = [0,0,0,0];
    public static m_Password : string = "";
    public static m_PasswordDirty : number = 0;
    public static Init()
    {
        this.m_PasswordArr = [0,0,0,0];
        this.m_Password = "";
    }
}