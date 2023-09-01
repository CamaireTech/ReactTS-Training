import React, {useContext,useState,useEffect} from "react"
import { MissionContext } from "../../Context/MissionContext"
import { IMissionInterface, MissionContextType } from "../../types/Mission"
import { SingleMission } from "../SIngleMission/SingleSummaryMission"

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
            //In case of no searchString, reset Missions Array
            setAllMission(missions)
        }
        else if (searchString.length > 0){
            //Search Based on name and description
            setAllMission(
                missions.filter(mission=>
                    mission.description.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()) || 
                    mission.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())) 
            )
        }
    },[searchString])

    return (
        <div>
        <div>
            <input type="text" value={searchString} onChange={e=>setSearchString(e.target.value)} style={{backgroundColor:"green"}}/>
        </div>
        {allMissions.map((mission,index)=>{
            return(
                <React.Fragment key={index}>
                    <SingleMission mission={mission} />
                </React.Fragment>
            )
        })}
        </div>
    )
}
