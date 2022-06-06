import { Collider } from 'UnityEngine';
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import GetMyCharacter from '../GetMyCharacter';
import PanelMgr from '../PanelMgr';

export default class Event_Goal_In extends ZepetoScriptBehaviour {
    m_NumState : number = 0;
    m_MyChar : ZepetoCharacter;
    Start() {    

    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            this.m_MyChar = GetMyCharacter.Get();
            if(this.m_MyChar != null)
                this.m_NumState++;
        }
    }
    OnTriggerStay(col : Collider)
    {
        if(this.m_NumState === 1)
        {
            if(this.m_MyChar.gameObject === col.gameObject)
            {
                PanelMgr.Show("GameOverPanel");
                this.m_NumState++;
            }
        }
    }
}