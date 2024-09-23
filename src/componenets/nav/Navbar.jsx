import React from 'react'
import "./navbar.css"
import Button from '../button/Button'

//images
import logo from "../../assets/images/logo-.png"
import Signin from '../../pages/auth/signin/Signin'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({logo_clsname,sign_in,sign_up,site_name,nav_bar,details}) => {
    const navigate=useNavigate();
    
    let click_signin=(e)=>{
      navigate("/signin");
    }
    let click_signup=(e)=>{
      navigate("/signup");
    }
  return (
    <div className={nav_bar}>
        <img src={logo} className={logo_clsname}  />
        <p className={site_name}>Bikes for Ever</p>
      <div className="sign_in_up">
        <Button btn_cls={sign_in} content="Sign in" onchange={click_signin}   />
        <Button btn_cls={sign_up} content="Sign up" onchange={click_signup} />
      </div>
      <div className={details}>
        <ul>
          <li><Link className='details_link'>HOME</Link></li>
          <li><Link className='details_link'>ABOUT US</Link></li>
          <li><Link className='details_link'>CONTACT</Link></li>
          <li><Link className='details_link'>SUPPORT</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar