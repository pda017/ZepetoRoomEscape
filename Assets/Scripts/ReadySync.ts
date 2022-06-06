import {ZepetoScriptBehaviour} from 'ZEPETO.Script'
import {ZepetoWorldMultiplay} from 'ZEPETO.World'
import {Room, RoomData} from 'ZEPETO.Multiplay'
import {Player, State, Vector3} from 'ZEPETO.Multiplay.Schema'
import {CharacterState, SpawnInfo, ZepetoPlayers, ZepetoPlayer} from 'ZEPETO.Character.Controller'
import * as UnityEngine from "UnityEngine";
import GetStartPoint from './GetStartPoint'
import LayerData from './Data/LayerData'
import PlayerData from './Data/PlayerData'
import LobbyData from './Data/LobbyData'


export default class ReadySync {
    m_ReadyDirty : number = Number.MIN_SAFE_INTEGER;
    constructor(_multiplay : ZepetoWorldMultiplay)
    {
        this.multiplay = _multiplay;
    }
    public multiplay: ZepetoWorldMultiplay;

    public room: Room;
    public Start() {
        this.multiplay.RoomCreated += (room: Room) => {
            this.room = room;
        };

        this.multiplay.RoomJoined += (room: Room) => {
            room.OnStateChange += this.OnStateChange;
        };
    }
    public Update()
    {
        if(this.m_ReadyDirty != LobbyData.m_ReadyDirty)
        {
            this.m_ReadyDirty = LobbyData.m_ReadyDirty;
            if (this.room != null && this.room.IsConnected) {
                this.SendReady(LobbyData.m_bReady);
            }
        }
    }
    private OnStateChange(state: State, isFirst: boolean) 
    {
        LobbyData.m_ReadyNum = 0;
        state.players.ForEach((key,player)=>
        {
            if(player.ready)
                LobbyData.m_ReadyNum++;
        });
    }

    private SendReady(bReady : Boolean) {
        const data = new RoomData();
        data.Add("ready", bReady);
        this.room.Send("onReady", data.GetObject());
    }
}