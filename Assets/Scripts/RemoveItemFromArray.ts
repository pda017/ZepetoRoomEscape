import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class RemoveItemFromArray {
    public static Remove<T>(arr : T[], predicate: (value : T, index : number, obj:T[]) => unknown)
    {
        var removeIndex = arr.findIndex(predicate);
        if(removeIndex !== -1)
        {
            arr.splice(removeIndex,1);
        }
    }
}