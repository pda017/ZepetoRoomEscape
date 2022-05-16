import { Application, Screen, SleepTimeout } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class DontSleep extends ZepetoScriptBehaviour {

    Start() {  
        Screen.sleepTimeout = SleepTimeout.NeverSleep;
    }

}