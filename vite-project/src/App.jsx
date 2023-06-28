import { useState } from 'react'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import './App.css'

function App() {

  const [isLoggedIn, toggleLogin]=useState(false)

  const handleLoginClick = () => toggleLogin(true)

  const handleLogoutClick = () => toggleLogin(false)

  let button

  // THIS IS THE CONDITIONAL

  if (isLoggedIn) {
    button = <LogoutButton 
      handleLogoutClick={handleLogoutClick}
    />
  } else {
    button = <LoginButton 
      handleLoginClick={handleLoginClick}
    />
  }

  return (
    <div className='App'>
      <Greeting
        isLoggedIn={isLoggedIn}
      />
      {button}
    </div>
  )
}

export default App
