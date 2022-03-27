import { Sandbox, SandboxOptions, SandboxPlayer } from "ZEPETO.Multiplay";
import { SPlayerInfo } from "ZEPETO.Multiplay.Schema";

export default class extends Sandbox {

    onCreate(options: SandboxOptions) {
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
}