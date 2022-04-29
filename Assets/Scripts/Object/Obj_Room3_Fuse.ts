import { MeshRenderer } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import IsOn from '../IsOn';

export default class Obj_Room3_Fuse extends ZepetoScriptBehaviour {
    public m_IsChargedObj : boolean;
    m_IsOn : IsOn;
    m_Mr : MeshRenderer;
    Start() {    
        this.m_Mr = this.GetComponent<MeshRenderer>();
        this.m_IsOn = this.GetComponentInParent<IsOn>();
    }
    Update()
    {
        if(this.m_IsOn.m_Value)
        {
            if(this.m_IsChargedObj)
                this.m_Mr.enabled = true;
            else 
                this.m_Mr.enabled = false;
        }
        else
        {
            if(this.m_IsChargedObj)
                this.m_Mr.enabled = false;
            else
                this.m_Mr.enabled = true;
        }
    }
}