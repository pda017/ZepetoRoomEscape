import { Player } from 'ZEPETO.Multiplay.Schema';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PlayerData {
    public static m_SelectDetectRange : number = 1;
    public static m_SelectDetectAngle : number = 90;
    public static m_PlayerInfoMap : Map<string, Player>;
    public static m_PlayerInfoMapDirty : number = 0;
    public static m_PlayerOrderedList : Player[] = [];
    public static m_PlayerOrderedDirty : number = 0;
    public static Init()
    {
        this.m_PlayerInfoMap = new Map<string,Player>();
        this.m_PlayerOrderedList = [];
    }
}
