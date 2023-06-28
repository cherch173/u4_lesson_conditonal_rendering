import { useState } from 'react'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Messages from './components/Messages'
import './App.css'

function App() {

  const [isLoggedIn, toggleLogin]=useState(false)

  const [unreadMessages, setUnreadMessages] = useState ([
    'Hello humans. I am Lrr',
    'of the Planet Omicron Persei Eight',
    'and now...',
    'Give me all your quarters',
    'Quarters! We require quarters!'
  ])

  const handleLoginClick = () => toggleLogin(true)

  const handleLogoutClick = () => toggleLogin(false)

  let button

  const messages = !! isLoggedIn && <Messages 
    unreadMessages={unreadMessages} />

  // THIS IS THE CONDITIONAL STATEMENT

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
      {messages}
    </div>
  )
}

export default App
