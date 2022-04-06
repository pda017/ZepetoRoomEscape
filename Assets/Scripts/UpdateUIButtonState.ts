import { Application, GameObject, Input } from 'UnityEngine';
import { EventTrigger, EventTriggerType } from 'UnityEngine.EventSystems';
import { Entry } from 'UnityEngine.EventSystems.EventTrigger';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Data_Int from './DataType/Data_Int';
export default class UpdateUIButtonState  {
    public m_KeyState : Data_Int;
    public m_bPush : boolean;
    m_EventTrigger : EventTrigger;
    constructor(owner : GameObject,keyState : Data_Int)
    {
        this.m_KeyState = keyState;
        this.m_EventTrigger = owner.GetComponent<EventTrigger>();
        if(this.m_EventTrigger === null)
            this.m_EventTrigger = owner.AddComponent<EventTrigger>();
        
        var pointExit = new Entry();
        pointExit.eventID = EventTriggerType.PointerExit;
        pointExit.callback.AddListener(()=>
        {
            this.m_bPush = false;
        });
        this.m_EventTrigger.triggers.Add(pointExit);

        var pointDown = new Entry();
        pointDown.eventID = EventTriggerType.PointerDown;
        pointDown.callback.AddListener(()=>this.m_bPush = true);
        this.m_EventTrigger.triggers.Add(pointDown);

        var pointUp = new Entry();
        pointUp.eventID = EventTriggerType.PointerUp;
        pointUp.callback.AddListener(()=>this.m_bPush = false);
        this.m_EventTrigger.triggers.Add(pointUp);
    }
    public SetKeyState(keyState : Data_Int)
    {
        this.m_KeyState = keyState;
    }
    public Update()
    {
        if (this.m_bPush)
        {
            if (this.m_KeyState.m_Value <= 0)
                this.m_KeyState.m_Value = 2;
            else if (this.m_KeyState.m_Value === 2)
                this.m_KeyState.m_Value = 1;
        }
        else
        {
            if (this.m_KeyState.m_Value > 0)
                this.m_KeyState.m_Value = -1;
            else if (this.m_KeyState.m_Value === -1)
                this.m_KeyState.m_Value = 0;
        }
    }
}