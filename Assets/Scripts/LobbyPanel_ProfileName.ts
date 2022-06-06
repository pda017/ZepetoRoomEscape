import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {Text} from 'UnityEngine.UI'
import ProfileInfoChanged from './ProfileInfoChanged';
import { Transform } from 'UnityEngine';
import IndexTag from './IndexTag';
import LobbyData from './Data/LobbyData';

export default class LobbyPanel_ProfileName extends ZepetoScriptBehaviour {
    m_Text : Text;
    m_ProfileInfoChanged : ProfileInfoChanged = new ProfileInfoChanged();
    m_IndexTf : Transform;
    Start() {    
        this.m_IndexTf = this.GetComponentInParent<IndexTag>().transform;
        this.m_Text = this.GetComponent<Text>();
    }
    Update()
    {
        if(this.m_ProfileInfoChanged.Check())
        {
            var index = this.m_IndexTf.GetSiblingIndex();
            if(index < LobbyData.m_ProfileList.length)
            {
                var profileInfo = LobbyData.m_ProfileList[index];
                this.m_Text.text = profileInfo.m_Name;
            }
            else
                this.m_Text.text = "닉네임";
        }
    }
}