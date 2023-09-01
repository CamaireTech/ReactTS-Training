import React, {useContext,useState,useEffect} from "react"
import { MissionContext } from "../../Context/MissionContext"
import { IMissionInterface, MissionContextType } from "../../types/Mission"

export const AllMissions = () =>{

    const {missions,saveMission,deleteMission} = useContext(MissionContext) as MissionContextType
    const [allMissions,setAllMission] = useState<IMissionInterface[]>([])

    const [searchString,setSearchString] = useState<string>("")

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
                    mission.description.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()) || 
                    mission.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())|| 
                    mission.members.forEach(mem =>mem.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()))
                            ) 
            )
        }
    },[searchString])

    return (
        <div>
        <div>
            <input type="text" value={searchString} onChange={e=>setSearchString(e.target.value)}/>
        </div>
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
