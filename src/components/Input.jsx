import React from 'react'
import './input.css'

export default function Input({label, required, placeholder, value, onChange, type='text'}){
  return (
    <div className="inp-wrap">
      <label className="inp-label">{label}{required && <span className="req">*</span>}</label>
      <input className="inp-field" placeholder={placeholder} value={value} onChange={onChange} type={type} />
    </div>
  )
}