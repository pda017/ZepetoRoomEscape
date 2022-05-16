import { GameObject, Quaternion, Resources, Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PrefabMgr extends ZepetoScriptBehaviour{
    public m_PrefabList : GameObject[] = [];
    public m_PrefabMap : Map<string,GameObject> = null;
    static m_Inst : PrefabMgr = null;
    public static GetInst() : PrefabMgr
    {
        if(this.m_Inst == null)
            this.m_Inst = GameObject.FindObjectOfType<PrefabMgr>();
        return this.m_Inst;
    }
    Awake()
    {
        this.m_PrefabMap = new Map<string,GameObject>();
        this.m_PrefabList.forEach(value=>
            {
                this.m_PrefabMap.set(value.name,value);
            });
    }
    public static Get(prefabName : string) : GameObject
    {
        return this.GetInst().m_PrefabMap.get(prefabName);
    }
    public static Create(prefabName : string,pos : Vector3 = Vector3.zero,rot : Quaternion = Quaternion.identity) : GameObject
    {
        var prefabObj = this.Get(prefabName);
        return GameObject.Instantiate(prefabObj,pos,rot) as GameObject;
    }
}