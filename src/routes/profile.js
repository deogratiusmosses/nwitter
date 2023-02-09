import React, { useEffect, useState } from 'react'
import { clientAuth, dbService } from '../firebase'
import { useHistory } from 'react-router-dom'

export default ({ refreshUser, userObj }) => {
  const history = useHistory()
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)
  const onLogOutClick = () => {
    clientAuth.signOut()
    history.push('/')
  }

  const onChange = (event) => {
    const {
      target: { value },
    } = event
    setNewDisplayName(value) 
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      })
      refreshUser()
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
}
//
