import React, { useEffect, useState } from 'react'
import './App.css'
import Chat from './components/chatComponent/Chat'
import Sidebar from './components/sidebarComponent/Sidebar'
import Pusher from 'pusher-js'
import axios from './shared/api/services/axios'

function App() {
  const [messages, setMessages] = useState([])
  const [roomId, setRoomId] = useState([])
  const [currentRoomId, setCurrentRoomId] = useState([])
  // --------------------testa exportera DENNA till chat.js

  // setRoomId('6179ab3873b26a115e7ae97d')
  // console.log(roomId)

  // const changeRoomId = (value) => {
  //   setCurrentRoomId(value)
  // }

  useEffect(() => {
    axios.get('/room/get').then((response) => {
      setRoomId(response.data)
    })
  }, [])

  //fetching initialized information
  useEffect(
    () => {
      axios.get('/messages/sync').then((response) => {
        setMessages(response.data)
      })
    },
    [],
    [roomId]
  )

  useEffect(() => {
    const pusher = new Pusher('c66c1ba0ef82ab0906c3', {
      cluster: 'eu',
    })

    const channel = pusher.subscribe('messages')
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    })

    //cleans up subcribers and keeps the count at max one
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar roomId={roomId} setCurrentRoomId={setCurrentRoomId} />
        <Chat
          messages={messages}
          roomDetails={roomId}
          roomId={currentRoomId}
          setCurrentRoomId={setCurrentRoomId}
        />
      </div>
    </div>
  )
}

export default App
