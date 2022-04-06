import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import Data_Int from '../DataType/Data_Int'

export default class KeyInputData {
    public static m_SelectKey : Data_Int = new Data_Int(0);
    public static Init()
    {
        this.m_SelectKey.m_Value = 0;
    }
}