import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class InventoryData {
    public static m_InvenList : string[] = [];
    public static m_InvenListDirty : number;
    public static m_SelectIndex : number = 0;
    public static m_EquipedIndex : number = -1;
    public static m_CombineMode : boolean = false;
    public static m_CombineModeDirty : number;
    public static Init()
    {
        this.m_CombineMode = false;
        this.m_InvenList = [];
        this.m_SelectIndex = -1;
        this.m_EquipedIndex = -1;
    }
}