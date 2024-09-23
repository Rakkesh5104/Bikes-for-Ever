import React from 'react'
import "./loadingpage.css"
import bikegif from "../../../assets/images/motorcycle-gif.gif"
import Navbar from '../../../componenets/nav/Navbar'

const Loadingpage = () => {
  return (
    <div className='loading_container'>
        <marquee direction="right" behaviour="alternate" >
        <img src={bikegif} className='loading_gif' />
        </marquee>
        <p className="loading_text">Loading...</p>
    </div>
  )
}

export default Loadingpage