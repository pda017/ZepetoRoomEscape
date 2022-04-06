import { Transform } from 'UnityEngine';
import { Outline } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import InventoryData from './Data/InventoryData';
import IndexTag from './IndexTag';
import InvenSelectIndexChanged from './InvenSelectIndexChanged';
import SelectInvenItem from './SelectInvenItem';

export default class InvenPanel_ItemButton extends ZepetoScriptBehaviour {
    m_IndexTf : Transform;
    m_Outline : Outline;
    m_InvenSelectIndexChanged : InvenSelectIndexChanged = new InvenSelectIndexChanged();
    Start() {  
        this.m_Outline = this.GetComponent<Outline>();
        this.m_IndexTf = this.GetComponentInParent<IndexTag>().transform;
        ButtonEvent.Add(this.gameObject,()=>
        {
            SelectInvenItem.Select(this.m_IndexTf.GetSiblingIndex());
        });
    }
    Update()
    {
        if(this.m_InvenSelectIndexChanged.Check())
        {
            var index = this.m_IndexTf.GetSiblingIndex();
            if(index === InventoryData.m_SelectIndex)
                this.m_Outline.enabled = true;
            else
                this.m_Outline.enabled = false;
        }
    }
}