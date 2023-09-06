import React, {useContext,useState,useEffect} from "react"
import { MissionContext } from "../../Context/MissionContext"
import { IMissionInterface, MissionContextType } from "../../Datatypes/Mission"
import { SingleMission } from "../SIngleMission/SingleSummaryMission"
import { SingleDetailedMission } from "../SIngleMission/SingleDetailedMission"
import { SearchMissions } from "../SearchMissions/SearchMission"


export const AllMissions = () =>{

    const {missions,deleteMission} = useContext(MissionContext) as MissionContextType
    const [allMissions,setAllMission] = useState<IMissionInterface[]>([])

    const [searchString,setSearchString] = useState<string>("")
    const [selectedMission,setSelectedMission] = useState<IMissionInterface | null>(null)

    useEffect(()=>{
        setAllMission(missions)
    },[missions])

    const deleteThisMission = (id:string) =>{
        deleteMission(id)
        setSelectedMission(null)
        
    }

    useEffect(()=>{
        if(searchString.length === 0 ){
            setAllMission(missions)
        }
        else if (searchString.length > 0){

            setAllMission(
                missions.filter(mission=>
                    mission.description.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()) || 
                    mission.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())) 
            )
        }
    },[searchString,missions])

    return (
        <div>
            <SearchMissions 
                searchString={searchString} 
                setSearchString={setSearchString}
                />

        <div className="missionListContainer">
            <div className="missionList">
            {allMissions.map((mission,index)=>{
                return(
                    <div key={index} onClick={()=>setSelectedMission(mission)}>
                        <SingleMission mission={mission} />
                    </div>
                )
            })}
            {allMissions.length === 0 && <h3>Auccun Element trouver</h3>}
            </div>
                <div className="selectedMissionDetails">
                    <SingleDetailedMission  mission={selectedMission} deleteMission={deleteThisMission} />
                </div>
            </div>
        </div>
    )
}


