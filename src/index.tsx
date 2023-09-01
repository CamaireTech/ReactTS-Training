import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import { MissionProvider } from './Context/MissionContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MissionProvider >
      <App />
    </MissionProvider>
  </React.StrictMode>
);

