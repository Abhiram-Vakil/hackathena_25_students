import React from 'react'
import './Project.css'
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles'
import Section from '../../components/Section/Section'

function Project() {
  const data = [
    {
      head: "Breaking News",
      para: "A major event has just happened in the city, causing widespread discussions.",
      time: "10 mins ago"
    },
    {
      head: "Tech Update",
      para: "The latest smartphone model has been launched with groundbreaking features.",
      time: "1 hour ago"
    },
    {
      head: "Sports Highlights",
      para: "The national team secured a thrilling victory in the finals last night.",
      time: "3 hours ago"
    },
    {
      head: "Weather Alert",
      para: "Heavy rainfall expected throughout the weekend. Stay safe and take precautions.",
      time: "5 hours ago"
    }
  ];
  
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
    }
  ];

  return (
    <div>
        <Header/>
        <Titles title={"Project Title"} sub={"Team Name"}></Titles>
        <div className='sections'>
          {sectionData.map((item, index) => (
        <Section key={index} stage={item.stage} text={item.text} time={item.time} />
      ))}
        </div>
        
    </div>
  )
}

export default Project
