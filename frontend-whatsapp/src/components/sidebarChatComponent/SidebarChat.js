import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

function SidebarChat({ room, changeId }) {
  // console.log(room)

  return (
    <div onClick={() => changeId(room._id)} className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h2>{room.name}</h2>
        <p>{room.description}</p>
      </div>
    </div>
  )
}

export default SidebarChat
