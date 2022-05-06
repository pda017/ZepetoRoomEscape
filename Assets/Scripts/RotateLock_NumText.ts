import { Transform } from 'UnityEngine';
import { Text } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import RotateLockData from './Data/RotateLockData';
import RotatePasswordChanged from './RotatePasswordChanged';

export default class RotateLock_NumText extends ZepetoScriptBehaviour {
    m_Text : Text;
    m_RotatePasswordChanged : RotatePasswordChanged = new RotatePasswordChanged();
    m_Tf : Transform;
    Start() {    
        this.m_Tf = this.transform;
        this.m_Text = this.GetComponent<Text>();
    }
    Update()
    {
        if(this.m_RotatePasswordChanged.Check())
        {
            var index = this.m_Tf.GetSiblingIndex();
            this.m_Text.text = RotateLockData.m_PasswordArr[index].toString();
        }
    }
}