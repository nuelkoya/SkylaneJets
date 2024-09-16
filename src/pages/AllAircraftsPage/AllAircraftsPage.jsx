import React, { useEffect, useRef, useState } from 'react'
import "./AllAircraftsPage.scss"
import Card from "../../components/Card/Card"
import { allAircraft } from '../../../Aircraftdata'
import Footer from '../../components/Footer/Footer'


const AllAircraftsPage = () => {
  const [showAll, setShowAll] = useState(true)
  const [aircraftData, setAircraftData] = useState(allAircraft)
  const [searchData, setSearchData] = useState()
  const [selected, setSelected] = useState('default')
  const [refresh, setRefresh] = useState(false)
  let search

  useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

  },[])


  useEffect(()=>{
    if (refresh){
      setShowAll(true)
      setRefresh(false)
      setSelected("default")
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }

  },[refresh])
  
  

  
  function handleSubmit(e){
    e.preventDefault()
    const element = document.getElementById("manufacturer")
    search = element.value.toUpperCase()
    if(search === 'DEFAULT'){
      setSearchData(allAircraft)
    } else {
      setSearchData(aircraftData.filter(aircraft=> aircraft.name.includes(search)))
    }
    setShowAll(false)
  }

  return (
    <div className="all">
      <div className="imageBox">
         
      </div>
      <div className="box">
        <div className="search">
          <h1>Choose a Manufacturer</h1>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
              <select name="manufacturer" id="manufacturer"
                onChange={(e) => setSelected(e.target.value)}
                value={selected}
              >
                <option value="default">--Choose Manufacturer--</option>
                <option value="boeing">Boeing</option>
                <option value="bombardier">Bombardier</option>
                <option value="gulfstream">Gulfstream</option>
              </select>
              <button className="searchBtn">Search</button>
          </form>
        </div>
      </div>
      {
      showAll 
        ?
          aircraftData.map(aircraft => (
            <Card key={aircraft.id} aircraft={aircraft}/>
          ))
        :
        <>
          {searchData?.map(aircraft => (
            <Card key={aircraft.id} aircraft={aircraft}/>
          ))}
          <div className="showBtn" onClick={() => setRefresh(true)}>
            <button className=""> Show All</button>
          </div>
          
        </>
        
      }
      <Footer/>
      
    </div>
  )
}

export default AllAircraftsPage