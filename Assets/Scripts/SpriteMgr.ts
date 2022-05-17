import { GameObject, Resources, Sprite } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SpriteMgr extends ZepetoScriptBehaviour {
    public m_SpriteList : Sprite[] = [];
    public m_SpriteMap : Map<string,Sprite> = null;
    public static m_Inst : SpriteMgr = null;
    public static GetInst() : SpriteMgr
    {
        if(this.m_Inst == null)
            this.m_Inst = GameObject.FindObjectOfType<SpriteMgr>();
        return this.m_Inst;
    } 
    public Awake()
    {
        if(this.m_SpriteMap == null)
        {
            this.m_SpriteMap = new Map<string,Sprite>();
            this.m_SpriteList.forEach(value=>
                {
                    if(this.m_SpriteMap.has(value.name))
                        console.log("##SpriteMgr:Sprites already exist");
                    else
                        this.m_SpriteMap.set(value.name,value);
                });
        }
    }
    public static Reset()
    {
        this.GetInst().m_SpriteMap = null;
    }
    public static Get(key : string) : Sprite
    {
        return this.GetInst().m_SpriteMap.get(key);
    }
}