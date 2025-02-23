import React from 'react';
import './App.css';
import Signup from './signup/Signup';
import{RouterProvider,createBrowserRouter} from "react-router-dom";
import Login from './Login/Login';
import LandingPage from './dashboard/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Unauthorized from './components/Unauthorized';
import CreateProject from './components/CreateProject';
import Workspace from './components/Workspace/Workspace';
import EditProject from './components/Workspace/EditProject';

function App() {
  const route=createBrowserRouter([
    {
      path: '/LandingPage',  // Change to Landing Page
      element: <LandingPage/>
    },
    {
      path: '/Signup',
      element:<Signup />
    },
    {
      path: '/Login',
      element:<Login />
    },
    {
      path: '/Home',
      element:<Login />
    },
    
    {
      path: '/Unauthorized',
      element:<Unauthorized />
    },
    {
      path: '/Project',
      element:<CreateProject/>
    },
    {
      path: '/Workspace',
      element:<Workspace/>
    },
    {
      path: '/Project/Edit/:projectName',
      element:<EditProject/>
    }
        
  ]);
    return (
     
          <div className="App">
            <RouterProvider router={route}></RouterProvider>
          </div>
    );
  }
export default App;



