import React from 'react'
import { useHistory } from 'react-router-dom'
import { clientAuth } from '../firebase'

/* 
//using redirect by hooks
export default () => {
    const history =useHistory()
    const onLogOutClick = () => {
        clientAuth.signOut()
        history.push("/")
    }
    return (
      <>
        <button onClick={onLogOutClick}>Log Out</button>
      </>
    )
  }
   */


export default () => {
  const onLogOutClick = () => clientAuth.signOut()
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
}
