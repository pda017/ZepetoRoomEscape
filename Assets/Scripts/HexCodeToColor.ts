import { Color, ColorUtility } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class HexCodeToColor {
    public static Convert(hexCode : string) : Color
    {
        var value = $ref<Color>();
        if(ColorUtility.TryParseHtmlString(hexCode,value))
            return value.value;
        return Color.white;
    }
}