import { Time } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class TimeTest extends ZepetoScriptBehaviour {

    Start() {    

    }
    Update()
    {
        console.log(Time.time);
    }
}