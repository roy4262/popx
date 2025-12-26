import React, {useState} from 'react'
import ProfileImage from '../components/ProfileImage'
import Header from '../components/Header'

export default function AccountSettings({user, setUser}){
  const [img, setImg] = useState(null)
  const onFileChange = (e)=>{
    const f = e.target.files && e.target.files[0]
    if(!f) return
    const url = URL.createObjectURL(f)
    setImg(url)
  }

  const displayName = (user && user.name) ? user.name : 'Marry Doe'
  const displayEmail = (user && user.email) ? user.email : 'Marry@Gmail.Com'

  return (
    <div className="page account" style={{padding:0}}>
      <Header title="Account Settings" />

      <div style={{padding:'20px'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <ProfileImage src={img} onFileChange={onFileChange} />
          <div>
            <div style={{fontWeight:500,fontSize: '15px',}}>{displayName}</div>
            <div style={{color:'#6C25FF',fontSize:'14px'}}>{displayEmail}</div>
          </div>
        </div>

        <p className="desc-text">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>

        <hr style={{border:'none',borderTop:'1px dashed #e0e0e0',marginTop:30}} />
      </div>

      {/* bottom dashed line */}
      <hr className="bottom-hr" />
    </div>
  )
}