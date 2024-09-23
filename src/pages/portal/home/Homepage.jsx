import React from 'react'
import "./homepage.css"
import Navbar from '../../../componenets/nav/Navbar'

const Homepage = () => {
  return (
    <div className='home_page'>
        <header>
            <Navbar details="details" nav_bar="home_navbar" logo_clsname="home_nav_logo" site_name="home_site_name" sign_in="sign_in_none" sign_up="sign_up_none"     />
        </header>
        <main className='homepage_main'>
            <div className='success_page'>
              <h1 className='login_success'>Login successful</h1>
            </div>
        </main>
    </div>
  )
}

export default Homepage