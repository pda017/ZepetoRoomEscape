import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Data_Int from './DataType/Data_Int';

export default class CheckKeyInput extends ZepetoScriptBehaviour {
    public static GetKeyDown(keyState : Data_Int) : boolean
    {
        if(keyState.m_Value === 2)
            return true;
        return false;
    }
    public static GetKeyStay(keyState : Data_Int) : boolean
    {
        if(keyState.m_Value > 0)
            return true;
        return false;
    }
    public static GetKeyUp(keyState : Data_Int) : boolean
    {
        if(keyState.m_Value === -1)
            return true;
        return false;
    }
}