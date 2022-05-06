import { Camera, Collider, Color, Debug, Physics, Transform, Vector3 } from 'UnityEngine';
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
        for(let i=0;i<hits.length;i++)
        {
            var value = hits[i];
            if(this.CheckWall(value))
                continue;

            var interactable = value.GetComponentInParent<Interactable>();
            if(interactable != null && !interactable.m_Value)
                continue;
                
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
        return targetCol;
    }
    CheckWall(col : Collider) : boolean
    {
        //Debug.DrawLine(this.m_CharInfo.m_Col.bounds.center,col.bounds.center,Color.red);
        var charCenter = this.m_CharInfo.m_Col.bounds.center;
        var look = Vector3Util.Minus(col.bounds.center, charCenter);
        var dir = look.normalized;
        var dist = look.magnitude;
        var hits = Physics.RaycastAll(charCenter,dir,dist);
        for(let i =0;i<hits.length;i++)
        {
            var hit = hits[i];
            //console.log(hit.collider.tag);
            if(hit.collider.CompareTag("Wall"))
                return true;
        }
        return false;
    }
}