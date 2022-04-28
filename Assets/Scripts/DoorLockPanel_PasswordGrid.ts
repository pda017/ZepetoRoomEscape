import { GameObject, Transform } from 'UnityEngine'
import { Image } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DoorLockData from './Data/DoorLockData';

export default class DoorLockPanel_PasswordGrid extends ZepetoScriptBehaviour {
    m_ImageList : Image[] = [];
    m_Tf : Transform;
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    Start() {    
        this.m_Tf = this.transform;
        for(let i =0; i< this.m_Tf.childCount;i++)
        {
            this.m_ImageList.push(this.m_Tf.GetChild(i).GetComponent<Image>());
        }
    }
    Update()
    {
        if(this.m_Dirty != DoorLockData.m_PasswordDirty)
        {
            this.m_Dirty = DoorLockData.m_PasswordDirty;
            for(let i =0; i< this.m_ImageList.length;i++)
            {
                if(i < DoorLockData.m_Password.length)
                    this.m_ImageList[i].enabled = true;
                else
                    this.m_ImageList[i].enabled = false;   
            }
        }
    }
}