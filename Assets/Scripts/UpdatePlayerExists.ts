import { GameObject, Quaternion, Vector3 } from 'UnityEngine'
import { SpawnInfo, ZepetoCharacter, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { Room } from 'ZEPETO.Multiplay';
import { State } from 'ZEPETO.Multiplay.Schema';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World'
import GetStartPoint from './GetStartPoint';

export default class UpdatePlayerExists 
{
    m_Dirty : number = Number.MIN_VALUE;
    m_PlayerSet : Set<string>;
    m_RemoveSet : Set<string>;
    constructor(owner : GameObject)
    {
        console.log("UpdatePlayerExists_Constructor");
        this.m_RemoveSet = new Set<string>();
        this.m_PlayerSet = new Set<string>();
        owner.GetComponentInParent<ZepetoWorldMultiplay>().RoomJoined += (room :Room)=>
        {
            room.OnStateChange += (state : State,isFirst : boolean)=>
            {
                if(state.PlayerInfoListDirty != this.m_Dirty)
                {
                    this.m_Dirty = state.PlayerInfoListDirty;
                    state.PlayerInfoList.ForEach((key,value)=>{
                        if(!this.m_PlayerSet.has(value.SessionId))
                        {
                            this.m_PlayerSet.add(value.SessionId);
                            const spawnInfo = new SpawnInfo();
                            var startPoint = GetStartPoint.Get(0);
                            if(startPoint !== null)
                            {
                                spawnInfo.position = startPoint.position;
                                spawnInfo.rotation = startPoint.rotation;
                            }
                            else
                            {
                                spawnInfo.position = Vector3.zero;
                                spawnInfo.rotation = Quaternion.identity;
                            }

                            const isLocal = room.SessionId === value.SessionId;
                            ZepetoPlayers.instance.CreatePlayerWithUserId(value.SessionId, value.UserId, spawnInfo, isLocal);
                        }
                    });
                    this.m_RemoveSet.clear();
                    this.m_PlayerSet.forEach((key)=>
                    {
                        if(!state.PlayerInfoList.ContainsKey(key))
                        {
                            this.m_RemoveSet.add(key);
                            ZepetoPlayers.instance.RemovePlayer(key);
                        }
                    });
                }
            };
        };
    }
}