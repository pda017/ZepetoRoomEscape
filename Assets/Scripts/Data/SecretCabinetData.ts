import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SecretCabinetData {
    public static m_Count : number = 6;
    public static m_SwitchList : Array<boolean> = [];
    public static m_SwitchDirty : number = 0;
    public static Init()
    {
        this.m_SwitchList = [];
        for(let i =0;i<this.m_Count;i++)
            this.m_SwitchList.push(false);
    }
}