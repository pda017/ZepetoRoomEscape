import { GameObject, Quaternion, Resources, Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PrefabMgr {
    public static m_PrefabMap : Map<string,GameObject> = null;
    public static Load()
    {
        var arr = Resources.LoadAll<GameObject>("Prefabs");
        this.m_PrefabMap = new Map<string,GameObject>();
        arr.forEach(value=>
            {
                this.m_PrefabMap.set(value.name,value);
            });
    }
    public static Init()
    {
        if(this.m_PrefabMap == null)
            this.Load();
    }
    public static Get(prefabName : string) : GameObject
    {
        return this.m_PrefabMap.get(prefabName);
    }
    public static Create(prefabName : string,pos : Vector3 = Vector3.zero,rot : Quaternion = Quaternion.identity) : GameObject
    {
        var prefabObj = this.Get(prefabName);
        return GameObject.Instantiate(prefabObj,pos,rot) as GameObject;
    }
}