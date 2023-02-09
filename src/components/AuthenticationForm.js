import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { StrictMode, useState } from 'react'
import { clientAuth } from '../firebase'

const AuthenticationForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      let data
      if (newAccount) {
        data = await createUserWithEmailAndPassword(clientAuth, email, password)
      } else {
        data = await signInWithEmailAndPassword(clientAuth, email, password)
      }
      console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }
  const toggleAccount = () => {
    setNewAccount((prevValue) => !prevValue)
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}></input>
        <input
          type="submit"
          value={newAccount ? 'Create Account' : 'Log In'}></input>
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? 'sign in' : 'Create Account'}
      </span>
    </>
  )
}

export default AuthenticationForm
/* */