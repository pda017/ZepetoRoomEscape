import { MeshRenderer } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Finder from '../Finder';
import IsOn from '../IsOn';

export default class Obj_DoorLockImage extends ZepetoScriptBehaviour {
    public m_IsOnImage :boolean = true;
    m_Mr : MeshRenderer;
    m_FuseOn : IsOn;
    Start() {    
        this.m_FuseOn = Finder.Find("Room3_Fuse").GetComponent<IsOn>();
        this.m_Mr = this.GetComponent<MeshRenderer>();
    }
    Update()
    {
        if(this.m_IsOnImage)
        {
            if(this.m_FuseOn.m_Value)
                this.m_Mr.enabled = true;
            else
                this.m_Mr.enabled = false;
        }
        else
        {
            if(this.m_FuseOn.m_Value)
                this.m_Mr.enabled = false;
            else
                this.m_Mr.enabled = true;
        }   
    }
}