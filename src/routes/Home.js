import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Nweet from '../components/Nweet'
import { dbService, storageService } from '../firebase'

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState('')
  const [nweets, setNweets] = useState([])
  const [attachment, SetAttachment] = useState()
  useEffect(() => {
    dbService.collection('nweets').onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setNweets(nweetArray)
    })
  }, [])
  const onSubmit = async (event) => {
    event.preventDefault()
    storageService.ref().child(`${userObj.uid}/${userObj.uid}/${uuidv4()}`)
    /* await dbService.collection('nweets').add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    })
    setNweet('') */
  }
  const onChange = (event) => {
    const {
      target: { value },
    } = event
    setNweet(value)
  }
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event
    const theFile = files[0]
    const reader = new FileReader()
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent
      SetAttachment(result)
    }
    reader.readAsDataURL(theFile)
  }
  const onClearAttachment = () => SetAttachment(null)
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
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attachment && (
          <div>
            <img
              src={attachment}
              width="60px"
              height="60px"
              style={{ borderRadius: 30 }}
            />
            <button onClick={onClearAttachment}>Nullify Upload</button>
          </div>
        )}
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  )
}

export default Home


/*  */