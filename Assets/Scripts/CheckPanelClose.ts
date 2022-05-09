import { Canvas } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import PanelMgr from './PanelMgr';

export default class CheckPanelClose {
    m_Canvas : Canvas;
    m_PanelName : string;
    constructor(panelName : string = "")
    {
        if(panelName == "")
            return ;
        this.m_PanelName = panelName;
        this.Init();
        
    }
    public Init()
    {
        if(this.m_Canvas == null)
            this.m_Canvas = PanelMgr.GetPanel(this.m_PanelName);
    }
    public Check() : boolean
    {
        this.Init();
        if(this.m_Canvas == null)
             return false;  
        if(!this.m_Canvas.enabled)
            return true;
        return false;
    }
}