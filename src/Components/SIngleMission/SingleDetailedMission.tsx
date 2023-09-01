import { IMissionInterface } from "../../types/Mission"

export const SingleDetailedMission = ({mission}:{mission:IMissionInterface | null}) =>{
    let content;

    if(mission){
        content = 
            <div>
            <p>Name : {mission.name}</p>
            <div>
            <p>Description</p>
                <p>{mission.description}</p>
            </div>
            <p>Launch Date ; {mission.launchDate}</p>

            <div>
                <p>Members</p>
                {mission.members.map((member,index)=>{
                    return (
                        <p key={index}>{member}</p>
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
