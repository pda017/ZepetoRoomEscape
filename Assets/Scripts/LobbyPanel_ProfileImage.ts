import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {Text,Image} from 'UnityEngine.UI'
import ProfileInfoChanged from './ProfileInfoChanged';
import { Transform } from 'UnityEngine';
import IndexTag from './IndexTag';
import LobbyData from './Data/LobbyData';

export default class LobbyPanel_ProfileImage extends ZepetoScriptBehaviour {
    m_Image : Image;
    m_ProfileInfoChanged : ProfileInfoChanged = new ProfileInfoChanged();
    m_IndexTf : Transform;
    Start() {    
        this.m_IndexTf = this.GetComponentInParent<IndexTag>().transform;
        this.m_Image = this.GetComponent<Image>();
    }
    Update()
    {
        if(this.m_ProfileInfoChanged.Check())
        {
            var index = this.m_IndexTf.GetSiblingIndex();
            if(index < LobbyData.m_ProfileList.length)
            {
                var profileInfo = LobbyData.m_ProfileList[index];
                if(profileInfo.m_Sprite == null)
                    this.m_Image.enabled = false;
                else
                {
                    this.m_Image.sprite = profileInfo.m_Sprite;
                    this.m_Image.enabled = true;
                }
            }
            else
                this.m_Image.enabled = false;
        }
    }
}