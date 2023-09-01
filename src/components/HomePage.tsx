import React from 'react';
import MissionList from './MissionList';
import AddMissionForm from './AddMissionForm';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Mission List */}
      <MissionList />

      {/* Button to Open Pop-In */}
      <AddMissionForm />

      {/* Pop-In */}
      {/* You can render the pop-in here. */}
    </div>
  );
};

export default HomePage;
