import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import SafeBoxData from './Data/SafeBoxData';

export default class SafeBoxPanel_EnterButton extends ZepetoScriptBehaviour {

    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            SafeBoxData.m_bEnter = true;
            SafeBoxData.m_InputDirty++;
        });
    }

}