import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Finder from './Finder'

export default class AddToFinder extends ZepetoScriptBehaviour {
    Awake()
    {
        Finder.Add(this.gameObject);
    }
}