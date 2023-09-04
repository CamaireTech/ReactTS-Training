import React from 'react';
import AddMissionForm from './Presentation/Screens/AddMissionForm';
import MissionList from './Presentation/Screens/MissionList';
import PopIn from './Presentation/Components/PopIn';
import usePopInLogic from './Logic/usePopInLogic';
import Button from './Presentation/Components/Button';
import { MissionProvider } from './Logic/Contexte/MissionContext';

const App: React.FC = () => {
  const { isPopInOpen, openPopIn, closePopIn } = usePopInLogic(); 

  return (
    <div className="App">
      <MissionProvider>
        <main className="container mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4">Liste des Missions Spatiales</h2>
            <AddMissionForm />
            <MissionList />
        </main>
      </MissionProvider>
    </div>
  );
}

export default App;