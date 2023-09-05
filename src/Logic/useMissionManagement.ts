
import { useEffect, useState } from 'react';
import { Mission } from '../Entities/Mission';
import { readMissions, createMission, updateMission, deleteMission } from '../Infrastructure/Services';

const useMissionManagement = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    loadMissions();
  }, []);

  const addMission = async (mission: Mission) => {
    try {
      await createMission(mission);
      alert("Mission added succesfully");
      await loadMissions();
    } catch (error) {
      console.error('Error creating mission:', error);
    }
  };

  const editMission = async (mission: Mission) => {
    try {
      await updateMission(mission);
      await loadMissions();
    } catch (error) {
      console.error('Error updating mission:', error);
    }
  };

  const removeMission = async (missionId: string) => {
    try {
      await deleteMission(missionId);
      await loadMissions();
    } catch (error) {
      console.error('Error deleting mission:', error);
    }
  };

  const loadMissions = async () => {
    try {
      const missionData = await readMissions();
      setMissions(missionData);
    } catch (error) {
      console.error('Error loading missions:', error);
    }
  };

  return {
    missions,
    addMission,
    editMission,
    removeMission,
    loadMissions,
  };
};

export default useMissionManagement;
