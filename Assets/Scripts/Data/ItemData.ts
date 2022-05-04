import { GameObject, Resources } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CsvParser from '../CsvParser';

export default class ItemData {
    public static m_ItemMap : Map<string,ItemInfo> = null;
    public static GetItemMap() : Map<string,ItemInfo>
    {
        if(this.m_ItemMap === null)
        {
            this.m_ItemMap = new Map<string,ItemInfo>();
            var table = CsvParser.LoadTextAsset("DataTable/ItemTable");
            if(table.length !== 0)
            {
                var colArr = table[0];
                for(let i =1;i<table.length;i++)
                {
                    var line = table[i];
                    var info = new ItemInfo();
                    line.forEach((tokenValue,tokenIndex)=>
                    {
                        var col = colArr[tokenIndex];
                        if(col === "Key")
                            info.m_Key = tokenValue;
                        else if(col === "ItemName")
                            info.m_ItemName = tokenValue;
                        else if(col === "Icon")
                            info.m_Icon = tokenValue;
                        else if(col === "Desc")
                            info.m_Desc = tokenValue;
                        else if(col === "Prefab")
                            info.m_Prefab = tokenValue;
                        else if(col === "UseItem")
                            info.m_UseItem = JSON.parse(tokenValue.toLowerCase());
                        else if(col === "Disposable")
                            info.m_Disposable = JSON.parse(tokenValue.toLowerCase());
                        else if(col === "UseEvent")
                            info.m_UseEvent = tokenValue;
                    });
                    this.m_ItemMap.set(info.m_Key,info);
                }
            }
        }
        return this.m_ItemMap;
    }
}

export class ItemInfo
{
    public m_Key : string;
    public m_ItemName : string;
    public m_Icon : string;
    public m_Desc : string;
    public m_Prefab : string;
    public m_UseItem : boolean;
    public m_Disposable: boolean;
    public m_UseEvent : string;
}