import React, { useState } from 'react'
import { dbService } from '../firebase'

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false)
  const [newNweet, setNewNweet] = useState(nweetObj.text)
  const onDeleteCLick = async () => {
    const ok = window.confirm('Delete this Nweet?')
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete()
    }
  }

  const toggleEditing = () => setEditing((prev) => !prev)
  const onChange = (event) => {
    const {
      target: { value },
    } = event

  }
  return (
    <div>
      {editing ? (
        <>
          <form>
            <input
              type="text"
              placeholder="Edit Nweet"
              value={newNweet}
              required
            />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
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


/* */