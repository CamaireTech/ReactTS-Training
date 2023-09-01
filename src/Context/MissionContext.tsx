import { Children, createContext,useState } from "react";
import { MissionContextType,IMissionInterface } from "../types/Mission";
import {v4 as uuidv4} from "uuid"

export const MissionContext = createContext<MissionContextType | null>(null)

export const MissionProvider:React.FC<{children:React.ReactNode}> = ({ children}) =>{
    const [missions,setMissions] = useState<IMissionInterface[]>([
        {
            id:uuidv4(),
            name:"Go to Space",
            description:"Go to space with the whole Team Just for Fun then Set Fire",
            launchDate:"22/01/2021",
            members:["Ojong", "Konno Meli Fuente", "Ambassira Ambassira"]
        }
    ])

    const saveMission =(mission:IMissionInterface) =>{
            const newMission:IMissionInterface = {
                id:uuidv4(),
                name:mission.name,
                description:mission.description,
                members:mission.members,
                launchDate:mission.launchDate
            }

           
            setMissions([...missions,newMission])
            console.log(mission)
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
