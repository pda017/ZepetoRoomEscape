import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import SafeBoxData from './Data/SafeBoxData'

export default class RotateSafeBoxHandle {
    public static Left()
    {
        SafeBoxData.m_RotatorAngle += 90;
        SafeBoxData.m_InputCommand += "L";
        SafeBoxData.m_InputDirty++;
    }
    public static Right()
    {
        SafeBoxData.m_RotatorAngle -= 90;
            SafeBoxData.m_InputCommand += "R";
            SafeBoxData.m_InputDirty++;
    }
}