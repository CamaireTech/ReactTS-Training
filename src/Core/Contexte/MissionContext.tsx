// MissionContext.tsx
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { Mission } from '../../Entities/Mission';
import { getAllMissions, createMission, updateMission, deleteMission } from '../../Infrastructure/Services';

interface MissionContextProviderProps {
  children: ReactNode;
}

interface MissionContextValue {
  missions: Mission[];
  addMission: (mission: Mission) => Promise<void>;
  editMission: (mission: Mission) => Promise<void>;
  removeMission: (missionId: string) => Promise<void>;
  loadMissions: () => Promise<void>;
}

const MissionContext = createContext<MissionContextValue | undefined>(undefined);

export const useMissionContext = (): MissionContextValue => {
  const context = useContext(MissionContext);
  if (!context) {
    throw new Error('useMissionContext must be used within a MissionProvider');
  }
  return context;
};

export const MissionProvider: React.FC<MissionContextProviderProps> = ({ children }) => {
  const [missions, setMissions] = useState<Mission[]>([]);

  const loadMissions = async () => {
    try {
      const missionData = await getAllMissions();
      setMissions(missionData);
    } catch (error) {
      console.error('Error loading missions:', error);
    }
  };

  useEffect(() => {
    // Load missions initially
    loadMissions();
  }, []);

  const addMission = async (mission: Mission) => {
    try {
      await createMission(mission);
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

  const missionContextValue: MissionContextValue = {
    missions,
    addMission,
    editMission,
    removeMission,
    loadMissions,
  };

  return (
    <MissionContext.Provider value={missionContextValue}>
      {children}
    </MissionContext.Provider>
  );
};
