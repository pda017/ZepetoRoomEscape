import { Mathf, Quaternion, Time, Transform } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import SafeBoxData from './Data/SafeBoxData';
import SafeBoxInputChanged from './SafeBoxInputChanged';

export default class SafeBoxPanel_Rotator extends ZepetoScriptBehaviour {
    m_Tf : Transform;
    m_SafeBoxInputChanged : SafeBoxInputChanged = new SafeBoxInputChanged();
    m_NumState : number = 0;
    m_Stamp : number = 0;
    m_StartAngle : number = 0;
    m_EndAngle : number = 0;
    Start() {    
        this.m_Tf = this.transform;
    }
    Update()
    {
        if(SafeBoxData.m_bReset)
        {
            SafeBoxData.m_bReset = false;
            this.m_Tf.rotation = Quaternion.identity;
            this.m_StartAngle = 0;
        }

        if(this.m_NumState === 0)
        {
            if(this.m_SafeBoxInputChanged.Check())
            {
                this.m_EndAngle = SafeBoxData.m_RotatorAngle;
                this.m_Stamp = Time.time;
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 1)
        {
            var t = (Time.time - this.m_Stamp) / SafeBoxData.m_RotateTime;
            this.m_Tf.rotation = Quaternion.Euler(0,0,Mathf.Lerp(this.m_StartAngle,this.m_EndAngle,t));
            if(t>= 1)
            {
                this.m_StartAngle = this.m_EndAngle;
                this.m_NumState = 0;
                return;
            }
        }
    }
}