import { GameObject, Transform } from 'UnityEngine'
import { Image } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DoorLockData from './Data/DoorLockData';

export default class DoorLockPanel_UnderBarGrid extends ZepetoScriptBehaviour {
    m_ObjList : GameObject[] = [];
    m_Tf : Transform;
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    Start() {    
        this.m_Tf = this.transform;
        for(let i =0; i< this.m_Tf.childCount;i++)
        {
            this.m_ObjList.push(this.m_Tf.GetChild(i).gameObject);
        }
    }
    Update()
    {
        if(this.m_Dirty != DoorLockData.m_PasswordLimit)
        {
            this.m_Dirty = DoorLockData.m_PasswordLimit;
            for(let i =0; i< this.m_ObjList.length;i++)
            {
                if(i < DoorLockData.m_PasswordLimit)
                    this.m_ObjList[i].SetActive(true);
                else
                    this.m_ObjList[i].SetActive(false);   
            }
        }
    }
}