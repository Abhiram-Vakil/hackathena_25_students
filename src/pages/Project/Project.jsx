import React from 'react'
import './Project.css'
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles'
import Section from '../../components/Section/Section'

function Project() {
  
  const sectionData = [
    {
      stage: "01",
      text: "Updated the first connection to the database of programs",
      time: "08.36 am"
    },
    {
      stage: "02",
      text: "Fixed the login issue for users",
      time: "09.15 am"
    },
    {
      stage: "03",
      text: "Added new feature for data visualization",
      time: "10.45 am"
    },
    {
      stage: "04",
      text: "Optimized backend services for faster performance",
      time: "12.30 pm"
    },
    {
      stage: "05",
      text: "Optimized backend services for faster performance",
      time: "12.30 pm"
    }
  ];

  return (
    <div>
        <Header/>
        <Titles title={"Project Title"} sub={"Team Name"}></Titles>
        <div className='buttondiv'>
          <button className='addbtn'>Add Update</button>
        </div>
        
        <div className='sections'>
          {sectionData.map((item, index) => (
        <Section key={index} stage={item.stage} text={item.text} time={item.time} />
      ))}
        </div>
        
    </div>
  )
}

export default Project
