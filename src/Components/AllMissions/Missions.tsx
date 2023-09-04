import React, {useContext,useState,useEffect} from "react"
import { MissionContext } from "../../Context/MissionContext"
import { IMissionInterface, MissionContextType } from "../../types/Mission"
import { SingleMission } from "../SIngleMission/SingleSummaryMission"
import { SingleDetailedMission } from "../SIngleMission/SingleDetailedMission"
import {BsSearch} from "react-icons/bs"

export const AllMissions = () =>{

    const {missions,saveMission,deleteMission} = useContext(MissionContext) as MissionContextType
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
    },[searchString,missions])

    return (
        <div>
        <div className="inputContainer">
            <BsSearch color="white" size={20} />
            <input type="text" 
            placeholder="Search for a mission"
            value={searchString} 
            onChange={e=>setSearchString(e.target.value)}/>
        </div>

        {/* LIST OF ALL MISSIONS  */}
        <div className="missionListContainer">
            <div className="missionList">
            {allMissions.map((mission,index)=>{
                return(
                    <div key={index} onClick={()=>setSelectedMission(mission)}>
                        <SingleMission mission={mission} />
                    </div>
                )
            })}
            {allMissions.length == 0 && <h3>Auccun Element trouver</h3>}
            </div>
                {/* DETAILS OF SELECTED MISSION */}
                <div className="selectedMissionDetails">
                    <SingleDetailedMission  mission={selectedMission} deleteMission={deleteThisMission} />
                </div>
            </div>
        </div>
    )
}


