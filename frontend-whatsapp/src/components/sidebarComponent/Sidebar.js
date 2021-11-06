import React from 'react'
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import { Avatar, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import SidebarChat from '../sidebarChatComponent/SidebarChat'

function Sidebar({ roomId, setCurrentRoomId }) {
  // roomId.forEach((element) => console.log(element.name))

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src='' />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>

      <div className='sidebar__chats'>
        {roomId.map((element) => (
          <SidebarChat room={element} changeId={setCurrentRoomId} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
