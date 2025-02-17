import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles'
import Panel from '../../components/panel/panel'

function Home() {
  const data = [
    {
      head: "Announcement Name",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      time: "08.36 am"
    },
    {
      head: "Announcement Name",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      time: "08.36 am"
    },
    {
      head: "Announcement Name",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      time: "08.36 am"
    },
    {
      head: "Announcement Name",
      para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      time: "08.36 am"
    },
  ];
  return (
    <div >
      <Header/>
      <Titles title={'Announcements'} sub={'Innovators check what’s live at HackAthena!'} />
      <div className='panels'>
      {data.map((item, index) => (
        <Panel key={index} head={item.head} para={item.para} time={item.time} />
      ))}
      </div>
      
    </div>
  )
}

export default Home
