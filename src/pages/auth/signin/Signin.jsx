import React, { useEffect, useState } from 'react'
import "./signin.css"
import axios from 'axios';
import Input from '../../../componenets/input/Input';
import Button from '../../../componenets/button/Button';
import Navbar from '../../../componenets/nav/Navbar';
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Loadingpage from '../../portal/loading/Loadingpage';
import { AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const[users,setUsers]=useState([]);
    const[error,setError]=useState(null);
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const navigate=useNavigate();

    useEffect(()=>{
        setLoading(true);
        axios
        .get("http://localhost:3000/auth.json")
        .then((response)=>setUsers(response.data))
        .catch((error)=>setError(error))
        .finally(()=>setLoading(false))
    },[])

    let handleSubmit=(e)=>{
        e.preventDefault();
        const user=users.find(user=>user.email===email && user.password===password)
        if(user){
            navigate("/homepage")
            
        }
        else{
            console.log("failed");
            
        }
    }
    
    let email_input_submit=(e)=>{
        setEmail(e.target.value)
    }
    let password_input_submit=(e)=>{
        setPassword(e.target.value)
    }

  return (
    <div >
        {loading&&<Loadingpage/>}
        {!loading&&
            <div className='signin_page_container'>
                <Navbar details="details_none" nav_bar="nav_bar" logo_clsname="signinpage_nav" site_name="logo_name" display="none" sign_in="sign_in_page_btn" sign_up="sign_up_btn_cls" />
                <form onSubmit={handleSubmit} className='signin_form'>
                    <h1 className="sign_in_logo">Sign in</h1>
                    <Input type="email" ip_cls_name="email_input" onchange={email_input_submit} placeholder="Enter your email id"    />
                    <Input type="password" ip_cls_name="password_input" onchange={password_input_submit} placeholder="Enter your password"  />
                    <Button btn_cls="signin_page_btn" type=""submit  content="Sign in" />
                <div className="social_media">
                    <a className='google' href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AdF4I74BKgWbON2ej9SIG88wqvSruyJvybHY3PnSPM23yyU1TZB57LP7r-gjWyWBuhh9jv4SD4kp_w&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-233884364%3A1723041817275845&ddm=0">
                        <AiFillGoogleCircle />
                    </a>
                    <a href="https://www.facebook.com/login/" className='facebook'>
                        <IoLogoFacebook />
                    </a>
                    <a href="https://www.instagram.com/accounts/login/?hl=en" className='insta'>
                        <FaInstagramSquare />
                    </a>
                    <a href="https://x.com/?lang=en" className='twitter'>
                        <FaTwitter />
                    </a>
                </div>
                </form>

            </div>

        }

    </div>
)
}

export default Signin