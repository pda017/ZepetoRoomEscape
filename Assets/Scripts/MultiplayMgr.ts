import { Room } from 'ZEPETO.Multiplay';
import { State } from 'ZEPETO.Multiplay.Schema';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World'
import ClientStarter from './ClientStarter';
import LobbyData from './Data/LobbyData';
import TimerData from './Data/TimerData';
import ReadySync from './ReadySync';

export default class MultiplayMgr extends ZepetoScriptBehaviour {
    public static m_Room : Room = null;
    m_Multiplay : ZepetoWorldMultiplay;
    m_ClientStarter : ClientStarter;
    m_ReadySync : ReadySync;
    Start() {    
        this.m_Multiplay = this.GetComponent<ZepetoWorldMultiplay>();
        this.m_ClientStarter = new ClientStarter(this.m_Multiplay);
        this.m_ClientStarter.Start();
        this.m_ReadySync = new ReadySync(this.m_Multiplay);
        this.m_ReadySync.Start();
        this.m_Multiplay.RoomCreated += (room: Room) => {
            MultiplayMgr.m_Room = room;
        };
        this.m_Multiplay.RoomJoined += (room : Room)=>{
            room.OnStateChange += (state : State,isFirst : boolean)=>
            {
                if(isFirst)
                {
                    LobbyData.m_PlayerNumMax = state.PlayerNumMax;
                }
                TimerData.m_RemainTime = state.RemainTime;
            };
        };
    }
    Update()
    {
        this.m_ClientStarter.Update();
        this.m_ReadySync.Update();

        if(LobbyData.m_bLeave)
        {
            LobbyData.m_bLeave = false;
            if (MultiplayMgr.m_Room != null && MultiplayMgr.m_Room.IsConnected)
            {
                MultiplayMgr.m_Room.Leave();
            }
        }
    }
}