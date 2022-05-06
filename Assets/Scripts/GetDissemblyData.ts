import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DisassemblyData, { DisassemblyInfo } from './Data/DisassemblyData';

export default class GetDissemblyData {
    public static Get(itemKey : string) : DisassemblyInfo
    {
        var map = DisassemblyData.GetDisassemblyMap();
        return map.get(itemKey);
    }
}