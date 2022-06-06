import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import LobbyData from './Data/LobbyData';

export default class ProfileInfoChanged  {
    m_Dirty : number = Number.MIN_SAFE_INTEGER;
    public Check() : boolean
    {
        if(this.m_Dirty != LobbyData.m_ProfileListDirty)
        {
            this.m_Dirty = LobbyData.m_ProfileListDirty;
            return true;
        }
        return false;
    }
}