import { Camera, Canvas, Transform, Vector3 ,Space} from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import KeyInputData from './Data/KeyInputData';
import SelectObjData from './Data/SelectObjData';
import GetZepetoCam from './GetZepetoCam';
import PercentToScreenLength from './PercentToScreenLength';
import UpdateUIButtonState from './UpdateUIButtonState';

export default class UI_SelectButton extends ZepetoScriptBehaviour {
    m_Canvas : Canvas;
    m_Tf : Transform;
    m_Cam : Camera = null;
    m_UpdateUIButton : UpdateUIButtonState;
    Start() {    
        this.m_UpdateUIButton = new UpdateUIButtonState(this.gameObject,KeyInputData.m_SelectKey);
        this.m_Canvas = this.GetComponent<Canvas>();
        this.m_Tf = this.transform;
    }
    Update()
    {
        this.m_UpdateUIButton.Update();
        if(this.m_Cam === null)
        {
            this.m_Cam = GetZepetoCam.Get();
        }
        if(this.m_Cam === null)
            return ;

        if(SelectObjData.m_canSelect)
        {
            this.m_Canvas.enabled = true;
            this.m_Tf.position = this.m_Cam.WorldToScreenPoint(SelectObjData.m_ObjPos);
            this.m_Tf.Translate(0,PercentToScreenLength.Convert(SelectObjData.m_ButtonHeightPer),0,Space.World);
        }
        else
            this.m_Canvas.enabled = false;
    }
}