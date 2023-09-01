import React,{useState,useRef,useContext} from 'react'
import './modal.scss'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { Mission } from '../Models/Mission'
import { v4 as uuidv4 } from 'uuid';
import { MissionContext } from '../Context/MissionContext';
import { IMissionInterface, MissionContextType } from '../types/Mission';
import {v4 as uuid} from "uuid"

interface ModalProps {
    isOpen : boolean | undefined
    handleModal :any
}

export const Modal:React.FC<ModalProps> = ({isOpen,handleModal}) =>{

        //Getting the missions from the Context. Making it available to the Search bar, Modal box, etc
        const {missions,saveMission,deleteMission} = useContext(MissionContext) as MissionContextType

    //Name Launchdate, crew, description
    const crewRef = useRef<HTMLInputElement>(null)
    const [name,setName] = useState<string>("")
    const [launchDate,setLaunch] = useState<string>("")
    const [description,setDescription] = useState<string>("")

    const [crewAmt,setCrewAmt] = useState<number>(0)
    const [crewMembers,setCrewMembers] = useState<string[]>([])
    const [crewname,setCrewName] = useState<string>("")
    const [test,setTest] = useState()
//Create a Mission Context !

let theId = uuidv4()
    const handleAddMission = ()=>{
        let mission:IMissionInterface = new Mission(
            theId,
            name,
            description,
            crewMembers,
            launchDate
        )

            saveMission(mission)
    }
    
    console.log(missions)


    const handleAddCrew = (e:any)=>{
        setCrewMembers(prevCrewMembers => [...prevCrewMembers, crewname]);
        setCrewAmt(prev=>prev+=1)
        setCrewName(" ")
    }



    return(
        // <div hidden={isOpen} className='modalContainer'>
         <div hidden={false} className='modalContainer'>
            <div className='modal-content'>
                <div className='modalHeader'>
                    <p>Form to add a Mission</p>
                    <div onClick={handleModal}>
                    <AiOutlineCloseSquare size={40} />
                    </div>
                </div>
                <div className='actualContent'>
                    <p>Mission Name</p>
                    <div>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Mission Name' className='input'/> 
                    </div>
                    <div>
                        <p>Mission description</p>
                        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='input' name="desc" id="" cols={30} rows={10}
                        placeholder='Mission Objectives'
                        ></textarea>
                    </div>
                    <div>
                        <p>Launch Date</p>
                        <input type="date" value={launchDate} onChange={e=>setLaunch(e.target.value)} id="" />
                    </div>
                        <div>
                            <p>Crew Members</p>
                            {
                                crewMembers.map((crew,index)=>{
                                    return(
                                        <div key={index}>
                                            <p>{crewMembers[index]} <span> - </span></p> 
                                        </div>
                                    )
                                })
                            }
                        </div>
                    <div>
                    <div>
                <input ref={crewRef} type='text' value={crewname} onChange={e=>setCrewName(e.target.value)} />
                <button onClick={handleAddCrew}>Add Crew</button>
            </div>
                    </div>
                </div>
            <button onClick={handleAddMission}>Add Mission</button>
            </div>
        </div>
    )
}
