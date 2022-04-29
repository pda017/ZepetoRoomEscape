import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import GetItemData from './GetItemData'

export default class IsDisposableItem {
    public static Check(itemKey : string) : boolean
    {
        var itemData = GetItemData.Get(itemKey);
        if(itemData.m_Disposable)
            return true;
        return false;
    }
}