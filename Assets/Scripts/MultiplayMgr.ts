import { Room } from 'ZEPETO.Multiplay';
import { State } from 'ZEPETO.Multiplay.Schema';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World'
import ClientStarter from './ClientStarter';
import TimerData from './Data/TimerData';

export default class MultiplayMgr extends ZepetoScriptBehaviour {
    public static m_Room : Room = null;
    m_Multiplay : ZepetoWorldMultiplay;
    m_ClientStarter : ClientStarter;
    Start() {    
        this.m_Multiplay = this.GetComponent<ZepetoWorldMultiplay>();
        this.m_ClientStarter = new ClientStarter(this.m_Multiplay);
        this.m_ClientStarter.Start();
        this.m_Multiplay.RoomCreated += (room: Room) => {
            MultiplayMgr.m_Room = room;
        };
        this.m_Multiplay.RoomJoined += (room : Room)=>{
            room.OnStateChange += (state : State,isFirst : boolean)=>
            {
                TimerData.m_RemainTime = state.RemainTime;
            };
        };
    }
    Update()
    {
        this.m_ClientStarter.Update();
    }
}