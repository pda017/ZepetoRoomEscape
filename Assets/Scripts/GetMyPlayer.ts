import { ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import MultiplayMgr from './MultiplayMgr';

export default class GetMyPlayer {

    public static Get() : ZepetoPlayer
    {
        if(MultiplayMgr.m_Room !== null)
        {
            var room = MultiplayMgr.m_Room;
            const hasPlayer = ZepetoPlayers.instance.HasPlayer(room.SessionId);
            if (hasPlayer) 
            {
                const myPlayer = ZepetoPlayers.instance.GetPlayer(room.SessionId);
                return myPlayer;
            }
        }
        return null;
    }
}