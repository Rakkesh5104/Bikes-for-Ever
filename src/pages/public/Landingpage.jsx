import React from 'react';
import "./landingpage.css";
import Navbar from '../../componenets/nav/Navbar';
import { TbArrowBigRightLine } from "react-icons/tb";
import Loadingpage from '../portal/loading/Loadingpage';
import { Link } from 'react-router-dom';


const Landingpage = () => {
  return (
    <div className='landing_container'>
        <Navbar details="details_none" nav_bar="nav_bar" logo_clsname="logo_classname" site_name="logo_name" sign_in="sign_in_btn_cls" sign_up="sign_up_btn_cls"  />
        <main className='center_content'> 
          <h1 className="welcome">Welcome to Bike Gallery </h1>
          <div className='guest_box'>
            <Link className='guest_box_link' to={"/homepage"}><h3 className='guest_enter'>Guest </h3> </Link>
            <TbArrowBigRightLine className='arrow_symbol' />
          </div>

          <article className='article_container'>
            
          </article>
        </main>
    </div>

  )
}

export default Landingpage