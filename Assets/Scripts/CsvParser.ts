import { Resources, TextAsset } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class CsvParser 
{
    public static m_IgnoreChar : number[]=
    [
        13
    ];
    public static Parse(csvText : string) : Array<Array<string>>
    {
        var state:number = 0;
        var tableArr = new Array<Array<string>>();
        var token:string = "";
        var lineArr:Array<string> = new Array<string>();
        for(let i=0;i<csvText.length;i++)
        {
            var c = csvText.charAt(i);
            var nextChar = "";
            if(i+1 < csvText.length)
                nextChar = csvText.charAt(i+1);
            var asciiCode = csvText.codePointAt(i);
            if(this.m_IgnoreChar.includes(asciiCode))
                continue;

            if(state === 0)
            {
                if(c === '"')
                {
                    state = 1;
                    continue;
                }

                if(c === ",")
                {
                    lineArr.push(token);
                    token = "";
                }
                else if(c === "\n")
                {
                    lineArr.push(token);
                    tableArr.push(lineArr);
                    lineArr = new Array<string>();
                    token = "";
                }
                else
                    token += c;
            }
            if(state === 1)
            {
                if(c === '"' && nextChar === '"')
                {
                    i++;
                    c = csvText.charAt(i);
                }
                else if(c === '"')
                {
                    state = 0;
                    continue;
                }
                token += c;
            }
        }
        lineArr.push(token);
        tableArr.push(lineArr);
        return tableArr;
    }
    public static LoadTextAsset(path : string) : Array<Array<string>>
    {
        var textAsset = Resources.Load<TextAsset>(path);
        return this.Parse(textAsset.text);
    } 
}