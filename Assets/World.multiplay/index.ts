import {Sandbox, SandboxOptions, SandboxPlayer} from "ZEPETO.Multiplay";
import ServerData from "./ServerData";
import S_PlayerMgr from "./S_PlayerMgr";

export default class extends Sandbox {
    m_RemainTime : number;
    m_RemainTimeDirty : number;
    m_PlayerMgr : S_PlayerMgr;
    constructor() {
        super();
    }

    onCreate(options: SandboxOptions) {
        this.m_RemainTime = ServerData.m_TimeOut;
        this.m_RemainTimeDirty = Number.MIN_SAFE_INTEGER;
        this.state.RemainTime = Math.round(this.m_RemainTime / 1000);

        this.m_PlayerMgr = new S_PlayerMgr(this);
        this.m_PlayerMgr.onCreate(options);
    }

    async onJoin(client: SandboxPlayer) {
        this.m_PlayerMgr.onJoin(client);
    }

    onTick(deltaTime: number): void {
        this.m_RemainTime = Math.max(0,this.m_RemainTime - deltaTime);
        var remainSec = Math.round(this.m_RemainTime / 1000);
        if(remainSec !== this.m_RemainTimeDirty)
        {
            this.m_RemainTimeDirty = remainSec;
            this.state.RemainTime = remainSec;
        }
    }

    async onLeave(client: SandboxPlayer, consented?: boolean) {
        this.m_PlayerMgr.onLeave(client,consented);
    }
}