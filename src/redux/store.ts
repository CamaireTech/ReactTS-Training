import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    // Add other reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
