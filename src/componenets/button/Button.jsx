import React from 'react'
import "./button.css"

const Button = ({type,btn_cls,content,onchange}) => {
  return (
    <button type={type} onClick={onchange} className={btn_cls}>{content}</button>
  )
}

export default Button