import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class LobbyData {
    public static m_PlayerNumMax : number = 0;
    public static m_PlayerNum : number = 0;
    public static m_ProfileList : PlayerProfileInfo[] = [];
    public static m_ProfileListDirty : number = 0;
}

export class PlayerProfileInfo
{
    public m_bJoined : boolean = false;
    public m_Name : string = "";
    public m_ImageUrl : string = "";
}