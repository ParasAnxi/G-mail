import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth,provider } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from './features/userSlice'
const Login = () => {
    const dispatch = useDispatch();
    
    const signIn = ()=>{
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl:user.photoURL
            }))
        }).catch(e=>alert(e.msg));
    }
  return (
    <div className='login'>
        <div className="login_container">
            <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="" />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login