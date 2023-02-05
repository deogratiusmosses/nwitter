import React, { useEffect, useState } from 'react'
import { dbService } from '../firebase'

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState('')
  const [nweets, setNweets] = useState([])
  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
    })
  }, [])
  const onSubmit = async (event) => {
    event.preventDefault()
    await dbService.collection('nweets').add({
      text: nweet,
      createdAt: Date.now(),
      creatoId: userObj.uid,
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
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

/*  */