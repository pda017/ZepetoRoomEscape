import { Resources, Sprite } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SpriteMgr {
    public static m_SpriteMap : Map<string,Sprite> = null;
    public static Init()
    {
        if(this.m_SpriteMap == null)
        {
            this.m_SpriteMap = new Map<string,Sprite>();
            var arr = Resources.LoadAll("Sprites");
            arr.forEach(value=>
                {
                    if(value instanceof Sprite)
                        this.m_SpriteMap.set(value.name,value);
                });
        }
    }
    public static Reset()
    {
        this.m_SpriteMap = null;
    }
    public static Get(key : string) : Sprite
    {
        this.Init();
        return this.m_SpriteMap.get(key);
    }
}