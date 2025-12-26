import React, {useRef} from 'react'
import './profile-image.css'
import cameraimage from '../assets/camera_icon1x.png'
import profileimage from '../assets/profile_photo1x.png'

export default function ProfileImage({src, size=76, onFileChange}){
  const inputRef = useRef(null)
  return (
    <div className="profile-root" style={{width: size, height: size}}>
      <img src={src || profileimage} alt="profile" className="profile-img" />
      <button className="camera-btn" onClick={(e)=>{e.preventDefault(); inputRef.current && inputRef.current.click()}}>
        <img src={cameraimage} alt="camera" />
      </button>
      <input ref={inputRef} type="file" accept="image/*" style={{display:'none'}} onChange={onFileChange} />
    </div>
  )
}