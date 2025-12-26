import React, {useState} from 'react'
import './App.css'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import AccountSettings from './pages/AccountSettings'

function App(){
  const [page, setPage] = useState('welcome')
  const [registeredUser, setRegisteredUser] = useState(null)
  const [user, setUser] = useState({name: 'Marry Doe', email: 'Marry@Gmail.Com'})

  React.useEffect(()=>{
    try{
      const stored = localStorage.getItem('registeredUser')
      if(stored) setRegisteredUser(JSON.parse(stored))
    }catch(e){/* ignore */}
  },[])

  const handleSetRegisteredUser = (u)=>{
    setRegisteredUser(u)
    try{ localStorage.setItem('registeredUser', JSON.stringify(u)) }catch(e){}
  }

  const renderPage = ()=>{
    switch(page){
      case 'login': return <Login onNavigate={setPage} setUser={setUser} registeredUser={registeredUser} />
      case 'register': return <Register onNavigate={setPage} setRegisteredUser={handleSetRegisteredUser} setUser={setUser} />
      case 'account': return <AccountSettings user={user} setUser={setUser} />
      default: return <Welcome onNavigate={setPage} />
    }
  }

  return (
    <div className="app-root">
      <div className="mobile-frame" style={{overflow: (page === 'welcome' || page === 'account') ? 'hidden' : 'auto'}}>
        {renderPage()}
      </div>
    </div>
  )
}

export default App