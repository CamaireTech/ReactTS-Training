import React,{useState} from 'react'
import './modal.scss'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { Mission } from '../Models/Mission'

interface ModalProps {
    isOpen : boolean | undefined
    handleModal :any
}

export const Modal:React.FC<ModalProps> = ({isOpen,handleModal}) =>{

    //Name Launchdate, crew, description
    const [name,setName] = useState<string>("")
    const [launchDate,setLaunch] = useState<string>("")
    const [description,setDescription] = useState<string>("")

    const [crewAmt,setCrewAmt] = useState<number>(1)
    const [crewMembers,setCrewMembers] = useState<string[]>([])

//Create a Mission Context !

    const handleMissionAdd = ()=>{
        let mission = new Mission(
            name,
            description,
            crewMembers
        )
    }

    const membersInput = ()=>{
        for(let i=0;i<=crewAmt;i++){
            
        }
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
                    <div>
                        <input type="text" placeholder='Mission Name' className='input'/> 
                    </div>
                    <div>
                        <textarea name="desc" id="" cols={30} rows={10}
                        placeholder='Mission Objectives'
                        ></textarea>
                    </div>
                    {for(int i=0;i<=crewAmt;i++){
                        
                    }}
                </div>
            </div>
        </div>
    )
}
