import { Transform } from 'UnityEngine'
import { Image ,Text} from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData';
import GetItemData from './GetItemData';
import IndexTag from './IndexTag';
import InvenListChanged from './InvenListChanged';
import SpriteMgr from './SpriteMgr';

export default class InvenPanel_SlotNum extends ZepetoScriptBehaviour {
    m_IndexTf : Transform;
    m_Text : Text;
    m_InvenListChanged : InvenListChanged = new InvenListChanged();
    Start() 
    {    
        this.m_Text = this.GetComponent<Text>();
        var indexTag = this.GetComponentInParent<IndexTag>();
        this.m_IndexTf = indexTag.transform;

        this.m_Text.text = (this.m_IndexTf.GetSiblingIndex()+1).toString();
    }
}