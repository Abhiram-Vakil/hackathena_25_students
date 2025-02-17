import React from 'react'
import './profile.css'
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles'
import profileicon from '../../assets/profileicon.svg'
import profiledp from '../../assets/profile.png'
function Profile() {
  return (
    <div>
        <Header/>
        <Titles title="Profile" sub="It’s all about you !"/>
        <div className='profilesection'>
          <img src={profiledp} alt=""  />
          <h1>Team Name</h1>
          <h2>Project Name</h2>
        </div>
        <h1 className='member'>Members</h1>
        <div className='memberssection'>
          <div className='sec1'>
            <div className='indmember'> <img src={profileicon} alt=""/><p>Alan Jose Santo</p></div>
            <div className='indmember'> <img src={profileicon} alt="" /><p>Alan Jose Santo</p></div>
          </div>
          <div className='sec2'>
            <div className='indmember'> <img src={profileicon} alt="" /><p>Alan Jose Santo</p></div>
            <div className='indmember'> <img src={profileicon} alt="" /><p>Alan Jose Santo</p></div>
          </div>
        </div>
    </div>
  )
}

export default Profile
