import {createContext,useState } from "react";
import { MissionContextType,IMissionInterface } from "../types/Mission";
import {v4 as uuidv4} from "uuid"
import { Mission } from "../Models/Mission";

export const MissionContext = createContext<MissionContextType | null>(null)

export const MissionProvider:React.FC<{children:React.ReactNode}> = ({ children}) =>{
    const [missions,setMissions] = useState<IMissionInterface[]>([
        new Mission(
            uuidv4(),"Go to Space","Go to space with the whole Team Just for Fun then Set Fire",["Ojong", "Konno Meli Fuente", "Ambassira Ambassira"],"22/01/2021")
    ])

    const saveMission =(mission:IMissionInterface) =>{
        const newLyCreatedMission :IMissionInterface = new Mission(
            mission.id,
            mission.name,
            mission.description,
            mission.members,
            mission.launchDate
            )
           
            setMissions([...missions,newLyCreatedMission])
    }

    const deleteMission = (id:string) =>{
        const theMission = missions.find(singleMission => singleMission.id === id)
        if(theMission){
            setMissions(missions.filter(mission=>mission.id !== theMission?.id))
        }
    }

    return (
        <MissionContext.Provider value={{missions,saveMission,deleteMission}}>
            {children}
        </MissionContext.Provider>
    )
}
