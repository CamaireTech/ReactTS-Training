import React ,{ useState,createContext } from "react"

type Props = {
    children?: React.ReactNode;
  };

export const MissionContext = createContext<{missions:string | null , setMissions:}>([]);


export const MissionContextprovider = ({children}:Props)=>{
    const [missions,setMissions] =  useState<>([])

    return(
        <MissionContext.Provider value={{missions,setMissions}}>
            {children}
        </MissionContext.Provider>
    )
    
}
