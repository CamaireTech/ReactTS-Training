import { IMissionInterface } from "../../types/Mission"
import './singleMission.scss'
import {AiOutlineExpand} from "react-icons/ai"

// export const MissionProvider:React.FC<{children:React.ReactNode}> = ({ children}) =>{
export const SingleMission:React.FC<{mission:IMissionInterface}> = ({mission}) =>{
    return(
        <div className="singleMissionContainer">
            <p>{mission.name}</p>
            <AiOutlineExpand />
        </div>
    )
}
