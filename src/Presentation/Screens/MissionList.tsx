import React, { useState } from 'react';
import useMissionManagement from '../../Logic/useMissionManagement';
import Button from '../../Presentation/Components/Button';
import { useMissionContext } from '../../Logic/Contexte/MissionContext';
import { Mission } from '../../Entities/Mission';

const MissionList: React.FC = () => {
  const { removeMission } = useMissionManagement();
  const { missions } = useMissionContext();

  const [searchResults, setSearchResults] = useState<Mission[]>(missions);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    if (searchTerm === '') {
      setSearchResults(missions);
    } else {
      // Perform the search logic here and update searchResults
      const filteredMissions = missions.filter((mission) =>
        mission.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredMissions);
    }
  };

  const handleDeleteClick = (missionId: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this mission?');

    if (confirmDelete) {
      removeMission(missionId)
        .then(() => {
          setSearchResults((prevResults) => prevResults.filter((mission) => mission.id !== missionId));
          alert('Mission deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting mission:', error);
        });
    }
  };

  return (
    <div className="my-4">
      <input
        className="border rounded-lg p-2 w-full"
        type="text"
        placeholder="Rechercher par nom de mission"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchResults.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((mission) => (
            <li
              key={mission.id}
              className="bg-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-2">{mission.name}</h3>
              <p className="text-gray-700 text-sm mb-2">Date de Lancement: {mission.launchDate}</p>
              <p className="text-gray-700 text-sm mb-2">Équipage: {mission.crew.join(', ')}</p>
              <p className="text-gray-700 text-sm">{mission.description}</p>
              <div className="flex justify-end mt-2">
                <Button
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded"
                  onClick={() => handleDeleteClick(mission.id)}
                >
                  Supprimer
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        searchTerm.trim() !== '' && <p>No missions found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default MissionList;
