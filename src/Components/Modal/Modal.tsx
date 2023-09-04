import React,{useState,useRef,useContext, MouseEventHandler} from 'react'
import './modal.scss'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { Mission } from '../../Models/Mission'
import { v4 as uuidv4 } from 'uuid';
import { MissionContext } from '../../Context/MissionContext';
import { IMissionInterface, MissionContextType } from '../../types/Mission';
import {TiDeleteOutline} from "react-icons/ti"

interface ModalProps {
    isOpen : boolean | undefined
    handleModal :any
}

export const Modal:React.FC<ModalProps> = ({isOpen,handleModal}) =>{

    //Getting the missions from the Context. Making it available to the Search bar, Modal box, etc
    const {saveMission} = useContext(MissionContext) as MissionContextType

    //Name Launchdate, crew, description
    const crewRef = useRef<HTMLInputElement>(null)
    const [name,setName] = useState<string>("")
    const [launchDate,setLaunch] = useState<string>("")
    const [description,setDescription] = useState<string>("")

    const [crewAmt,setCrewAmt] = useState<number>(0)
    const [crewMembers,setCrewMembers] = useState<string[]>([])
    const [crewname,setCrewName] = useState<string>("")

    //UUID of newly created Mission
    let theId = uuidv4()
    const handleAddMission = async()=>{
        let mission:IMissionInterface = new Mission(theId,name,description,crewMembers,launchDate)

            //Save mission to database
            saveMission(mission)

            //Resetting input Fileds After Mission Submission
            setCrewMembers([])
            setCrewName("")
            setName("")
            setDescription("")
            setCrewAmt(0)
            setLaunch("")
            handleModal()
    }

    const handleAddCrew = (e:any)=>{
        setCrewMembers(prevCrewMembers => [...prevCrewMembers, crewname]);
        setCrewAmt(prev=>prev+=1)
        setCrewName("")
    }

    //Function to make sure all inputs are entered before enabling addMission button
    let checkInputs =()=>{
        if(crewMembers.length > 0 && name.length > 0 && description.length > 0 && launchDate){
            return true
        }
        return false
    }
    const deleteCrew =(index:number):MouseEventHandler<SVGElement> | any=>{
       const member = crewMembers[index]
       setCrewMembers(crewMembers.filter(crew=>crew !== member && index=== crewMembers.indexOf(member)))
    }


    return(
    <div hidden={isOpen} className='modalContainer'>
        <form className='modal-content'>
            <div className='modalHeader'>
                <h3>Got a new Mission ?</h3>
                <div onClick={handleModal}>
                    <AiOutlineCloseSquare size={40} />
                </div>
            </div>
            <div className='actualContent'>
                <p>Mission Name</p>
                <div>
                        <input 
                            required
                            type="text" 
                            value={name} 
                            onChange={(e)=>setName(e.target.value)} 
                            placeholder='Mission Name' 
                            className='input'/> 
                </div>
                <div>
                    <p>Mission description</p>
                    <textarea
                        required
                        value={description} 
                        onChange={(e)=>setDescription(e.target.value)} 
                        className='input' 
                        name="desc" 
                        id="" 
                        cols={30} 
                        rows={10}
                        placeholder='Mission Objectives'></textarea>
                </div>
                <div>
                    <p>Launch Date</p>
                    <input type="date" value={launchDate} onChange={e=>setLaunch(e.target.value)} id="" />
                </div>
                <div>
                    <p>Crew Members</p>
                    {crewMembers.map((crew,index)=>{
                    return(
                    <div key={index} style={{display:"flex",alignItems:"center",gap:"20px",margin:"5px 0px"}}>
                        <p>{crew}</p>
                        <TiDeleteOutline onClick={()=>deleteCrew(index)} color='red' size={18}/>  
                    </div>
                    )})}
                </div>
                <div>
                    <div>
                        <input 
                            required
                            ref={crewRef} 
                            type='text' 
                            value={crewname} 
                            onChange={e=>setCrewName(e.target.value)} />
                        <button disabled={crewname.length == 0} onClick={handleAddCrew}>Add Crew</button>
                        {crewMembers.length === 0 && <p className='error'>At list one crew member is required</p>}
                    </div>
                </div>
            </div>
            <button disabled={!checkInputs()} className='bigBtn' onClick={handleAddMission}>Add Mission</button>
        </form>
    </div>
    )
}
