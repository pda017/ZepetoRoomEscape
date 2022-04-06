import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Screen } from 'UnityEngine'
export default class PercentToScreenLength {
    public static Convert(percent : number) : number
    {
        var ratio = percent / 100.0;
        return Screen.height * ratio;
    }
}