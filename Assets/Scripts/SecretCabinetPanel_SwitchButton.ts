import { CanvasGroup, Transform } from 'UnityEngine';
import { Image } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import CabinetData from './Data/CabinetData';
import SecretCabinetData from './Data/SecretCabinetData';

export default class SecretCabinetPanel_SwitchButton extends ZepetoScriptBehaviour {
    m_CanvasGroup : CanvasGroup;
    m_Tf : Transform;
    Start() {    
        this.m_Tf = this.transform;
        this.m_CanvasGroup = this.GetComponent<CanvasGroup>();
        ButtonEvent.Add(this.gameObject,()=>
        {
            var index = this.m_Tf.GetSiblingIndex();
            SecretCabinetData.m_SwitchList.forEach((v,i)=>
            {
                if(index === i)
                    SecretCabinetData.m_SwitchList[index] = !SecretCabinetData.m_SwitchList[index];
                else
                    SecretCabinetData.m_SwitchList[i] = false;
            });
            SecretCabinetData.m_SwitchDirty++;
        });
    }
    Update()
    {
        var index = this.m_Tf.GetSiblingIndex();
        if(index < SecretCabinetData.m_SwitchList.length)
        {
            if(SecretCabinetData.m_SwitchList[index])
                this.m_CanvasGroup.alpha = 0;
            else
                this.m_CanvasGroup.alpha = 1;
        }
    }
}