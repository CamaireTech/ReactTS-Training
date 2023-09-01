import React, {useContext,useState,useEffect} from "react"
import { MissionContext } from "../../Context/MissionContext"
import { IMissionInterface, MissionContextType } from "../../types/Mission"

export const AllMissions = () =>{

    const {missions,saveMission,deleteMission} = useContext(MissionContext) as MissionContextType
    const [allMissions,setAllMission] = useState<IMissionInterface[]>([])

    const [searchString,setSearchString] = useState<string>(" ")

    useEffect(()=>{
        setAllMission(missions)
    },[missions])

    console.log(missions)

    useEffect(()=>{
        if(searchString.length == 0 ){
            setAllMission(missions)
        }
        else if (searchString.length > 0){
            setAllMission(
                missions.filter(mission=>
                    mission.description.includes(searchString) || 
                    mission.name.includes(searchString)|| 
                    mission.members.forEach(mem =>mem.includes(searchString))
                            ) 
            )
        }
    },[searchString])

    return (
        <div>

        {allMissions.map((mission,index)=>{
            return(
                <React.Fragment key={index}>
                    <p>{mission.name}</p>
                </React.Fragment>
            )
        })}
        </div>
    )
}
