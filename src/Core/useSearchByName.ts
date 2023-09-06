import { useEffect, useState } from 'react';
import { Mission } from '../Entities/Mission';

import { useMissionContext } from '../Core/Contexte/MissionContext';


export function useSearchByName() {
  const { missions } = useMissionContext();
  const [searchResults, setSearchResults] = useState<Mission[]>(missions);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setSearchResults(missions);
  }, [missions]);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    if (searchTerm === '') {
      setSearchResults(missions);
    } else {
      const filteredMissions = missions.filter((mission) =>
        mission.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredMissions);
    }
  };

  return { searchResults, setSearchResults, searchTerm, handleSearch };
}
