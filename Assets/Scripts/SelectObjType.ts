import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SelectObjType extends ZepetoScriptBehaviour {
    public m_Value : SelectObjEnum;
    public m_Dirty : number;
}

export enum SelectObjEnum
{
    Item,
    Switch,
}