import { GameObject, Time } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Finder from '../Finder';
import Interactable from '../Interactable';

export default class Event_Room2_Hammer extends ZepetoScriptBehaviour {

    Start() {    
        var cabinetInteractable = Finder.Find("Room2_Cabinet").GetComponent<Interactable>();
        cabinetInteractable.m_Value = true;
        cabinetInteractable.m_Dirty = Time.time;
        GameObject.Destroy(this.gameObject);
    }

}