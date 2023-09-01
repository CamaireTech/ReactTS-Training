import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mission } from '../../Models/Mission';

interface MissionsState {
  missions: Mission[];
}

const initialState: MissionsState = {
  missions: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    addMission: (state, action: PayloadAction<Mission>) => {
      state.missions.push(action.payload);
    },
    removeMission: (state, action: PayloadAction<number>) => {
      state.missions = state.missions.filter((mission) => mission.id !== action.payload);
    },
  },
});

export const { addMission, removeMission } = missionSlice.actions;
export default missionSlice.reducer;
