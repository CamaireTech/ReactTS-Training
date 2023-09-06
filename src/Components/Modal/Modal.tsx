import React,{useState,useRef,useContext, MouseEventHandler} from 'react'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { Mission } from '../../Models/Mission'
import { v4 as uuidv4 } from 'uuid';
import { MissionContext } from '../../Context/MissionContext';
import { IMissionInterface, MissionContextType } from '../../Datatypes/Mission';
import {TiDeleteOutline} from "react-icons/ti"
import { checkFields } from '../../Utils/verifyInput';
import Button from '../Button/Button';

interface ModalProps {
    isOpen : boolean | undefined
    handleModal :any
}

export const Modal:React.FC<ModalProps> = ({isOpen,handleModal}) =>{


    const {saveMission} = useContext(MissionContext) as MissionContextType


    const crewRef = useRef<HTMLInputElement>(null)
    const [name,setName] = useState<string>("")
    const [launchDate,setLaunch] = useState<string>("")
    const [description,setDescription] = useState<string>("")

    const [crewAmt,setCrewAmt] = useState<number>(0)
    const [crewMembers,setCrewMembers] = useState<string[]>([])
    const [crewname,setCrewName] = useState<string>("")


    const handleAddMission = async()=>{
        let mission:IMissionInterface = new Mission(uuidv4(),name,description,crewMembers,launchDate)
            if(
                checkFields([
                {name:'name',data:name},
                {name:'launchDate',data:launchDate},
                {name:'description',data:description},
                {name:'crew Members',data:crewMembers}
             ])
             
             ){

            saveMission(mission)


            setCrewMembers([])
            setCrewName("")
            setName("")
            setDescription("")
            setCrewAmt(0)
            setLaunch("")
            handleModal()
             }

    }

    const handleAddCrew = (e:any)=>{
        setCrewMembers(prevCrewMembers => [...prevCrewMembers, crewname]);
        setCrewAmt(prev=>prev+=1)
        setCrewName("")
    }

    let validateInputs =()=>{
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
                            ref={crewRef} 
                            type='text' 
                            value={crewname} 
                            onChange={e=>setCrewName(e.target.value)} />
                            <Button 
                                title='Add Crew'
                                btnCallback={handleAddCrew}
                                disabled = {crewname.length == 0}
                                />
                        {crewMembers.length === 0 && <p className='error'>At list one crew member is required</p>}
                    </div>
                </div>
            </div>
            <Button 
                fullWidth 
                title='Add Mission' 
                disabled={!validateInputs()}
                btnCallback={handleAddMission}
                />
        </form>
    </div>
    )
}
