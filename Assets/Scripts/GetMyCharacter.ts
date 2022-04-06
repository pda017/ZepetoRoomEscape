import { Collider, GameObject, Transform } from 'UnityEngine';
import { ZepetoCharacter, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import GetMyPlayer from './GetMyPlayer';
import MultiplayMgr from './MultiplayMgr';

export default class GetMyCharacter {

    public static Get() : ZepetoCharacter
    {
        var player = GetMyPlayer.Get();
        if(player !== null)
        {
            if(player.isLoadedCharacter)
                return player.character;
        }
        return null;
    }
    public static GetInfo() :CharInfo
    {
        var character = this.Get();
        if(character !== null)
        {
            var info = new CharInfo();
            info.m_Character = character;
            info.m_Obj = character.gameObject;
            info.m_Tf = character.transform;
            info.m_Col = character.GetComponent<Collider>();
            return info;
        }
        return null;
    }
}

export class CharInfo
{
    public m_Character : ZepetoCharacter;
    public m_Obj : GameObject;
    public m_Tf : Transform;
    public m_Col : Collider;
}