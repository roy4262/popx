import React from 'react'
import Button from '../components/Button'

export default function Welcome({onNavigate}){
  return (
    <div className="page welcome">
      <div className="content-bottom">
        <h1 className="main-heading">Welcome to PopX</h1>
        <p className="secondary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div style={{height:'29px'}} />
        <Button text="Create Account" variant="primary" onClick={()=>onNavigate('register')} />
        <div style={{height:'10px'}} />
        <Button text="Already Registered? Login" variant="ghost" onClick={()=>onNavigate('login')} />
      </div>
    </div>
  )
}