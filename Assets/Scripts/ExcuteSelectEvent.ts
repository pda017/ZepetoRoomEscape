import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import PrefabMgr from './PrefabMgr';
import SelectEventKey from './SelectEventKey';

export default class ExcuteSelectEvent {
    public static Excute(target : GameObject)
    {
        var eventKey = target.GetComponentInParent<SelectEventKey>();
        if(eventKey != null)
        {
            PrefabMgr.Create(eventKey.m_Value);
        }
    }
}