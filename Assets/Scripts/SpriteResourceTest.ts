import { Resources, Sprite } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SpriteResourceTest extends ZepetoScriptBehaviour {

    Start() {    
        var arr = Resources.LoadAll<Sprite>("Sprites");
        arr.forEach(value=>
            {
                console.log("Obj:" + value + ",Name:" + value.name + "isSprite: " + (value instanceof Sprite));
            });
    }

}