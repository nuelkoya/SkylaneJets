import React, { useEffect } from 'react'
import Featured from '../../components/Featured/Featured'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import "./HomePage.scss"

const HomePage = () => {

  useEffect(() =>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
  },[])
  
  return (
    <div>
        <Hero/>
        <Featured/>
        <Footer/>
    </div>
  )
}

export default HomePage