import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './Assets/styles/index.scss'
import './Assets/styles/modal.scss'
import './Assets/styles/singleMission.scss'


import { MissionProvider } from './Context/MissionContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MissionProvider >
      <App />
      <ToastContainer />
    </MissionProvider>
  </React.StrictMode>
);

