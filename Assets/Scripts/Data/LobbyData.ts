import { Texture ,Sprite} from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class LobbyData {
    public static m_PlayerNumMax : number = 0;
    public static m_PlayerNum : number = 0;
    public static m_ReadyNum : number = 0;
    public static m_ProfileList : PlayerProfileInfo[] = [];
    public static m_ProfileListDirty : number = 0;
    public static m_bReady : boolean = false;
    public static m_ReadyDirty : number = 0;
    public static m_bLeave : boolean = false;
    public static Init()
    {
        this.m_bLeave = false;
        this.m_ReadyNum = 0;
        this.m_bReady = false;
        this.m_ProfileList = [];
        this.m_PlayerNum = 0;
        this.m_PlayerNumMax = 0;
    }
}

export class PlayerProfileInfo
{
    public m_SeesionId : string = "";
    public m_Name : string = "";
    public m_Sprite : Sprite = null;
}