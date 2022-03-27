import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ZState extends ZepetoScriptBehaviour {
    public m_Value : StateEnum;
    public m_Dirty : number;
}

export enum StateEnum
{
    GameScene,
}