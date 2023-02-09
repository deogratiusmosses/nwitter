import React, { useState } from 'react'
import { dbService, storageService } from '../firebase'
import { v4 as uuidv4 } from 'uuid'


const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState('')
  const [attachment, SetAttachment] = useState('')
  const onSubmit = async (event) => {
    event.preventDefault()
    let attachmentUrl = ''
    if (attachment !== '') {
      const atachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${userObj.uid}/${uuidv4()}`)
      const respose = await atachmentRef.putString(attachment, 'data_url')
      attachmentUrl = await respose.ref.getDownloadURL()
    }
    const nweetElement = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    }
    await dbService.collection('nweets').add(nweetElement)
    setNweet('')
    SetAttachment('')
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
            alt=""
            src={attachment}
            width="60px"
            height="60px"
            style={{ borderRadius: 30 }}
          />
          <button onClick={onClearAttachment}>Nullify Upload</button>
        </div>
      )}
    </form>
  )
}

export default NweetFactory
