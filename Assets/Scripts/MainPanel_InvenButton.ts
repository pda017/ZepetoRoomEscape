import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import PanelMgr from './PanelMgr';

export default class MainPanel_InvenButton extends ZepetoScriptBehaviour {

    Start() 
    {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            PanelMgr.Show("InvenPanel");
        });
    }

}