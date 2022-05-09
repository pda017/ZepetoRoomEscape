import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CabinetData from './Data/CabinetData';
import SecretCabinetData from './Data/SecretCabinetData';

export default class CheckSecretCabinetIndex {
    public static Check(indexArr : number[]) : boolean
    {
        var OffList = [];
        var switchList = SecretCabinetData.m_SwitchList;
        switchList.forEach((value,index)=>
        {
            if(!indexArr.includes(index))
                OffList.push(index);
        });
        for(let i = 0;i<indexArr.length;i++)
        {
            if(!switchList[indexArr[i]])
                return false;
        }
        for(let i = 0;i<OffList.length;i++)
        {
            if(switchList[OffList[i]])
                return false;
        }
        return true;
    }
}