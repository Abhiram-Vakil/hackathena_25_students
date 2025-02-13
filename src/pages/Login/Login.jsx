import React from 'react'
import logo from '../../assets/logo.svg'
import squid from '../../assets/squidlogo.svg'
import squidgame from '../../assets/squidgame.svg'
import "./Login.css"

function Login() {
  return (
    <div className='loginPage'>
        <img src={logo} alt="" className='logo' />
        <img src={squid} alt="" className='squid' />
        <h1 className='loginHead'>HELLO DEV 👋</h1>
        <p className='loginP'>Welcome to the HackAthena official  app</p>
        <div className='inputSection'>
            <input type="text" placeholder="Enter Team id"/>
            <input type="password" placeholder="Enter Password" ty/>
        </div>
        
        <div className='loginButtons'>
            <button className='loginButton1'>login</button>
            <button className='loginButton2'>contact</button>
        </div>
        
        <img src={squidgame} alt="" />
    </div>
  )
}

export default Login
