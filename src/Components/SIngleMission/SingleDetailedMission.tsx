import { IMissionInterface } from "../../types/Mission"
import {MdOutlineDelete} from "react-icons/md"

export const SingleDetailedMission = ({mission,deleteMission}:{mission:IMissionInterface | null,deleteMission:any}) =>{
    let content;

    if(mission){
        content = 
            <div className="detailedMissionContainer">
            <p> <b>Name:</b> {mission.name}</p>
            <div style={{maxWidth:"330px"}}>
            <p><b>Description</b></p>
                <p>{mission.description}</p>
            </div>
            <p><b>Launch Date :</b> {mission.launchDate}</p>

            <div>
                <p><b>Members</b></p>
                {mission.members.map((member,index)=>{
                    return (
                        <p key={index}> - {member}</p>
                    )
                })}
            </div>
            <div style={{width:"fit-content"}} onClick={()=>deleteMission(mission.id)}>
                <MdOutlineDelete size={35} color="red"/>
            </div>
        </div>
    }
    else content = <div>
        <h5>Selectionner un Element</h5>
    </div>
    return(
        <div>
            {content}
        </div>
    )
}
