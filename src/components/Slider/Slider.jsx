import React, { useState } from 'react'
import "./Slider.scss"
import { featuredAircraft } from '../../Aircraftdata'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';



const Slider = () => {
  
  const [imageCenterIndex, setImageCenterIndex] = useState(parseInt(featuredAircraft.length / 2))
  const [imageLeftIndex, setImageLeftIndex] = useState(imageCenterIndex-1)
  const [imageRightIndex, setImageRightIndex] = useState(imageCenterIndex+1)



  function slide(direction){
      if (direction === 'left'){
          if(imageLeftIndex === 0){
              setImageLeftIndex(featuredAircraft.length - 1)
              setImageCenterIndex(imageLeftIndex)
              setImageRightIndex(imageCenterIndex)
          } else{
              setImageLeftIndex(imageLeftIndex - 1)
              setImageCenterIndex(imageLeftIndex)
              if (imageRightIndex === featuredAircraft.length - 1){
                setImageRightIndex(imageCenterIndex)
                } else {
                setImageRightIndex(imageCenterIndex)
                }

          }
      } else {
          if (imageRightIndex === featuredAircraft.length - 1){
              setImageRightIndex(0)
              setImageCenterIndex(imageLeftIndex+2)
              setImageLeftIndex(imageLeftIndex + 1)
          } else{
              setImageRightIndex(imageRightIndex+1)
              setImageCenterIndex(imageRightIndex)
              if(imageLeftIndex === featuredAircraft.length - 1){
                setImageLeftIndex(0)
            } else{
                setImageLeftIndex(imageLeftIndex + 1)
            }
              
          }
      }
  }
  return (
    <div className="slider">
        <div className="sliderWrapper">
            <div className="leftBtn">
                <MdKeyboardArrowLeft size={50}
                    onClick={()=>slide('left')}
                />
            </div>
            <div className="imageContainer">
            
            <div className="imageLeft">
                <Link to={`/${imageLeftIndex}`}>
                    <img src={featuredAircraft[imageLeftIndex].image} alt="" />
                </Link>
                
            </div>
            <div className="imageCenter">
                <Link to={`/${imageCenterIndex}`}>
                    <img src={featuredAircraft[imageCenterIndex].image} alt="" />
                </Link>
            </div>
            <div className="imageRight">
                <Link to={`/${imageRightIndex}`}>
                    <img src={featuredAircraft[imageRightIndex].image} alt="" />
                </Link>
                
            </div>

            
            <div className="rightBtn">
                <MdKeyboardArrowRight size={50}
                    onClick={()=>slide('right')}
                />
            </div>
            </div>
        </div>
        {[featuredAircraft[imageCenterIndex]].map(aircraft => (
                    <div className="aircraftDetails" key={aircraft.id}>
                        <a href="">
                            <h2>{aircraft.name}</h2>
                        </a>
                        <p>{aircraft.serial}</p>
                        <p>{aircraft.seating} Passenger Seating</p>
                        <p>{aircraft.airframe_hours} Airframe Hours</p>
                    </div>
                    
        ))}
    </div>
  )
}

export default Slider