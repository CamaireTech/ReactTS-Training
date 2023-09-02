import React,{useState} from 'react';
import  {AiOutlinePlusSquare} from "react-icons/ai"
import { Modal } from './Components/Modal/Modal';
import { AllMissions } from './Components/AllMissions/Missions';

interface Mission {
  name:string
}

function App() {


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
        {/*Here would be the search box for searching and filtering mission*/}
        <div className='missionsContainer'>
          <AllMissions />
        </div>
      </div>
    </div>
  );
}

export default App;
