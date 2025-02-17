import React from 'react'
import logo from '../../assets/logo.svg'
import squid from '../../assets/squidlogo.svg'
import squidgame from '../../assets/squidgame.svg'
import "./Login.css"

function Login() {
  return (
    <div className='loginPage'>
      <div className='logintop'>
        <img src={logo} alt="" className='logo' />
        <img src={squid} alt="" className='squid' />
        <div className='ltitle'>
          <h1 className='loginHead'>HELLO DEV 👋</h1>
          <p className='loginP'>Welcome to the HackAthena official  app</p>
        </div>
       
        <div className='inputSection'>
            <input type="text" placeholder="Enter Team id"/>
            <input type="password" placeholder="Enter Password" ty/>
        </div>
        
        <div className='loginButtons'>
            <button className='loginButton1'>Login</button>
            <button className='loginButton2'>Contact</button>
        </div>
      </div>
        <img src={squidgame} alt="" className='squidgame' />
    </div>
  )
}

export default Login
