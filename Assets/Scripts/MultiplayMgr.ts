import { Room } from 'ZEPETO.Multiplay';
import { State } from 'ZEPETO.Multiplay.Schema';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World'
import UpdatePlayerExists from './UpdatePlayerExists';

export default class MultiplayMgr extends ZepetoScriptBehaviour {
    m_UpdatePlayerExists : UpdatePlayerExists;
    Start() {    
        this.m_UpdatePlayerExists = new UpdatePlayerExists(this.gameObject);
    }
}