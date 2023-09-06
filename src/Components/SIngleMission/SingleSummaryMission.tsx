import { IMissionInterface } from "../../Datatypes/Mission"
import {AiOutlineExpand} from "react-icons/ai"

export const SingleMission:React.FC<{mission:IMissionInterface}> = ({mission}) =>{
    return(
        <div className="singleMissionContainer">
            <p>{mission.name}</p>
            <AiOutlineExpand />
        </div>
    )
}
