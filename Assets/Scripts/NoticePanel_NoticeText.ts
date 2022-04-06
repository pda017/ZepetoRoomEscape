import { Text } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DialogData from './Data/DialogData';
import NoticeTextChanged from './NoticeTextChanged'

export default class NoticePanel_NoticeText extends ZepetoScriptBehaviour {
    m_Text : Text;
    m_NoticeTextChanged : NoticeTextChanged = new NoticeTextChanged();
    Start() {    
        this.m_Text = this.GetComponent<Text>();
    }
    Update()
    {
        if(this.m_NoticeTextChanged.Check())
        {
            this.m_Text.text = DialogData.m_NoticeText;
        }
    }
}