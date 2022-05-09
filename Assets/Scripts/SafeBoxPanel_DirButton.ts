import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent';
import RotateSafeBoxHandle from './RotateSafeBoxHandle';

export default class SafeBoxPanel_DirButton extends ZepetoScriptBehaviour {
    public m_Dir : number = 0;
    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            if(this.m_Dir < 0)
                RotateSafeBoxHandle.Left();
            else
                RotateSafeBoxHandle.Right();
        });
    }

}