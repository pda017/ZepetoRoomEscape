import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InventoryData from './Data/InventoryData'
import ItemDialog from './ItemDialog';
import SetDialog from './SetDialog';
import SetNotice from './SetNotice';

export default class AddItemToInventory {
    public static Add(itemKey : string)
    {
        InventoryData.m_InvenList.push(itemKey);
        InventoryData.m_InvenListDirty = Date.now();
    }
    public static AddWithDialog(itemKey : string,dialogKey : string = "", noticeKey : string = "")
    {
        this.Add(itemKey);
        if(dialogKey != "")
            SetDialog.SetByKey(dialogKey);
        if(noticeKey != "")
            SetNotice.SetByKey(noticeKey);
    }
    public static AddWithItemDialog(itemKey : string,itemDialog : ItemDialog)
    {
        if(itemDialog != null)
            this.AddWithDialog(itemKey,itemDialog.m_DialogKey,itemDialog.m_NoticeKey);
        else
            this.Add(itemKey);
    }
}