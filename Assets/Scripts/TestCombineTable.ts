import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CombineData from './Data/CombineData'

export default class TestCombineTable extends ZepetoScriptBehaviour {

    Start() {    
        var map = CombineData.GetCombineMap();
        map.forEach(value=>
            {
                console.log("##Start Key:"+value.m_Key);
                value.m_MatSet.forEach(mat=>console.log("##Mat:"+mat));
                console.log("##Result:"+ value.m_Result);
                console.log("##End");
            });
    }

}