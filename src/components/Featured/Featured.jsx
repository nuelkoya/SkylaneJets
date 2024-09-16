import React from 'react'
import "./Featured.scss"
import Slider from '../Slider/Slider'
import { Link } from "react-router-dom";
 
const Featured = () => {
  return (
    <div className="featured">
        <h2>Featured aircraft</h2>
        <Slider />
        <div className="link">
            <Link to="inventory" className="linkBtn"> View Aircraft Inventory </Link>
        </div>
    </div>
  )
}

export default Featured