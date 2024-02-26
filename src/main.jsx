import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from '/src/Root';
import Home from './components/Home/Home';
import AddCoffee from './components/AddCoffee/AddCoffee';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: "/home",
    element: <Home></Home> ,
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee> ,
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
