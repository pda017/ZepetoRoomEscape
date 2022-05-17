import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CsvParser from '../CsvParser';

export default class DisassemblyData {
    public static m_DisassemblyMap : Map<string,DisassemblyInfo> = null;
    public static GetDisassemblyMap()
    {
        if(this.m_DisassemblyMap == null)
        {
            this.m_DisassemblyMap = new Map<string,DisassemblyInfo>();
            var table = CsvParser.LoadTextAsset("DT_DisassemblyTable");
            if(table.length !== 0)
            {
                var colArr = table[0];
                for(let i =1;i<table.length;i++)
                {
                    var line = table[i];
                    var info = new DisassemblyInfo();
                    line.forEach((tokenValue,tokenIndex)=>
                    {
                        var col = colArr[tokenIndex];
                        if(col === "Key")
                            info.m_Key = tokenValue;
                        else if(col.includes("Mat"))
                        {
                            if(tokenValue != null && tokenValue != "")
                                info.m_MatList.push(tokenValue);
                        }
                        else if(col === "Event")
                            info.m_Event = tokenValue; 
                    });
                    this.m_DisassemblyMap.set(info.m_Key,info);
                }
            }
        }
        return this.m_DisassemblyMap;
    }
}

export class DisassemblyInfo
{
    public m_Key : string;
    public m_MatList : Array<string> = new Array<string>();
    public m_Event : string;
}