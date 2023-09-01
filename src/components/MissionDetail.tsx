import React from 'react';
import { Mission } from '../Models/Mission';

interface MissionDetailProps {
  mission: Mission;
  onDelete: () => void;
}

const MissionDetail: React.FC<MissionDetailProps> = ({ mission, onDelete }) => {
  return (
    <div className="border p-4 mb-4 bg-gray-200 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{mission.name}</h3>
      <p>Date de Lancement: {mission.launchDate}</p>
      <p>Équipage: {mission.crew.join(', ')}</p>
      <p>Description: {mission.description}</p>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded mt-2"
        onClick={onDelete}
      >
        Supprimer
      </button>
    </div>
  );
};

export default MissionDetail;


// import React from 'react';
// import { Mission } from './Mission'; // Import the Mission interface

// interface MissionDetailProps {
//   mission: Mission; // Mission object passed as a prop
//   onDelete: () => void; // Function to handle mission deletion
// }

// const MissionDetail: React.FC<MissionDetailProps> = ({ mission, onDelete }) => {
//   return (
//     <div className="border p-4 mb-4">
//       <h3 className="text-xl font-semibold">{mission.name}</h3>
//       <p>Date de Lancement: {mission.launchDate}</p>
//       <p>Équipage: {mission.crew.join(', ')}</p>
//       <p>Description: {mission.description}</p>
//       <button
//         className="bg-red-500 text-white px-2 py-1 rounded"
//         onClick={onDelete}
//       >
//         Supprimer
//       </button>
//     </div>
//   );
// };

// export default MissionDetail;
