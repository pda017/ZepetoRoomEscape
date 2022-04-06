import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class CharCompareTest extends ZepetoScriptBehaviour {

    Start() {    
        console.log("EnterCode:"+"\n".codePointAt(0));
        console.log("test\ntest");
        console.log('"');
    }

}