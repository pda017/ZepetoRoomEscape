import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class InventoryData {
    public static m_InvenList : string[] = [];
    public static m_InvenListDirty : number;
    public static m_SelectIndex : number = 0;
    public static m_EquipedIndex : number = -1;
    public static Init()
    {
        this.m_InvenList = [];
        this.m_SelectIndex = -1;
        this.m_EquipedIndex = -1;
    }
}