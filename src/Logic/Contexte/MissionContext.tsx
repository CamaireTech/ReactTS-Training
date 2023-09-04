import React, { createContext, useContext, ReactNode } from 'react';
import { Mission } from '../../Entities/Mission';
import useMissionManagement from '../useMissionManagement';

// Define the shape of your context
interface MissionContextType {
  missions: Mission[];
  addMission: (mission: Mission) => void;
}

// Create the context
const MissionContext = createContext<MissionContextType | undefined>(undefined);

// Create a custom hook to access the context
export function useMissionContext() {
  const context = useContext(MissionContext);
  if (!context) {
    throw new Error('useMissionContext must be used within a MissionProvider');
  }
  return context;
}

// Create the context provider component
interface MissionProviderProps {
  children: ReactNode;
}

export function MissionProvider({ children }: MissionProviderProps) {
  const { missions, addMission } = useMissionManagement();

  // Add other functions for managing missions as needed

  const contextValue: MissionContextType = {
    missions,
    addMission,
  };

  return (
    <MissionContext.Provider value={contextValue}>
      {children}
    </MissionContext.Provider>
  );
}
