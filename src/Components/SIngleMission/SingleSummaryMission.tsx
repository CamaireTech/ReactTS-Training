import { IMissionInterface } from "../../types/Mission"


// export const MissionProvider:React.FC<{children:React.ReactNode}> = ({ children}) =>{
export const SingleMission:React.FC<{mission:IMissionInterface}> = ({mission}) =>{
    return(
        <div>
            <p>{mission.name}</p>
        </div>
    )
}
