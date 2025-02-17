import React from 'react'
import "./Home.css"
import panel from '../../components/panel/panel'
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles'

function Home() {

  return (
    <div>
      <Header/>
      <Titles title={'Announcements'} sub={'Innovators check what’s live at HackAthena!'} />
      <h1>Home page</h1>
      <panel head={'hi'} para={"hello"} time={" 6.009"}/>
    </div>
  )
}

export default Home
