import React, {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Login({onNavigate, setUser, registeredUser}){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const canLogin = email && password

  const handleLogin = ()=>{
    if(registeredUser && registeredUser.email === email){
      setUser(registeredUser)
    } else {
      setUser({name: registeredUser?.name || 'Marry Doe', email})
    }
    onNavigate('account')
  }

  return (
    <div className="page">
      <h2 className="main-heading">Signin to your PopX account</h2>
      <p className="secondary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

      <div className="inputdiv">
        <Input label="Email Address" placeholder="Enter email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Input label="Password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
      </div>

      <div>
        <Button text="Login" variant={canLogin? 'primary': 'disabled'} disabled={!canLogin} onClick={handleLogin} />
      </div>
    </div>
  )
}