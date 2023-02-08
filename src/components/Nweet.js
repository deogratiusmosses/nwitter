import React, { useState } from 'react'
import { dbService, storageService } from '../firebase'

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false)
  const [newNweet, setNewNweet] = useState(nweetObj.text)
  const onDeleteCLick = async () => {
    const ok = window.confirm('Delete this Nweet?')
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete()
      await storageService.refFromURL(nweetObj.attachmentUrl).delete()
    }
  }

  const toggleEditing = () => setEditing((prev) => !prev)
  const onSubmit = async (event) => {
    event.preventDefault()
    console.log(event)
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    })
    setEditing(false)
  }
  const onChange = (event) => {
    const {
      target: { value },
    } = event
    setNewNweet(value)
  }
  return (
    <div>
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit}>
                <input
                  onChange={onChange}
                  type="text"
                  placeholder="Edit Nweet"
                  value={newNweet}
                  required
                />
                <input type="submit" value="Update Nweet" />
              </form>
            </>
          )}
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && (<img src={nweetObj.attachmentUrl} style={{ borderRadius: 30 }} width='60px' height="60px"/>)}
          {isOwner && (
            <>
              <button onClick={onDeleteCLick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Nweet

