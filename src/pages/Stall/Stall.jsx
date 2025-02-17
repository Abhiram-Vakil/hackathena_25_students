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

function Stall() {
  return (
    
    <div>

      <Header/>
      <Titles title="The Shop" sub="Need a break ! Call us we will be here !"/>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><Link to='/stallopen'><img src={Frutty} alt='frutty'/></Link>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Stall