import React from 'react'
import './button.css'

function Button({text, variant='primary', disabled=false, onClick}) {
  return (
    <button className={`btn ${variant}`} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
