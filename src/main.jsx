import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './components/home/home.jsx'
import About from './components/aboutMe/aboutMe.jsx'
import Projects from './components/myProjects/Projects.jsx'
import VMF from "./components/myProjects/pages/VMF";
import PetMe from "./components/myProjects/pages/PetMe";
import Seniowell from "./components/myProjects/pages/seniowell.jsx";
import Model_Pavillion from "./components/myProjects/pages/model_Pavillion.jsx";



const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "", 
        element: <Home />,
        
      },
      {
        path: "aboutMe",
        element: <About />
      },
      {
        path: "myProjects",
        element: <Projects />
      },
      {
        path: "/pages/VMF",
        element: <VMF />
      },
      {
        path:"/pages/PetMe" ,
        element: <PetMe />
      },
      {
        path:"/pages/seniowell" ,
        element: <Seniowell/>
      },
      {
        path:"/pages/model_Pavillion" ,
        element: <Model_Pavillion />
      },
      
     
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)


