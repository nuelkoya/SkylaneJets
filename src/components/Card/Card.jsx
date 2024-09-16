import React, { useState } from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
import { HiMiniArrowLongRight } from "react-icons/hi2";


const Card = ({ aircraft }) => {
  const [imageHover, setImageHover] = useState(false)

  function handleMouseOver(){
    setImageHover(true)
  }   

  function handleMouseOut(){
    setImageHover(false)
  }

  return (
    <Link to={`/${aircraft.id - 1}`}>
        <div className="card" 
            onMouseOver={() => handleMouseOver()} 
            onMouseOut={() => handleMouseOut()}
        >
            <div className="imageContainer">
                <img src={imageHover ? aircraft.image_interior : aircraft.image} alt="" />
            </div>
            <div className="info">
                <p>{aircraft.serial}</p>
                <h3>{aircraft.name}</h3>
                <p>{aircraft.seating} Passenger Seating</p>
                <p>{aircraft.airframe_hours} Airframe hours</p>

                <div className="see">
                    See Aircraft <HiMiniArrowLongRight />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Card