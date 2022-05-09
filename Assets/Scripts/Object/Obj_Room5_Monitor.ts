import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import IsOn from '../IsOn';
import ItemDialog from '../ItemDialog';
import PanelMgr from '../PanelMgr';
import PanelName from '../PanelName';
import SetDialog from '../SetDialog';

export default class Obj_Room5_Monitor extends ZepetoScriptBehaviour {
    m_IsOn : IsOn;
    m_NumState : number = 0;
    m_PanelName : PanelName;
    Start() 
    {
        this.m_PanelName = this.GetComponent<PanelName>();
        this.m_IsOn = this.GetComponent<IsOn>();    
    }
    Update()
    {
        if(this.m_IsOn.m_Value)
        {
            this.m_IsOn.m_Value = false;
            PanelMgr.Show(this.m_PanelName.m_Value);
        }
    }
}