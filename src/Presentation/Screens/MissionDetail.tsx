import React from 'react';
import { Mission } from '../../Entities/Mission';

interface MissionDetailProps {
  mission: Mission;
  onDelete: () => void;
}

const MissionDetail: React.FC<MissionDetailProps> = ({ mission, onDelete }) => {
  return (
    <div className="mb-4 p-4 border border-gray-300 rounded shadow">
      <h3 className="text-lg font-semibold">{mission.name}</h3>
      <p>Date de Lancement: {mission.launchDate}</p>
      <p>Équipage: {mission.crew.join(', ')}</p>
      <p>Description: {mission.description}</p>
      <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mt-2"
      >
        Supprimer
      </button>
    </div>
  );
};

export default MissionDetail;
