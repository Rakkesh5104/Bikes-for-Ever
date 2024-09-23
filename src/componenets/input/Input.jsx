import React from 'react';
import "./input.css";

const Input = ({type,ip_cls_name,onchange,placeholder,name,value}) => {
  return (
    <input type={type} 
    className={ip_cls_name} 
    onChange={onchange} 
    placeholder={placeholder} 
    name={name} 
    value={value} />
)
}

export default Input