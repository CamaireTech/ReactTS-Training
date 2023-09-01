import React,{useState} from 'react';
import  {AiOutlineMinusSquare} from "react-icons/ai"
import  {AiOutlinePlusSquare} from "react-icons/ai"
import  {AiOutlineDelete} from "react-icons/ai"
import  {FiEdit} from "react-icons/fi"
import { Modal } from './Components/Modal/Modal';
import { AllMissions } from './Components/AllMissions/Missions';

interface Mission {
  name:string
}

function App() {


  const [modalOpen,setModalOpen] = useState<boolean | undefined>(true)
  const [selectedMission,setSelectedMission] = useState<number>()

  const handleAddMission =()=>{
    document.body.style.height = "fit-content"
    document.body.style.overflow = "hidden"
    setModalOpen(prev=>!prev)
  }

  return (
    <div className="MainApplication">
      <div id='missionDisplay'>
        <div className='addMissinContainer' onClick={handleAddMission}>
          <AiOutlinePlusSquare size={40} />
          <p>Add a mission</p>
        </div>
        <h1>Missions form,buttons , etc</h1>
        <Modal isOpen ={modalOpen} handleModal={setModalOpen}/>
        {/* Map through the missions here */}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid iure excepturi optio perspiciatis ipsa. In possimus harum praesentium esse, unde similique eum adipisci nobis blanditiis, facilis ipsum ipsam. Dolorum, odit.</p>

        {/*Here would be the icons that show the modals for the forms*/}
        <div className='displayHeader'>
          
        </div>  

        {/*Here would be the search box for searching and filtering mission*/}
        <div style={{border:"3px solid red"}}>
          <AllMissions />

        </div>

        {/*This woud be the footer*/}
        <div>

        </div>
      </div>
      <div id='selectedMissionDisplay'>
        <h1>Selected Mission Form</h1>
        
      </div>
    </div>
  );
}

export default App;
