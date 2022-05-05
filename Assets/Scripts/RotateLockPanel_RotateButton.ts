import { Time, Transform } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import RotateLockData from './Data/RotateLockData';

export default class RotateLockPanel_RotateButton extends ZepetoScriptBehaviour {
    m_Tf : Transform;
    Start() {    
        this.m_Tf = this.transform;
        ButtonEvent.Add(this.gameObject,()=>
        {
            var index = this.m_Tf.GetSiblingIndex();
            RotateLockData.m_PasswordArr[index]++;
            if(RotateLockData.m_PasswordArr[index] > 9)
                RotateLockData.m_PasswordArr[index] = 0;
            RotateLockData.m_Password = "";
            RotateLockData.m_PasswordArr.forEach(v=>
                {
                    RotateLockData.m_Password += v;
                });
            RotateLockData.m_PasswordDirty++;
            //console.log(RotateLockData.m_Password);
        });
    }

}