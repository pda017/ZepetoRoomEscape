import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CsvParser from '../CsvParser';

export default class CombineData {
    public static m_CombineMap : Map<string,CombineInfo> = null;
    public static GetCombineMap()
    {
        if(this.m_CombineMap == null)
        {
            this.m_CombineMap = new Map<string,CombineInfo>();
            var table = CsvParser.LoadTextAsset("DT_CombineTable");
            if(table.length !== 0)
            {
                var colArr = table[0];
                for(let i =1;i<table.length;i++)
                {
                    var line = table[i];
                    var info = new CombineInfo();
                    line.forEach((tokenValue,tokenIndex)=>
                    {
                        var col = colArr[tokenIndex];
                        if(col === "Key")
                            info.m_Key = tokenValue;
                        else if(col.includes("Mat"))
                            info.m_MatSet.add(tokenValue);
                        else if(col === "Result")
                            info.m_Result = tokenValue;
                        else if(col === "Event")
                            info.m_Event = tokenValue;
                    });
                    this.m_CombineMap.set(info.m_Key,info);
                }
            }
        }
        return this.m_CombineMap;
    }
}

export class CombineInfo
{
    public m_Key : string;
    public m_MatSet : Set<string> = new Set<string>();
    public m_Result : string;
    public m_Event : string;
}