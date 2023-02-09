import React, { useEffect, useState } from 'react'
import { clientAuth } from '../firebase'
import AppRouter from './Router'

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState(null)
  useEffect(() => {
    clientAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj(user)
        /* setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        }) */
      }else{
        setUserObj(null)
      }
      setInit(true)
    })
  }, [])
  const refreshUser = () => {
    const user=clientAuth.currentUser
    setUserObj({})
    setUserObj(Object.assign({}, user))
  }
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
        />
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default App


/* 

import React, { useEffect, useState } from 'react'
import { clientAuth } from '../firebase'
import AppRouter from './Router'

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState(null)
  useEffect(() => {
    clientAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj(user)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])
  const refreshUser = () => {
    setUserObj(clientAuth.currentUser)
  }
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
        />
      ) : (
        'Loading...'
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
}

export default App */
