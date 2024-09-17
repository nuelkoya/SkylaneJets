import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import "./AircraftPage.scss"
import { allAircraft } from "../../Aircraftdata"
import { NavLink, Link } from 'react-router-dom'
import { BsFillAirplaneFill } from "react-icons/bs";
import { SiGoogleearthengine } from "react-icons/si";
import { BsAirplaneEngines } from "react-icons/bs";
import Footer from '../../components/Footer/Footer'



const AircraftPage = () => {
  const {id} = useParams()
  const imageRef = useRef()
  const overviewRef = useRef()
  const specsRef = useRef()
  const mainRef = useRef()
  const footerRef = useRef()
  const [fixed, setFixed] = useState(false)
  const [overviewMenu, setOverviewMenu] = useState(true)
  const [airframeMenu, setAirframeMenu] = useState(false)
  const [maintenanceMenu, setMaintenanceMenu] = useState(false)
  

  useEffect(()=>{
    window.scrollTo({
        top:0,
        left: 0,
        behavior: "smooth"})
  },[])

  useEffect(()=>{
 
    function handleScroll(){
        
        
        
        if(window.pageYOffset > 3420){
            //console.log('stop scrolling')
            setFixed(true)
        } else{
            //console.log('scrolling')
            setFixed(false)
        }
    }

    window.addEventListener('scroll', handleScroll)
      
  })

  useEffect(() => {
        function handleMenuActive(){
            

            if(window.pageYOffset >= 600){
                setAirframeMenu(false)
                setMaintenanceMenu(false)
                setOverviewMenu(true)
            }

            if(window.pageYOffset >= 1000){
                setAirframeMenu(true)
                setMaintenanceMenu(false)
                setOverviewMenu(false)
            }

            if(window.pageYOffset >= 1796){
                setMaintenanceMenu(true)
                setAirframeMenu(false)
                setOverviewMenu(false)
                
            }
        }

        window.addEventListener('scroll', handleMenuActive)

  })

  

  function goTo(e){
      e.preventDefault()
      
      if(e.target.innerText === "Overview & Highlights"){
            overviewRef.current.scrollIntoView({behavior: "smooth"})
      } else if(e.target.innerText === "Airframe & Engines") {
            specsRef.current.scrollIntoView({behavior: "smooth"})
      } else if(e.target.innerText === "Maintenance & Avionics"){
            mainRef.current.scrollIntoView({behavior: "smooth"})
      }
  }
  

  return (
    <div className='aircraft' ref={imageRef}>
        <div className="imageContainer">
            <img src={allAircraft[id].image} alt="" />
        </div>


        <div className="wrapper" onScrollCapture={() => handleScroll()}>
            <div className="sidebar" ref={overviewRef}>
                <div className={`menu ${fixed && 'position'}`}>
                    <NavLink to className={`navLink ${overviewMenu ? 'actives' : 'pending'}`}
                        onClick={(e) => goTo(e)}
                    >
                        Overview & Highlights
                    </NavLink>
                    <NavLink to className={`navLink ${airframeMenu ? 'actives' : 'pending'}`}
                        onClick={(e) => goTo(e)}
                    >
                        Airframe & Engines
                    </NavLink>

                    <NavLink to className={`navLink ${maintenanceMenu ? 'actives' : 'pending'}`}
                        onClick={(e) => goTo(e)}
                    >
                        Maintenance & Avionics
                    </NavLink>
                    <Link to="/offer" className="sideLink"> Make an Offer</Link>
                </div>
            </div>

            <div className="right" >
                <div className="container">
                    <div className="overview" >
                        <h1>Overview & Highlights</h1>
                        <h3>Enhanced Efficiency with Premier Comfort</h3>
                        <p>
                            The {allAircraft[id].name} offers enhanced performance with improved 
                            engines, offering exceptional takeoff and climb capabilities. 
                            This jet boasts a stylish double club flat floor layout, a belted lavatory, 
                            and plenty of baggage space. Outfitted with the Honeywell Primus 1000 
                            Avionics Suite and an APU, it seamlessly blends comfort with advanced 
                            technology for an outstanding flying experience.
                        </p>
                        <img src={allAircraft[id].image} alt="" />
                        <h3>Highlights</h3>
                        <ul>
                            <li>One US Owner Since New</li>
                            <li>Meticulously Maintained / Pedigree Aircraft </li>
                            <li>No Damage History</li>
                            <li>Enhanced Nav / Synthetic Vision / RAAS / XM</li>
                        </ul>
                        <h3>Programs</h3>
                        <ul>
                            
                            <li>Engines Enrolled on Rolls Royce Corporate Care</li>
                            <li>Honeywell HAPP and MPP</li>
                        </ul>
                    </div>

                    <div className="specs" ref={specsRef}>
                        <h1>Airframe & Engines</h1>

                        <div className="airframe">
                            <div className="top">
                                <BsFillAirplaneFill />
                                <h3>Airframe</h3>
                            </div>
                            <div className="bottom">
                                <hr/>
                                <p>{allAircraft[id].name}</p>
                                <hr/>
                                <div className="time">
                                    <p className="subtitle">Total Time</p>
                                    <p>
                                        3,140.8 hours <br></br>
                                        (7/25/2024)
                                    </p>
                                </div>
                                
                                <hr />
                                <div className="landings">
                                    <p className="subtitle">Landings</p>
                                    <p>2729</p>
                                </div>
                            </div>
                        </div>

                        <div className="engines">
                            <div className="top">
                                <SiGoogleearthengine />
                                <h3>Engine</h3>
                            </div>
                            <div className="bottom">
                                <hr />
                                <span>Honeywell TFE731-20br-1B</span>
                            </div>
                        </div>

                        <div className="engine-1">
                            <div className="top">
                                <h3>ENGINE 1</h3>
                            </div>
                            <div className="bottom">
                                <hr/>
                                <div className="serial">
                                    <p className="subtitle">Serial Number</p>
                                    <p>P-116763</p>
                                </div>
                                
                                <hr/>
                                <div className="time">
                                    <p className="subtitle">Total Time</p>
                                    <p>
                                        3,140.8 hours <br></br>
                                    </p>
                                </div>
                                
                                <hr />
                                <div className="landings">
                                    <p className="subtitle">Cycles</p>
                                    <p>2729</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="apu">
                            <div className="top">
                                    <h3>APU</h3>
                                    <BsAirplaneEngines />
                            </div>
                            <div className="bottom">
                                <hr/>
                                <div className="serial">
                                    <p className="subtitle">Serial Number</p>
                                    <p>P-116763</p>
                                </div>
                                
                                <hr/>
                                <div className="time">
                                    <p className="subtitle">Total Time</p>
                                    <p>
                                        3,140.8 hours <br></br>
                                    </p>
                                </div>
                                
                                <hr />
                                <div className="landings">
                                    <p className="subtitle">Cycles</p>
                                    <p>2729</p>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>

                <div className="maintenance" ref={mainRef}>
                    <h1>Maintenance & Avionics</h1>

                    <div className="card">
                        <img src="src/assets/Inside-of-Aircraft-cabin.webp" alt="" />
                        <div>
                            <h3>Avionics</h3>
                            <ul>
                                <li>Standard Learjet 45XR Avionics Suite</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img src="src/assets/Technician-inspecting-aircraft.webp" alt="" />
                        <div>
                            <h3>MAJOR INSPECTION STATUS</h3>
                            <ul>
                                <li>A-Phase Due in: 238 HRS / Dec 2024</li>
                                <li>B-Phase Due in: 538 HRS / Dec 2025</li>
                                <li>C-Phase Due in: 869 HRS / Feb 2026</li>
                                <li>D-Phase Due in: 2,206 HRS / Dec 2030</li>
                                <li>Main Landing Gear Due in: 7,271 Landings</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <img src="src/assets/Close-up-to-aircraft-part.webp" alt="" />
                        <div>
                            <h3>ADDITIONAL EQUIPMENT AND FEATURES</h3>
                            <ul>
                                <li>110 VAC Outlets</li>
                                <li>ADS-B</li>
                                <li>RVSM</li>
                                <li>TCAS 2000 w/chan</li>
                                <li>GPS/WAAS/LPV</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="btns">
                    <Link to='/offer' className="link">Make an Offer</Link>
                    <Link to='/inventory' className="link">View Inventory</Link>
                </div> 
            </div>
        </div>
        <div ref={footerRef}>
            <Footer />
        </div>
        
        
    </div>
  )
}

export default AircraftPage