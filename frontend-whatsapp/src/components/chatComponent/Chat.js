import SearchOutlined from '@mui/icons-material/SearchOutlined'
import AttachFile from '@mui/icons-material/AttachFile'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './Chat.css'
import MoreVert from '@mui/icons-material/MoreVert'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic'
import axios from '../../shared/api/services/axios'

function Chat({ messages, roomId, roomDetails }) {
  const [input, setInput] = useState('')
  // setRoomId('6179ab3873b26a115e7ae97d')
  // console.log(roomId)

  // setCurrentRoomId(roomId)

  // console.log(roomDetails)

  const sendMessage = async (e) => {
    e.preventDefault()

    await axios.post('/messages/new', {
      roomId: roomId,
      message: input,
      name: 'henric',
      timestamp:
        new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      received: false,
    })

    setInput('')
  }

  //collect all messages with correct roomId
  const currentMessages = messages.filter(
    (message) => message.roomId === roomId //byt till variabel
  )

  // console.log(currentMessages)

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>{roomDetails.name}</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        {currentMessages.map((message) => (
          <p
            className={`chat__message ${message.received && 'chat__reciever'}`}
          >
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message'
            type='text'
          />
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
