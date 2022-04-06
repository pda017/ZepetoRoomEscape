import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import StringData from './Data/StringData'

export default class GetStringData {
    public static Get(key : string) : string
    {
        return StringData.GetStringMap().get(key);
    }
}