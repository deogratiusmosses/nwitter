import React, { useState } from 'react'
import { clientAuth } from '../firebase'
import AppRouter from './Router'
/* mport { authService } from 'firebase' */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(clientAuth.currentUser)
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer >&copy; {new Date().getFullYear()}</footer>
    </>
  )
  return <AppRouter />
}

export default App
/* */