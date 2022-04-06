import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent'
import DialogData from './Data/DialogData';

export default class DialogTest extends ZepetoScriptBehaviour {

    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            DialogData.m_DialogPlaying = true;
            DialogData.m_DialogText = '"어딘가에 쓸 수 있어 보인다.."';
        });
    }

}