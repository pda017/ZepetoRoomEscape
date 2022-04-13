import { Collider, Color, Time } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AddItemToInventory from './AddItemToInventory';
import CheckKeyInput from './CheckKeyInput';
import KeyInputData from './Data/KeyInputData';
import SelectObjData from './Data/SelectObjData';
import DetectSelectObj from './DetectSelectObj';
import ExcuteSelectEvent from './ExcuteSelectEvent';
import IsOn from './IsOn';
import ItemKey from './ItemKey';
import SelectObjType, { SelectObjEnum } from './SelectObjType';

export default class PlayerController extends ZepetoScriptBehaviour {
    m_SelectCol : Collider;
    m_DetectSelectObj : DetectSelectObj;
    Start() {    
        this.m_DetectSelectObj = new DetectSelectObj();
    }
    Update()
    {
        this.m_SelectCol = this.m_DetectSelectObj.Detect();
        if(this.m_SelectCol !== null)
        {
            SelectObjData.m_ObjPos = this.m_SelectCol.bounds.center;
            SelectObjData.m_canSelect = true;

            if(CheckKeyInput.GetKeyDown(KeyInputData.m_SelectKey))
            {
                ExcuteSelectEvent.Excute(this.m_SelectCol.gameObject);
                var selectObjType = this.m_SelectCol.GetComponentInParent<SelectObjType>();
                if(selectObjType.m_Value == SelectObjEnum.Item)
                {
                    var itemKey = this.m_SelectCol.GetComponentInParent<ItemKey>();
                    AddItemToInventory.Add(itemKey.m_Value);
                    this.m_SelectCol.gameObject.SetActive(false);
                }
                else if(selectObjType.m_Value == SelectObjEnum.Switch)
                {
                    var isOn = this.m_SelectCol.GetComponentInParent<IsOn>();
                    isOn.m_Value = true;
                    isOn.m_Dirty = Time.time;
                }
            }
        }
        else
        {
            SelectObjData.m_canSelect = false;
        }
    }
}