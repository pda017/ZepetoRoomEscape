import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Screen } from 'UnityEngine'
import { ScreenOrientation } from 'UnityEngine'
export default class FixedOrientation extends ZepetoScriptBehaviour 
{
    Update()
    {
        if(Screen.orientation !== ScreenOrientation.Landscape)
            Screen.orientation = ScreenOrientation.Landscape;
    }
}