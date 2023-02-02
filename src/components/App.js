import React, { useEffect, useState } from 'react'
import { clientAuth } from '../firebase'
import AppRouter from './Router'

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    clientAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'initializing'}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
}

export default App
