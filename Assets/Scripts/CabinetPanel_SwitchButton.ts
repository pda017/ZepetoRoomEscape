import { CanvasGroup, Transform } from 'UnityEngine';
import { Image } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import CabinetData from './Data/CabinetData';

export default class CabinetPanel_SwitchButton extends ZepetoScriptBehaviour {
    m_CanvasGroup : CanvasGroup;
    m_Tf : Transform;
    Start() {    
        this.m_Tf = this.transform;
        this.m_CanvasGroup = this.GetComponent<CanvasGroup>();
        ButtonEvent.Add(this.gameObject,()=>
        {
            var index = this.m_Tf.GetSiblingIndex();
            if(index < CabinetData.m_SwitchList.length)
            {
                CabinetData.m_SwitchList[index] = !CabinetData.m_SwitchList[index];
                CabinetData.m_SwitchDirty++;
            }
        });
    }
    Update()
    {
        var index = this.m_Tf.GetSiblingIndex();
        if(index < CabinetData.m_SwitchList.length)
        {
            if(CabinetData.m_SwitchList[index])
                this.m_CanvasGroup.alpha = 0;
            else
                this.m_CanvasGroup.alpha = 1;
        }
    }
}