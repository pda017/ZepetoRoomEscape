import { Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Finder from '../Finder';
import Interactable from '../Interactable';
import IsOn from '../IsOn'

export default class Obj_Room2_OpenButton extends ZepetoScriptBehaviour {
    m_Interactable : Interactable;
    m_IsOn : IsOn;
    m_NumState : number = 0;
    Start() {    
        this.m_IsOn = this.GetComponent<IsOn>();
        this.m_Interactable = this.GetComponent<Interactable>();
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_IsOn.m_Value)
            {
                this.m_Interactable.m_Value = false;
                this.m_Interactable.m_Dirty = Time.time;
                var exitDoorOn = Finder.Find("Room2_ExitDoor").GetComponent<IsOn>();
                exitDoorOn.m_Value = true;
                exitDoorOn.m_Dirty = Time.time;
                this.m_NumState++;
            }
        }
    }
}