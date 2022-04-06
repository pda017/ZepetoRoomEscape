import { Sandbox, SandboxOptions, SandboxPlayer } from "ZEPETO.Multiplay";
import { SPlayerInfo } from "ZEPETO.Multiplay.Schema";
import ServerData from "./ServerData";

export default class extends Sandbox {
    m_RemainTime : number;
    m_RemainTimeDirty : number;
    onCreate(options: SandboxOptions) {
        this.m_RemainTime = ServerData.m_TimeOut;
        this.m_RemainTimeDirty = Number.MIN_SAFE_INTEGER;
        this.state.RemainTime = Math.round(this.m_RemainTime / 1000);
        this.state.PlayerInfoListDirty = 0;
    }

    onJoin(client: SandboxPlayer) 
    {
        var playerInfo = new SPlayerInfo();
        playerInfo.SessionId = client.sessionId;
        playerInfo.UserId = client.userId;
        if(!this.state.PlayerInfoList.has(playerInfo.SessionId))
        {
            this.state.PlayerInfoList.set(playerInfo.SessionId,playerInfo);
            this.state.PlayerInfoListDirty++;
        }
    }

    onLeave(client: SandboxPlayer, consented?: boolean) {
        if(this.state.PlayerInfoList.has(client.sessionId))
            this.state.PlayerInfoList.delete(client.sessionId);
    }
    onTick(deltaTime: number): void 
    {
        this.m_RemainTime = Math.max(0,this.m_RemainTime - deltaTime);
        var remainSec = Math.round(this.m_RemainTime / 1000);
        if(remainSec !== this.m_RemainTimeDirty)
        {
            this.m_RemainTimeDirty = remainSec;
            this.state.RemainTime = remainSec;
        }
    }
}