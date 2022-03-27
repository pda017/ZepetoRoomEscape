import { SpawnInfo, ZepetoCharacter, ZepetoCharacterCreator, ZepetoPlayers } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InitData from './InitData';

export default class TestStage extends ZepetoScriptBehaviour {
    Awake()
    {
        InitData.Init();
    }
    Start() 
    {
    }
}