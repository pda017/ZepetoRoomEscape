import { Canvas, GameObject, SendMessageOptions } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PanelMgr {

    public static Show(panelName : string, tagName : string = "Panel")
    {
        var canvas = this.GetPanel(panelName,tagName);
        if(canvas != null)
            canvas.enabled = true;
    }
    public static ShowWithUpdate(panelName : string, tagName : string = "Panel")
    {
        var canvas = this.GetPanel(panelName,tagName);
        if(canvas != null)
        {
            canvas.enabled = true;
            canvas.BroadcastMessage("Update",SendMessageOptions.DontRequireReceiver);
        }
    }
    public static Hide(panelName : string, tagName : string = "Panel")
    {
        var canvas = this.GetPanel(panelName,tagName);
        if(canvas != null)
            canvas.enabled = false;
    }
    public static GetPanel(panelName : string, tagName : string = "Panel")
    {
        var objs = GameObject.FindGameObjectsWithTag(tagName);
        for(let i = 0;i<objs.length;i++)
        {
            var obj = objs[i];
            if(obj.name === panelName)
            {
                return obj.GetComponent<Canvas>();
            }
        }
        return null;
    }
}