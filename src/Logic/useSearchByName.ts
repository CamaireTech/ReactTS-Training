// useSearchByName.ts
import { useState, useMemo } from 'react';
import { Mission } from '../Entities/Mission'; // Import your mission model here

const UseSearchByName = (missions: Mission[]) => {
  const [searchText, setSearchText] = useState('');

  const filteredMissions = useMemo(() => {
    if (!searchText) {
      return missions;
    }

    const searchTerm = searchText.toLowerCase().trim();
    return missions.filter((mission) =>
      mission.name.toLowerCase().includes(searchTerm)
    );
  }, [missions, searchText]);

  return {
    searchText,
    setSearchText,
    filteredMissions,
  };
};

export default UseSearchByName;
