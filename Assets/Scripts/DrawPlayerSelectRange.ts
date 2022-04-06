import { Collider, GameObject, MeshRenderer, Transform, Vector3 } from 'UnityEngine';
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import DebugData from './Data/DebugData';
import PlayerData from './Data/PlayerData';
import GetMyCharacter from './GetMyCharacter';

export default class DrawPlayerSelectRange extends ZepetoScriptBehaviour {
    public m_DrawGizmo : boolean;
    m_NumState : number;
    m_Character : ZepetoCharacter;
    m_CharObj : GameObject;
    m_CharTf : Transform;
    m_CharCol : Collider;
    m_Tf : Transform;
    m_Mr : MeshRenderer;
    Start() {    
        this.m_Mr = this.GetComponent<MeshRenderer>();
        this.m_Tf = this.transform;
        //
        var size = PlayerData.m_SelectDetectRange * 2;
        this.m_Tf.localScale = new Vector3(size,size,size);
    }
    Update()
    {
        if(!this.m_DrawGizmo || !DebugData.m_DebugMode)
        {
            this.m_Mr.enabled = false;
            return ;
        }
        else
            this.m_Mr.enabled = true;

        if(this.m_NumState == 0)
        {
            this.m_Character = GetMyCharacter.Get();
            if(this.m_Character !== null)
            {
                this.m_CharObj = this.m_Character.gameObject;
                this.m_CharTf = this.m_Character.transform;
                this.m_CharCol = this.m_Character.GetComponent<Collider>();
                this.m_NumState++;
                return ;
            }
        }
        else if(this.m_NumState == 1)
        {
            if(this.m_Character === null)
            {
                this.m_NumState = 0;
                return ;
            }
            this.m_Tf.position = this.m_CharCol.bounds.center;
        }
    }
}