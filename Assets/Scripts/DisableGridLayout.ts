import { GridLayoutGroup } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class DisableGridLayout extends ZepetoScriptBehaviour {

    Start() {    
        this.GetComponent<GridLayoutGroup>().enabled = false;
    }

}