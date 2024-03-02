import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom';
import db from '../firebase';

function SidebarChat({id, name, addNewChat}) {

    const [lastMessage, setLastMessage] = useState('');

    const [seed, setSeed] = useState('Mittens');
    const people = [
        'Mittens',
        'Bella',
        'Lucy',
        'Leo',
        'Lily',
        'Baily',
        'Cuddles',
        'Snuggles',
        'Toby',
        'Misty',
        'Dusty',
        'Missy',
        'Daisy',
        'Princess',
        'Jasmine',
        'Mia',
        'Chloe'
    ]

    useEffect(()=>{
        setSeed(
            people[Math.floor(Math.random()*16)]
        )
    },[])


    useEffect(()=>{
        if(id){
            db.collection('rooms').doc(id).collection('messages')
                .orderBy('timestamp','desc')
                .onSnapshot(snaphot=>(
                    setLastMessage(
                        snaphot.docs.map((doc)=>doc.data().message)
                    )
                ))
        }
    },[id])
    


    const createChat = () =>{
        const roomName = prompt('Please enter room name for chat');

        if(roomName){
                //add new chat room
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }



  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className='sidebarChat'>
        <Avatar src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`}/>
        <div className='sidebarChat__info'>
            <h2>{name}</h2>
            <p>{lastMessage[0]}</p>
        </div>
    </div>
    </Link>
  ): (
    <div onClick={createChat} className='sidebarChat'>
        <h2>Add New Chat</h2>
    </div>
  )
}
 
export default SidebarChat