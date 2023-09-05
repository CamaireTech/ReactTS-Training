import React from "react"
import { BsSearch } from "react-icons/bs"

type TSearhMissionProps = {
    searchString :string
    setSearchString : React.Dispatch<React.SetStateAction<string>>
}

export const SearchMissions = ({searchString,setSearchString}:TSearhMissionProps) =>{
    return(
        <div>
            <div className="inputContainer">
                <BsSearch color="white" size={20} />
                    <input type="text" 
                        placeholder="Search for a mission"
                        value={searchString} 
                        onChange={e=>setSearchString(e.target.value)}
                    />
            </div>
        </div>
    )
}
