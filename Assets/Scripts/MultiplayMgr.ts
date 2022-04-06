import { Room } from 'ZEPETO.Multiplay';
import { State } from 'ZEPETO.Multiplay.Schema';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World'
import TimerData from './Data/TimerData';
import UpdatePlayerExists from './UpdatePlayerExists';

export default class MultiplayMgr extends ZepetoScriptBehaviour {
    public static m_Room : Room = null;
    m_UpdatePlayerExists : UpdatePlayerExists;
    m_Multiplay : ZepetoWorldMultiplay;
    Start() {    
        this.m_Multiplay = this.GetComponent<ZepetoWorldMultiplay>();
        this.m_Multiplay.RoomCreated += (room: Room) => {
            MultiplayMgr.m_Room = room;
        };
        this.m_Multiplay.RoomJoined += (room : Room)=>{
            room.OnStateChange += (state : State,isFirst : boolean)=>
            {
                TimerData.m_RemainTime = state.RemainTime;
            };
        };
        
        this.m_UpdatePlayerExists = new UpdatePlayerExists(this.gameObject);
    }
}