import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './Pages/ErrorPage';

const router = createBrowserRouter([
  { 
    path:"/",
    element:<App />,
    errorElement:<ErrorPage />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

