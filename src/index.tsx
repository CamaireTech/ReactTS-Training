import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/index.scss'
import './Styles/modal.scss'
import './Styles/singleMission.scss'
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

