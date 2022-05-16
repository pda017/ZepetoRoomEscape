import { SpawnInfo, ZepetoCharacter, ZepetoCharacterCreator, ZepetoPlayers } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import InitData from './Data/InitData';
import PrefabMgr from './PrefabMgr';
import SpriteMgr from './SpriteMgr';

export default class TestStage extends ZepetoScriptBehaviour {
    Awake()
    {
        InitData.Init();
    }
}