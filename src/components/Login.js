import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import db, { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Login() {

    const [{},dispatch] = useStateValue();


    const signIn = ()=>{
        auth.signInWithPopup(provider)
            .then(result=>{
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(err=>{
                console.log(err)
            })

    }



  return (
    <div className='login'>
        <div className='login__container'>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png'
                alt=''
            />
            
            <div className='login__text'>
                <h1>Sign in to whatsapp</h1>
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In With Google
            </Button>

        </div>
    </div>
  )
}

export default Login