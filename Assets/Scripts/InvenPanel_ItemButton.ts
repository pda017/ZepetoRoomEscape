import { Transform } from 'UnityEngine';
import { Outline } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import InventoryData from './Data/InventoryData';
import IndexTag from './IndexTag';
import InvenListChanged from './InvenListChanged';
import InvenSelectIndexChanged from './InvenSelectIndexChanged';
import SelectInvenItem from './SelectInvenItem';

export default class InvenPanel_ItemButton extends ZepetoScriptBehaviour {
    m_IndexTf : Transform;
    m_Outline : Outline;
    m_InvenSelectIndexChanged : InvenSelectIndexChanged = new InvenSelectIndexChanged();
    m_InvenListChanged : InvenListChanged = new InvenListChanged();
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
        if(this.m_InvenSelectIndexChanged.Check() || this.m_InvenListChanged.Check())
        {
            var index = this.m_IndexTf.GetSiblingIndex();
            if(index === InventoryData.m_SelectIndex && InventoryData.m_SelectIndex < InventoryData.m_InvenList.length)
                this.m_Outline.enabled = true;
            else
                this.m_Outline.enabled = false;
        }
    }
}