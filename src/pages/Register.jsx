import React, {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Register({onNavigate, setRegisteredUser, setUser}){
  const [form,setForm] = useState({full:'',phone:'',email:'',password:'',company:''})
  const [agency, setAgency] = useState('yes')
  const onChange=(k)=> (e)=> setForm({...form,[k]:e.target.value})
  const canCreate = form.full && form.phone && form.email && form.password

  const handleCreate = ()=>{
    const reg = {name: form.full || 'Marry Doe', email: form.email || 'Marry@Gmail.Com'}
    if(setRegisteredUser) setRegisteredUser(reg)
    if(setUser) setUser(reg)
    onNavigate('account')
  }

  return (
    <div className="page register">
      <h2 className="main-heading">Create your PopX account</h2>

      <div className="form-content">
        <Input label="Full Name" required placeholder="Marry Doe" value={form.full} onChange={onChange('full')} />
        <Input label="Phone number" required placeholder="Marry Doe" value={form.phone} onChange={onChange('phone')} />
        <Input label="Email address" required placeholder="Marry Doe" value={form.email} onChange={onChange('email')} />
        <Input label="Password" required placeholder="Marry Doe" value={form.password} onChange={onChange('password')} type="password" />
        <Input label="Company name" placeholder="Marry Doe" value={form.company} onChange={onChange('company')} />

        <div style={{marginTop:'20px'}} className="radio-group">
          <div className="radio-heading">Are you an Agency?<span className="req">*</span></div>
          <div className="radio-options">
            <label className={`radio-option ${agency === 'yes' ? 'checked' : ''}`}>
              <input type="radio" name="agency" value="yes" checked={agency === 'yes'} onChange={()=>setAgency('yes')} />
              <span className="radio-custom" aria-hidden="true"></span>
              <span className="radio-text">Yes</span>
            </label>

            <label className={`radio-option ${agency === 'no' ? 'checked' : ''}`} style={{marginLeft:18}}>
              <input type="radio" name="agency" value="no" checked={agency === 'no'} onChange={()=>setAgency('no')} />
              <span className="radio-custom" aria-hidden="true"></span>
              <span className="radio-text">No</span>
            </label>
          </div>
        </div>

      </div>

      <div className="fixed-btn">
        <Button text="Create Account" variant={canCreate? 'primary' : 'disabled'} disabled={!canCreate} onClick={handleCreate} />
      </div>
    </div>
  )
}