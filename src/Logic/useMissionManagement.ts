import { useEffect, useState } from 'react';
import { Mission } from '../Entities/Mission';
import { readMissionsByState, createMission, updateMission, deleteMission } from '../Infrastructure/Services';
import { server } from 'typescript';

const useMissionManagement = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    loadMissions();
  }, []);

  const loadMissions = async () => {
    try {
      const missionData = await readMissionsByState();
      setMissions(missionData);
    } catch (error) {
      // Handle errors
      console.error('Error loading missions:', error);
    }
  };

  const addMission = async (mission: Mission) => {
    try {
      await createMission(mission);
      loadMissions();
    } catch (error) {
      // Handle errors
      console.error('Error creating mission:', error);
    }
  };

  const editMission = async (mission: Mission) => {
    try {
      await updateMission(mission);
      loadMissions();
    } catch (error) {
      // Handle errors
      console.error('Error updating mission:', error);
    }
  };

  const removeMission = async (missionId: string) => {
    try {
      await deleteMission(missionId);
      loadMissions();
    } catch (error) {
      // Handle errors
      console.error('Error deleting mission:', error);
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
