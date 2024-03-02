import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, IconButton } from '@mui/material';
import { DonutLarge } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import db from '../firebase.js';
import { useStateValue } from '../StateProvider.js';


function SideBar() {

    const [{user}, dispatch] = useStateValue();

    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc=>(
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])



  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar src={user?.photoURL}/>
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLarge/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>

        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchOutlinedIcon/>
                <input placeholder='Search or start new chat' type='text' />                
            </div>

        </div>

        <div className='sidebar__chats'>
            <SidebarChat addNewChat/>
            {
                rooms.map(room=>(
                    <SidebarChat key={room.id} id={room.id}
                        name={room.data.name}
                    />
                ))
            }

        </div>
        
    </div>
  )
}

export default SideBar