import { Camera, LayerMask, Mathf, Physics, RaycastHit, Transform } from 'UnityEngine';
import { CameraCallback } from 'UnityEngine.Camera';
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import CamData from './Data/CamData';
import Vector3Util from './Vector3Util';

export default class UpdateCameraCollision extends ZepetoScriptBehaviour {
    m_NumState : number = 0;
    m_Parent : Transform;
    m_Tf : Transform;
    m_SelectableLayer : number = 0;

    Start() {    
        this.m_Tf = this.transform;
        this.m_SelectableLayer = LayerMask.NameToLayer("SelectableObj");
        Camera.onPreCull = new CameraCallback((cam)=>
        {
            if(this.m_NumState === 0)
            {
                this.m_Parent = this.m_Tf.parent;
                if(this.m_Parent != null)
                    this.m_NumState++;
            }
            else if(this.m_NumState === 1)
            {
                var look = Vector3Util.Minus(this.m_Tf.position , this.m_Parent.position);
                var dir = look.normalized;
                var dist = look.magnitude;
                var hits = Physics.RaycastAll(this.m_Parent.position,dir,dist);
                for(let i =0;i<hits.length;i++)
                {
                    var hit = hits[i];
                    if(hit.collider.GetComponent<ZepetoCharacter>() != null || hit.collider.gameObject.layer === this.m_SelectableLayer)
                        continue ;
                    var sign = Mathf.Sign(this.m_Tf.localPosition.z);
                    var pos = this.m_Tf.localPosition;
                    pos.z = sign * (hit.distance - CamData.m_ColGap);
                    this.m_Tf.localPosition = pos;
                    //console.log("hitDist : " + hit.distance + "hitObj : " + hit.collider.gameObject.name);
                }
            }
        });
    }
}