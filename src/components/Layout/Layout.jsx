import React from 'react'
import "./Layout.scss"
//import Featured from './components/Featured/Featured'
//import Footer from './components/Footer/Footer'
//import Hero from './components/Hero/Hero'
//import Navbar from './components/Navbar/Navbar'
import Navbar from "../Navbar/Navbar"
import { Outlet } from 'react-router'
import Hero from '../Hero/Hero'
import Featured from '../Featured/Featured'

const Layout = () => {
  return (
    <div className="layout">
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default Layout