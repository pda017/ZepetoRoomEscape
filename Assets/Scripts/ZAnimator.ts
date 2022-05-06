import { Animator, GameObject } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ZAnimator {
    public m_Anim : Animator;
    constructor(owner : GameObject = null,findParent : boolean = false)
    {
        if(owner == null)
            return ;
        if(findParent)
            this.m_Anim = owner.GetComponentInParent<Animator>();
        else
            this.m_Anim = owner.GetComponentInChildren<Animator>();
    }
    public static Find(owner : GameObject,path : string) :ZAnimator
    {
        var anim = new ZAnimator();
        anim.m_Anim = owner.transform.Find(path).GetComponent<Animator>();
        return anim;
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