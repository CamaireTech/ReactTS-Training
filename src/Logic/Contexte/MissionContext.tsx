import React, { createContext, useContext, ReactNode } from 'react';
import useMissionManagement  from '../../Logic/useMissionManagement';

interface MissionProviderProps {
  children: ReactNode;
}

const MissionContext = createContext({});

export function useMissionContext() {
  return useContext(MissionContext) || {};
}

export function MissionProvider({ children }: MissionProviderProps) {
  const { missions, addMission, editMission, removeMission, loadMissions } = useMissionManagement();

  return (
    <MissionContext.Provider
      value={{
        missions,
        addMission,
        editMission,
        removeMission,
        loadMissions,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
}
