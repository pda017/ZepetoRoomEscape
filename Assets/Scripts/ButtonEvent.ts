import { GameObject } from 'UnityEngine';
import { UnityAction } from 'UnityEngine.Events';
import { Button } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ButtonEvent {
    public static Add(owner : GameObject, onClickEvent : UnityAction)
    {
        owner.GetComponent<Button>().onClick.AddListener(onClickEvent);
    }
}