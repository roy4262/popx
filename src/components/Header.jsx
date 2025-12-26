import React from 'react'
import './header.css'

export default function Header({title}){
  return (
    <div className="app-header">
      <div className="app-header-inner">{title}</div>
    </div>
  )
}