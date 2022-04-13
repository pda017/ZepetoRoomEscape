import { GameObject } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddToFinder from './AddToFinder';

export default class Finder extends ZepetoScriptBehaviour{
    public m_ObjMap : Map<string,GameObject> = new Map<string,GameObject>();
    static m_Inst : Finder;
    public static GetInst() : Finder
    {
        if(this.m_Inst == null)
            this.m_Inst = GameObject.FindObjectOfType<Finder>();
        return this.m_Inst;
    }
    public static Add(obj : GameObject)
    {
        var inst = this.GetInst();
        inst.m_ObjMap.set(obj.name,obj);
    }
    public static Find(objName : string) : GameObject
    {
        return this.GetInst().m_ObjMap.get(objName);
    }
}