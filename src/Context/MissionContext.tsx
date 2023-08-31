
import React ,{ useState,createContext } from "react"

type Props = {
    children?: React.ReactNode;
  };

interface AppContextProps {
    state: Appstate;
    setState: React.Dispatch<React.SetStateAction<Appstate>>;
  }

interface Appstate {
    missions : Mission[]
}

const initalState : Appstate ={
    missions : []
}


export const MissionContext = createContext<AppContextProps>({
    state:initalState,
    setState: () => {}
});

export const MissionContextprovider = ()=>{
    const [missions,setMissions] =  useState([])

    return(
        <>
        
        </>
        // <MissionContext.Provider value={{missions,setMissions}}>
        //     {children}
        // </MissionContext.Provider>
    )
    
}
