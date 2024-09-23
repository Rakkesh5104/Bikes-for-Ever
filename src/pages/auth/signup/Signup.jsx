import React, { useEffect, useState } from 'react'
import "./signup.css"
import Input from '../../../componenets/input/Input'
import Button from '../../../componenets/button/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loadingpage from '../../portal/loading/Loadingpage'

const Signup = () => {
  const[form,setForm]=useState({
    name:"",
    email:"",
    password:""
  })
  const[items,setItems]=useState([])
  const[error,setError]=useState(null)
  const[loading,setLoading]=useState(false)

    useEffect(()=>{
      setLoading(true)
      axios
      .get("http://localhost:3000/auth.json")
      .then((response)=>setItems(response.data))
      .catch((error)=>setError(error))
      .finally(()=>setLoading(false))
    },[])
    


    let createObject=()=>{
      axios
      .post("http://localhost:3000/auth.json",form)
      .then((request)=>setItems([...items,request.data]))
      .catch((error)=>setError(error))
    }

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setForm((prev)=>({...prev,[name]:value,}));
    }

    let handleSubmit=(e)=>{
      e.preventDefault();
        createObject();
        console.log(form);
       
    }


  return (
    <div className='signup_container'>
      {loading&&<Loadingpage/>}
        <form className='signup_form_box' onSubmit={handleSubmit}>
            <h1 className="signup_logo">Sign up</h1>
            <Input ip_cls_name="signup_name" 
            placeholder="Enter your name" 
            type="text" 
            name="name"
            value={form.name}
            onchange={handleChange}    
            />
            <Input ip_cls_name="signup_email" 
            placeholder="Enter your email"  
            type="email" 
            name="email"
            value={form.email}
            onchange={handleChange}    
            />
            <Input ip_cls_name="signup_password" 
            placeholder="Set new password" 
            type="password" 
            name="password" 
            value={form.password}  
            onchange={handleChange}  
            />
            <Button type="submit" btn_cls="signup_submit" content="Register" />
            <p className="already_acc">Already have an account
              <Link className='already_signin' to="/signin">Sign in</Link>
            </p>

        </form>

    </div>
  )
}

export default Signup