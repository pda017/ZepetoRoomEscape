import { Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Vector3Util {
    public static Plus(a : Vector3, b : Vector3) : Vector3
    {
        return new Vector3(a.x + b.x,a.y + b.y,a.z + b.z);
    }
    public static Minus(a : Vector3, b : Vector3) : Vector3
    {
        return new Vector3(a.x - b.x,a.y - b.y,a.z - b.z);
    }
}