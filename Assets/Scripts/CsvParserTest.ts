import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CsvParser from './CsvParser'

export default class CsvParserTest extends ZepetoScriptBehaviour {

    Start() {    
        var table = CsvParser.LoadTextAsset("Test");
        console.log(table.length);
        table.forEach(lineValue=>
        {
            console.log("##LineStart");
            lineValue.forEach(tokenValue=>
            {
                console.log(tokenValue);
            });
            console.log("##LineEnd");
        });
    }

}