import React,{useState} from 'react';
import  {AiOutlinePlusSquare} from "react-icons/ai"
import { Modal } from '../../Components/Modal/Modal';
import { AllMissions } from '../../Components/MissionList/Missions';


export const Home = () => {


  const [modalOpen,setModalOpen] = useState<boolean | undefined>(true)



  const handleModalState =()=>{
    setModalOpen(prev=>!prev)
  }

  return (
    <div className="MainApplication">

      <div id='missionDisplay'>

        <p> Name : <b> Ojong Clinton </b></p>

        <div className='addMissinContainer' onClick={handleModalState}>

          <AiOutlinePlusSquare size={40} />

          <p>Add a mission</p>

        </div>

        <Modal isOpen ={modalOpen} handleModal={handleModalState}/>


        <div className='missionsContainer'>

          <AllMissions />

        </div>

      </div>

    </div>
  );
}
