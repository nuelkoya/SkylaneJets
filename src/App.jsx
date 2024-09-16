import { useState } from 'react'
import "../layout.scss"

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Featured from './components/Featured/Featured';
import HomePage from './pages/HomePage/HomePage';
import AircraftPage from './pages/AircraftPage/AircraftPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AllAircraftsPage from "./pages/AllAircraftsPage/AllAircraftsPage"
import OfferPage from './pages/OfferPage/OfferPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/inventory",
          element: <AllAircraftsPage/>
        },
        {
          path: "/:id",
          element: <AircraftPage/>
        },
        {
          path: "/contact",
          element: <ContactPage/>
        },
        {
          path: "/offer",
          element: <OfferPage/>
        },



      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
