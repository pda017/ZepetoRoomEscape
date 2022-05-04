import { Quaternion, Time, Transform } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import RemoconData from '../Data/RemoconData';
import Finder from '../Finder';
import IsOn from '../IsOn';
import RemoconInputChanged from '../RemoconInputChanged';
import ZAnimator from '../ZAnimator';

export default class Obj_OldTvCenter extends ZepetoScriptBehaviour {
    public m_MoveTime : number = 1;
    m_Tf : Transform;
    m_RemoconInputChanged : RemoconInputChanged = new RemoconInputChanged();
    m_NumState : number = 0;
    m_Stamp : number;
    m_DefaultTf : Transform;
    m_LeftTf : Transform;
    m_IsOn : IsOn;
    Start() 
    {
        this.m_IsOn = this.GetComponentInChildren<IsOn>();
        this.m_DefaultTf = Finder.Find("Room4_OldTv_DefaultTf").transform;
        this.m_LeftTf = Finder.Find("Room4_OldTv_LeftTf").transform;
        this.m_RemoconInputChanged.Check();
        this.m_Tf = this.transform;
    }
    Update()
    {
        if(this.m_NumState === 0)
        {
            if(this.m_RemoconInputChanged.Check())
            {
                if(RemoconData.m_Dir.x < 0)
                {
                    this.m_IsOn.m_Value = false;
                    this.m_Stamp = Time.time;
                    this.m_NumState++;
                }
            }
        }
        else if(this.m_NumState === 1)
        {
            var t = (Time.time - this.m_Stamp) / this.m_MoveTime;
            this.m_Tf.rotation = Quaternion.Lerp(this.m_DefaultTf.rotation,this.m_LeftTf.rotation,t);
            if(t >= 1)
            {
                this.m_NumState++;
            }
        }
        else if(this.m_NumState === 2)
        {
            if(this.m_RemoconInputChanged.Check())
            {
                if(RemoconData.m_Dir.x > 0)
                {
                    this.m_IsOn.m_Value = false;
                    this.m_Stamp = Time.time;
                    this.m_NumState++;
                }
            }
        }
        else if(this.m_NumState === 3)
        {
            var t = (Time.time - this.m_Stamp) / this.m_MoveTime;
            this.m_Tf.rotation = Quaternion.Lerp(this.m_LeftTf.rotation,this.m_DefaultTf.rotation,t);
            if(t >= 1)
            {
                this.m_NumState = 0;
            }
        }
    }
}