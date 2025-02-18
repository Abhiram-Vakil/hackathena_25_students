import React from 'react';
import "./Home.css"
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles'
import Panel from '../../components/panel/panel';
import supabase from '../../../supabase_config';
import { useState } from 'react';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useUser } from '../../context/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

dayjs.extend(utc);
dayjs.extend(timezone);

function Home() {
  const [ann,setAnn] = useState([]);
  const [loading,setLoading] = useState(false);
  const{user} = useUser();
  const navigate = useNavigate();

  useEffect(()=> {
    if(!user)
    {
      navigate('/login');
    }
    fetchData();
  },[]);

  const fetchData = async () => {
    setLoading(true);
    const {data,error} = await supabase.from('announcment').select('*');
    if (error)
    {
      console.log("Data fetching failed !");
    }
    else{
      setAnn(data);
    }
    setLoading(false);
  }



    // const data = [
    //   {
    //     head: "Announcement Name",
    //     para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    //     time: "08.36 am"
    //   },
    //   {
    //     head: "Announcement Name",
    //     para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    //     time: "08.36 am"
    //   },
    //   {
    //     head: "Announcement Name",
    //     para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    //     time: "08.36 am"
    //   },
    //   {
    //     head: "Announcement Name",
    //     para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    //     time: "08.36 am"
    //   },
    // ];
    // if (loading)
    // {
    //   return(<div className='loader'></div>);
    // }
  return (
    <div >

      <Header/>
      <Titles title={'Announcements'} sub={'Innovators check what’s live at HackAthena!'} />
      <div className='panels'>
        {loading && <div className="container"><div class="loader"></div></div>}
      {ann.map(( item, index) => (
        <Panel className="panelu" key={index} head={item.title} para={item.desc} time={dayjs(item.times).format('DD/MM/YYYY HH:mm:ss A')} />
      ))}
      </div>
      
    </div>
  )
}

export default Home
