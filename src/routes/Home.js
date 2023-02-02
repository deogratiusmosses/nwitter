import React, { useState } from 'react'
import { dbService } from '../firebase'

const Home = () => {
  const [nweet, setNweet] = useState('')
  const [nweets, setNweets] = useState([])

  const onSubmit = async (event) => {
    event.preventDefault()
    await dbService.collection('nweets').add({
      nweet,
      createdAt: Date.now(),
    })
    setNweet('')
  }
  const onChange = (event) => {  
    const {
      target: { value },
    } = event
    setNweet(value)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="Whats on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  )
}

export default Home