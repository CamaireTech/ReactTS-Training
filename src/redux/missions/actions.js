// missions/actions.js
export const addMission = (mission) => {
    return {
      type: 'ADD_MISSION',
      payload: {
        mission,
      },
    };
  };
  
  export const removeMission = (missionId) => {
    return {
      type: 'REMOVE_MISSION',
      payload: {
        missionId,
      },
    };
  };
  