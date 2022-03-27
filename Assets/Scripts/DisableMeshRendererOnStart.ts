import { MeshRenderer } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class DisableMeshRendererOnStart extends ZepetoScriptBehaviour {

    Start() {    
        this.GetComponent<MeshRenderer>().enabled = false;
    }

}