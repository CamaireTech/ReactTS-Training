import React from 'react';
import AddMissionForm from './Presentation/Screens/AddMissionForm';
import MissionList from './Presentation/Screens/MissionList';

const App: React.FC = () => {

  return (
    <div className="App">
        <main className="container mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4">Liste des Missions Spatiales</h2>
            <AddMissionForm />
            <MissionList />
        </main>
    </div>
  );
}

export default App;