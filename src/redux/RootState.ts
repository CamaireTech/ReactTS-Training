// src/redux/types.ts

import { Mission } from '../Models/Mission'; // Adjust the import path

export interface RootState {
  missions: Mission[];
  // ... other state properties ...
}
