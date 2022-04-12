import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ButtonEvent from './ButtonEvent';
import Finder from './Finder';
import GetMyCharacter from './GetMyCharacter';

export default class Debug_WaypointButton extends ZepetoScriptBehaviour {
    public m_WaypointName : string;
    Start() {    
        ButtonEvent.Add(this.gameObject,()=>
        {
            var tf = Finder.Find(this.m_WaypointName).transform;
            var char = GetMyCharacter.Get();
            char.Teleport(tf.position,tf.rotation);
        });
    }

}