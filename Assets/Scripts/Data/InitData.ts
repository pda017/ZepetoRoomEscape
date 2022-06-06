import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import StartPointData from '../Data/StartPointData'
import CabinetData from './CabinetData';
import DialogData from './DialogData';
import DoorLockData from './DoorLockData';
import InventoryData from './InventoryData';
import KeyInputData from './KeyInputData';
import LobbyData from './LobbyData';
import PlayerData from './PlayerData';
import RotateLockData from './RotateLockData';
import SafeBoxData from './SafeBoxData';
import SecretCabinetData from './SecretCabinetData';
import SelectObjData from './SelectObjData';
import TimerData from './TimerData';

export default class InitData {
    public static Init()
    {
        LobbyData.Init();
        StartPointData.Init();
        InventoryData.Init();
        SelectObjData.Init();
        KeyInputData.Init();
        DialogData.Init();
        DoorLockData.Init();
        RotateLockData.Init();
        CabinetData.Init();
        SecretCabinetData.Init();
        SafeBoxData.Init();
        PlayerData.Init();
        TimerData.Init();
    }
}