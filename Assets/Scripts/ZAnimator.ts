import { Animator, GameObject } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ZAnimator {
    m_Anim : Animator;
    constructor(owner : GameObject,findParent : boolean = false)
    {
        if(findParent)
            this.m_Anim = owner.GetComponentInParent<Animator>();
        else
            this.m_Anim = owner.GetComponentInChildren<Animator>();
    }
    public Play(aniName : string,layer : number = 0,normalizeTime : number = 0)
    {
        this.m_Anim.Play(aniName,layer,normalizeTime);
    }
    public End(layer : number) : boolean
    {
        if(this.m_Anim.GetCurrentAnimatorStateInfo(layer).normalizedTime >= 0.999)
            return true;
        return false;
    }
}