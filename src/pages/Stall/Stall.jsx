import React from 'react'
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './stall.css';
import Frutty from '../../../public/images/packet-jiuce.png';
import { Link } from 'react-router-dom';
import { useState } from "react";

function Stall() {
  const slideData = [
    { name: "Frutty",price:"Rs.52", img: Frutty, link: "/stallopen" },
    { name: "Maza",price:"Rs.10", img: Frutty, link: "/stallopen" },
    { name: "shake",price:"Rs.80", img: Frutty, link: "/stallopen" },
    { name: "boost",price:"Rs.82", img: Frutty, link: "/stallopen" },
   
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  
  return (
   
    <div>
      <Header/>
      <Titles title="The Shop" sub="Need a break ! Call us we will be here !"/>
      <div className='kada'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={slide.link}>
              <img src={slide.img} alt={slide.name} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className='stallitemname'>{slideData[activeIndex].name}</p>
      <p className="stallitemprice">{slideData[activeIndex].price}</p>
      <button className='stallbtn'>Order Now</button>
      </div>
      
    </div>
  )
}

export default Stall