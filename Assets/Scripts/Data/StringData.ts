import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CsvParser from '../CsvParser';

export default class StringData {
    public static m_StringMap : Map<string,string> = null;
    public static GetStringMap() : Map<string,string>
    {
        if(this.m_StringMap == null)
        {
            this.m_StringMap = new Map<string,string>();
            var table = CsvParser.LoadTextAsset("DataTable/StringTable");
            if(table.length !== 0)
            {
                var colArr = table[0];
                for(let i =1;i<table.length;i++)
                {
                    var line = table[i];
                    var key = "";
                    var value = "";
                    line.forEach((tokenValue,tokenIndex)=>
                    {
                        var col = colArr[tokenIndex];
                        if(col === "Key")
                            key = tokenValue;
                        else if(col === "Korean")
                            value = tokenValue;
                    });
                    this.m_StringMap.set(key,value);
                }
            }
        }
        return this.m_StringMap;
    }
}