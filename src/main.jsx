import React from 'react'
import ReactDOM from 'react-dom/client'
import MainMenu from './MainMenu'

import { createBrowserRouter,
  RouterProvider,
  Route
   } from 'react-router-dom';
import Aggrid from './Aggrid.jsx'
import MuiFilter from './MuiFilter.jsx'
import ChartPage from './ChartPage.jsx';
//import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MainMenu />,
  },
  {
    path: "aggrid",
    element:  <Aggrid />,
  },
  {
    path: "muiFilter",
    element:  <MuiFilter />,
  },
  {
    path: "chart",
    element:  <ChartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
