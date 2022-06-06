import {ZepetoScriptBehaviour} from 'ZEPETO.Script'
import {Users, ZepetoWorldHelper, ZepetoWorldMultiplay} from 'ZEPETO.World'
import {Room, RoomData} from 'ZEPETO.Multiplay'
import {Player, State, Vector3} from 'ZEPETO.Multiplay.Schema'
import {CharacterState, SpawnInfo, ZepetoPlayers, ZepetoPlayer} from 'ZEPETO.Character.Controller'
import * as UnityEngine from "UnityEngine";
import GetStartPoint from './GetStartPoint'
import LayerData from './Data/LayerData'
import PlayerData from './Data/PlayerData'
import LobbyData, { PlayerProfileInfo } from './Data/LobbyData'
import RemoveItemFromArray from './RemoveItemFromArray'


export default class ClientStarter {
    m_OtherCharLayer : number;
    constructor(_multiplay : ZepetoWorldMultiplay)
    {
        this.multiplay = _multiplay;
    }
    public multiplay: ZepetoWorldMultiplay;

    public room: Room;
    public currentPlayers: Map<string, Player> = new Map<string, Player>();
    m_Stamp : number = Number.MIN_SAFE_INTEGER;
    m_PlayerUpdateDelay : number = 0.1;
    m_PlayerFirstUpdate : boolean = true;

    public Start() {
        PlayerData.m_PlayerInfoMap = this.currentPlayers;
        this.m_OtherCharLayer = UnityEngine.LayerMask.NameToLayer("OtherCharacter");
        this.multiplay.RoomCreated += (room: Room) => {
            this.room = room;
        };

        this.multiplay.RoomJoined += (room: Room) => {
            room.OnStateChange += this.OnStateChange;
        };
    }
    public Update()
    {
        if((UnityEngine.Time.time - this.m_Stamp) > this.m_PlayerUpdateDelay)
        {
            this.m_Stamp = UnityEngine.Time.time;
            if (this.room != null && this.room.IsConnected) {
                const hasPlayer = ZepetoPlayers.instance.HasPlayer(this.room.SessionId);
                if (hasPlayer) {
                    const myPlayer = ZepetoPlayers.instance.GetPlayer(this.room.SessionId);
                    if (this.m_PlayerFirstUpdate || myPlayer.character.CurrentState != CharacterState.Idle)
                    {
                        this.m_PlayerFirstUpdate = false;
                        this.SendTransform(myPlayer.character.transform);
                    }
                }
            }
        } 
    }
    private OnStateChange(state: State, isFirst: boolean) {

        // 첫 OnStateChange 이벤트 수신 시, State 전체 스냅샷을 수신합니다.
        if (isFirst) 
        {
            // [CharacterController] (Local)Player 인스턴스가 Scene에 완전히 로드되었을 때 호출
            ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
                const myPlayer = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer;

                myPlayer.character.OnChangedState.AddListener((cur, next) => {
                    this.SendState(next);
                });
            });

            // [CharacterController] Player 인스턴스가 Scene에 완전히 로드되었을 때 호출
            ZepetoPlayers.instance.OnAddedPlayer.AddListener((sessionId: string) => {
                const isLocal = this.room.SessionId === sessionId;
                if (!isLocal) {
                    const player: Player = this.currentPlayers.get(sessionId);

                    // [RoomState] player 인스턴스의 state가 갱신될 때마다 호출됩니다.
                    player.OnChange += (changeValues) => this.OnUpdatePlayer(sessionId, player);
                }
            });
        }

        let join = new Map<string, Player>();
        let leave = new Map<string, Player>(this.currentPlayers);

        state.players.ForEach((sessionId: string, player: Player) => {
            if (!this.currentPlayers.has(sessionId)) {
                join.set(sessionId, player);
            }
            leave.delete(sessionId);
        });

        // [RoomState] Room에 입장한 player 인스턴스 생성
        join.forEach((player: Player, sessionId: string) => this.OnJoinPlayer(sessionId, player));

        // [RoomState] Room에서 퇴장한 player 인스턴스 제거
        leave.forEach((player: Player, sessionId: string) => this.OnLeavePlayer(sessionId, player));

        LobbyData.m_PlayerNum = state.PlayerNum;
        
    }

    private OnJoinPlayer(sessionId: string, player: Player) {
        console.log(`[OnJoinPlayer] players - sessionId : ${sessionId}`);

        var profileInfo : PlayerProfileInfo = new PlayerProfileInfo();
        profileInfo.m_SeesionId = sessionId;
        LobbyData.m_ProfileList.push(profileInfo);

        let ids:string[] = [player.zepetoUserId];
        ZepetoWorldHelper.GetUserInfo(ids,(info:Users[])=>{
            for (let i = 0; i < info.length; i++)
            {
                profileInfo.m_Name = info[i].name;
                LobbyData.m_ProfileListDirty++;
            }
        },(error)=>{
            console.log(error);
        });

        ZepetoWorldHelper.GetProfileTexture(player.zepetoUserId,(texture:UnityEngine.Texture)=>
        {
            profileInfo.m_Sprite = this.GetSprite(texture);
            LobbyData.m_ProfileListDirty++;
        },(error)=>{
            console.log(error);
        });

        this.currentPlayers.set(sessionId, player);
        PlayerData.m_PlayerInfoMap.set(sessionId,player);
        PlayerData.m_PlayerInfoMapDirty++;
        PlayerData.m_PlayerOrderedList.push(player);
        PlayerData.m_PlayerOrderedDirty++;
        PlayerData.m_PlayerOrderedList.sort((a,b)=>a.JoinOrder - b.JoinOrder);

        var playerOrderIndex = PlayerData.m_PlayerOrderedList.indexOf(player);
        
        var startPos : UnityEngine.Transform = null; 
        if(playerOrderIndex === -1)
            startPos = GetStartPoint.Get(0);
        else
            startPos = GetStartPoint.Get(playerOrderIndex);

        const spawnInfo = new SpawnInfo();
        spawnInfo.position = startPos.position;
        spawnInfo.rotation = startPos.rotation;

        const isLocal = this.room.SessionId === player.sessionId;
        ZepetoPlayers.instance.CreatePlayerWithUserId(sessionId, player.zepetoUserId, spawnInfo, isLocal);
    }

    private OnLeavePlayer(sessionId: string, player: Player) {
        console.log(`[OnRemove] players - sessionId : ${sessionId}`);
        RemoveItemFromArray.Remove(LobbyData.m_ProfileList,(value,index,obj)=>
        {
            if(value.m_SeesionId == sessionId)
                return true;
            return false;
        });
        LobbyData.m_ProfileListDirty++;
        //console.log("ProfileListLength : " + LobbyData.m_ProfileList.length);
        this.currentPlayers.delete(sessionId);
        PlayerData.m_PlayerInfoMap.delete(sessionId);
        PlayerData.m_PlayerInfoMapDirty++;
        RemoveItemFromArray.Remove(PlayerData.m_PlayerOrderedList,(value,index,obj)=>
        {
            if(value.sessionId == sessionId)
                return true;
            return false;
        });
        PlayerData.m_PlayerOrderedList.sort((a,b)=>a.JoinOrder - b.JoinOrder);
        PlayerData.m_PlayerOrderedDirty++;

        ZepetoPlayers.instance.RemovePlayer(sessionId);
    }

    private OnUpdatePlayer(sessionId: string, player: Player) {
        const isLocal = this.room.SessionId === player.sessionId;
        const position = this.ParseVector3(player.transform.position);

        const zepetoPlayer = ZepetoPlayers.instance.GetPlayer(sessionId);
        zepetoPlayer.character.MoveToPosition(position);
        
        if(!isLocal && zepetoPlayer.character.gameObject.layer !== this.m_OtherCharLayer)
            zepetoPlayer.character.gameObject.layer = this.m_OtherCharLayer;

        if (player.state === CharacterState.JumpIdle || player.state === CharacterState.JumpMove)
            zepetoPlayer.character.Jump();
    }

    private SendTransform(transform: UnityEngine.Transform) {
        const data = new RoomData();

        const pos = new RoomData();
        pos.Add("x", transform.localPosition.x);
        pos.Add("y", transform.localPosition.y);
        pos.Add("z", transform.localPosition.z);
        data.Add("position", pos.GetObject());

        const rot = new RoomData();
        rot.Add("x", transform.localEulerAngles.x);
        rot.Add("y", transform.localEulerAngles.y);
        rot.Add("z", transform.localEulerAngles.z);
        data.Add("rotation", rot.GetObject());
        this.room.Send("onChangedTransform", data.GetObject());
    }

    private SendState(state: CharacterState) {
        const data = new RoomData();
        data.Add("state", state);
        this.room.Send("onChangedState", data.GetObject());
    }

    private ParseVector3(vector3: Vector3): UnityEngine.Vector3 {
        return new UnityEngine.Vector3
        (
            vector3.x,
            vector3.y,
            vector3.z
        );
    }
    GetSprite(texture:UnityEngine.Texture){
        let rect:UnityEngine.Rect = new UnityEngine.Rect(0, 0, texture.width, texture.height);
        return UnityEngine.Sprite.Create(texture as UnityEngine.Texture2D, rect, new UnityEngine.Vector2(0.5, 0.5));
    }
}