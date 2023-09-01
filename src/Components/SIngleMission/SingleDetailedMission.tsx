import { IMissionInterface } from "../../types/Mission"

export const SingleDetailedMission = ({mission}:{mission:IMissionInterface | null}) =>{
    let content;

    if(mission){
        content = 
            <div className="detailedMissionContainer">
            <p> <b>Name:</b> {mission.name}</p>
            <div>
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
