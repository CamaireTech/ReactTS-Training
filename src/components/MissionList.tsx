import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { Mission } from '../Models/Mission';
import { removeMission } from '../redux/missions/missionSlice';
import MissionDetail from './MissionDetail';

const MissionList: React.FC = () => {
  const missions = useSelector((state: RootState) => state.missions.missions);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [showNoMissionsMessage, setShowNoMissionsMessage] = useState(false);

  const handleDeleteMission = (missionId: number) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this mission?');

    if (shouldDelete) {
      dispatch(removeMission(missionId)); // Dispatch the removeMission action
    }
  };

  const filteredMissions = missions.filter((mission) =>
    mission.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Liste des Missions Spatiales</h1>
        
      {/* Search Bar */}
      <div className="mb-4">
        <input
          className="border rounded-lg p-2 w-full"
          type="text"
          placeholder="Rechercher par nom de mission"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {filteredMissions.length === 0 && showNoMissionsMessage && (
          <p className="text-red-500 m-4">Aucune mission ne correspond à la recherche.</p>
        )}

        {filteredMissions.length > 0 ? (
          filteredMissions.map((mission) => (
            <MissionDetail
              key={mission.id}
              mission={mission}
              onDelete={() => handleDeleteMission(mission.id)}
            />
          ))
        ) : (
          // Show a message when no missions match the search criteria
          <p className="text-gray-500 m-4">Aucune mission à afficher.</p>
        )}
      </div>
    </>
  );
};

export default MissionList;

// // MissionList.tsx
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import MissionDetail from './MissionDetail';
// import { removeMission } from '../redux/missions/actions';
// import { RootState } from '../redux/RootState';

// const MissionList: React.FC = () => {
//   const missions = useSelector((state: RootState) => state.missions);
//   const dispatch = useDispatch()

//   const handleDeleteMission = (missionId: number) => {
//     dispatch(removeMission(missionId)); // Dispatch the removeMission action
//   };

//   // Handle the case where missions are not available yet
//   if (!missions || missions.length === 0) {
//     return <div>Loading...</div>; // You can replace this with a loading indicator
//   }

//   const missionList = [];

//   for (let i = 0; i < missions.length; i++) {
//     const mission = missions[i];
//     missionList.push(
//       <MissionDetail
//         key={mission.id}
//         mission={mission}
//         onDelete={() => handleDeleteMission(mission.id)}
//       />
//     );
//   }

//   return <div className="container mx-auto p-4">{missionList}</div>;
// };

// export default MissionList;


