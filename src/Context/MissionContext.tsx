import {createContext,useEffect,useState } from "react";
import { MissionContextType,IMissionInterface } from "../types/Mission";
import { Mission } from "../Models/Mission";
import { FiCommand } from "react-icons/fi";
import apiMiddleware from "../Middleware/ApiMiddleWare";
import { addMissionSucces, deleteMissionSucces } from "../Utils/succesHandler";
import { loadMissionsError, addMissionError, deleteMissionError } from "../Utils/errorHandler";

export const MissionContext = createContext<MissionContextType | null>(null)

export const MissionProvider:React.FC<{children:React.ReactNode}> = ({ children}) =>{
    const [missions,setMissions] = useState<IMissionInterface[]>([])

    //Display Loading icon while still fetching List of missions from Fake Db
    const [missionLoading,setMissionLoading] = useState(true)

    const setInitialMissions =(data:IMissionInterface[])=>{
        setMissionLoading(false)
        setMissions(data)
    }

    //Getting initial data from server (db.json)
    useEffect(()=>{
        apiMiddleware({action:{type:"FETCH_MISSIONS"},
                    successCallback:(data)=>{setInitialMissions(data.data)},
                    errorCallback:loadMissionsError
        })
    },[])



    const saveMission =async (mission:IMissionInterface) =>{
        const newLyCreatedMission :IMissionInterface = new Mission(
            mission.id,
            mission.name,
            mission.description,
            mission.members,
            mission.launchDate
            )
            
            apiMiddleware({action:{type:"ADD_MISSION"},
                           successCallback:addMissionSucces,
                           errorCallback:addMissionError,
                           mission:newLyCreatedMission
        })

        setMissions([...missions,newLyCreatedMission])

    }

    //Deleting single Mission
    const deleteMission = async (id:string) =>{
        const theMission = missions.find(singleMission => singleMission.id === id)

        apiMiddleware({action:{type:"DELETE_MISSION"},
        successCallback:deleteMissionSucces,
        errorCallback:deleteMissionError,
        mission:theMission
        
            })
            setMissions(missions.filter(mission=>mission.id !== theMission?.id))
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
