import {createContext,useEffect,useState } from "react";
import { MissionContextType,IMissionInterface } from "../types/Mission";
import { Mission } from "../Models/Mission";
import axios,{AxiosResponse} from "axios";
import { FiCommand } from "react-icons/fi";
import { toast } from 'react-toastify';


export const MissionContext = createContext<MissionContextType | null>(null)

export const MissionProvider:React.FC<{children:React.ReactNode}> = ({ children}) =>{
    const [missions,setMissions] = useState<IMissionInterface[]>([])

    //Display Loading icon while still fetching List of missions from Fake Db
    const [missionLoading,setMissionLoading] = useState(true)


    //Getting initial data from server (db.json)
    useEffect(()=>{
        axios.get("http://localhost:3031/missions").then(res=>{
            let dbMissions:IMissionInterface[] = res.data
            setMissions(dbMissions)
            setMissionLoading(false)
        }).catch(err =>{
            setMissionLoading(true)
            console.log(err)
        })
    },[])



    const saveMission =(mission:IMissionInterface) =>{
        const newLyCreatedMission :IMissionInterface = new Mission(
            mission.id,
            mission.name,
            mission.description,
            mission.members,
            mission.launchDate
            )
            
            //Saving Mission to database
            axios.post("http://localhost:3031/missions",newLyCreatedMission).then(function(res:AxiosResponse){
                toast.success("Mission sucessfully created !", {
                    position: toast.POSITION.TOP_CENTER
                  });
                  setMissions([...missions,newLyCreatedMission])
            }).catch(function(err:any){
                toast.error("Error while inserting Mission", {
                    position: toast.POSITION.TOP_CENTER
                  });
            })
    }

    //Deleting single Mission
    const deleteMission = (id:string) =>{
        const theMission = missions.find(singleMission => singleMission.id === id)
        if(theMission){
            setMissions(missions.filter(mission=>mission.id !== theMission?.id))
        }
        axios.delete(`http://localhost:3031/missions/${id}`).then(function(res:AxiosResponse){
            toast.success("Mission sucessfully Deleted !", {
                position: toast.POSITION.TOP_CENTER
              });
        }).catch(function(err:any){
            toast.error("Error while Deleting Mission", {
                position: toast.POSITION.TOP_CENTER
              });
        })
    }

    if (missionLoading){
        return (
            <div style={{width:"fit-content",margin:"10% auto"}}>
                <FiCommand className="loading-icon" size={60}/>
            </div>
        )
    }

    return (
        <MissionContext.Provider value={{missions,saveMission,deleteMission}}>
            {children}
        </MissionContext.Provider>
    )
}
