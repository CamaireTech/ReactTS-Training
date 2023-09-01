// missions/reducer.js
const initialState = {
    missions: [],
    // ... other initial state properties ...
  };
  
  const missionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MISSION':
        return {
          ...state,
          missions: [...state.missions, action.payload.mission],
        };
      case 'REMOVE_MISSION':
        const missionIdToRemove = action.payload.missionId;
        return {
          ...state,
          missions: state.missions.filter((mission) => mission.id !== missionIdToRemove),
        };
      default:
        return state;
    }
  };
  
  export default missionReducer;
  