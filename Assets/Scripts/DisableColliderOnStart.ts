import { Collider } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class DisableColliderOnStart extends ZepetoScriptBehaviour {

    Start() {    
        this.GetComponent<Collider>().enabled = false;
    }

}