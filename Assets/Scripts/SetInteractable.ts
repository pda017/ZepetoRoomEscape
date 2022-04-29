import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Finder from './Finder';
import Interactable from './Interactable';

export default class SetInteractable {
    public static Set(objName :string, bEnable : boolean)
    {
        Finder.Find(objName).GetComponent<Interactable>().m_Value = bEnable;
    }
    public static SetArray(objName : string[], bEnable : boolean)
    {
        objName.forEach(v=>this.Set(v,bEnable));
    }
}