import { Camera, Collider, Physics, Transform, Vector3 } from 'UnityEngine';
import { Selectable } from 'UnityEngine.UI';
import { ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import LayerData from './Data/LayerData';
import PlayerData from './Data/PlayerData';
import GetMyCharacter, { CharInfo } from './GetMyCharacter';
import GetZepetoCam from './GetZepetoCam';
import Interactable from './Interactable';
import Vector3Util from './Vector3Util';

export default class DetectSelectObj {
    m_CharInfo : CharInfo = null;
    m_Cam : Camera = null;
    m_CamTf : Transform = null;
    public Detect() : Collider
    {
        //console.log("##DetectSelectObj Start");
        if(this.m_CharInfo === null)
            this.m_CharInfo = GetMyCharacter.GetInfo();
        //console.log("##m_CharInfo:"+this.m_CharInfo);
        if(this.m_CamTf === null)
        {
            this.m_Cam = GetZepetoCam.Get();
            if(this.m_Cam !== null)
                this.m_CamTf = this.m_Cam.transform;
        }
        //console.log("##camTf:" + this.m_CamTf);

        if(this.m_CharInfo === null || this.m_CamTf === null)
            return null;

        //console.log("##OverlapSphere Start");
        var center = this.m_CharInfo.m_Col.bounds.center;
        var radius = PlayerData.m_SelectDetectRange;
        var camForward = this.m_CamTf.forward;
        camForward.y = 0;
        camForward.Normalize();
        var hits = Physics.OverlapSphere(center,radius,LayerData.m_SelectableObj);
        //console.log(hits.length);
        var minAngle = Number.MAX_VALUE;
        var targetCol = null;
        hits.forEach((value,index)=>
        {
            var interactable = value.GetComponent<Interactable>();
            var bPass = false;
            if(interactable != null && !interactable.m_Value)
                bPass = true;
            
            if(!bPass)
            {
                var look = Vector3Util.Minus(value.bounds.center, center);
                look.y = 0;
                var dir = look.normalized;
                var angle = Vector3.Angle(dir,camForward);
                if(angle < PlayerData.m_SelectDetectAngle && angle < minAngle)
                {
                    minAngle = angle;
                    targetCol = value;
                }
            }
        });
        return targetCol;
    }
}