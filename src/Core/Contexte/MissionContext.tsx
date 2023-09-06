import React, { ReactNode, useContext } from 'react';
import useMissionManagement from '../useMissionManagement';
import { Mission } from '../../Entities/Mission';

// Define the type for your context
interface MissionContextType {
  missions: Mission[];
  addMission: (mission: Mission) => Promise<void>;
  editMission: (mission: Mission) => Promise<void>;
  removeMission: (missionId: string) => Promise<void>;
}

// Create the context with the specified type
const MissionContext = React.createContext<MissionContextType | null>(null);

export function useMissionContext() {
  const context = useContext(MissionContext);
  if (context === null) {
    throw new Error('useMissionContext must be used within a MissionProvider');
  }
  return context;
}

interface MissionContextProviderProps {
  children: ReactNode;
}

export function MissionProvider({ children }: MissionContextProviderProps) {
  const missionManagement = useMissionManagement();

  return (
    <MissionContext.Provider value={missionManagement}>
      {children}
    </MissionContext.Provider>
  );
}
