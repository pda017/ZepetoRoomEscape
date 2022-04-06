import { Animator, GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class CheckAniEnd {
    m_Anim : Animator;
    constructor(owner : GameObject,findParent : boolean = false)
    {
        if(findParent)
            this.m_Anim = owner.GetComponentInParent<Animator>();
        else
            this.m_Anim = owner.GetComponentInChildren<Animator>();
    }
    public Check(layer : number = 0) : boolean
    {
        if(this.m_Anim.GetCurrentAnimatorStateInfo(layer).normalizedTime >= 0.99)
            return true;
        return false;
    }
}