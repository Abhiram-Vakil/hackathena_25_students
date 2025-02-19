import React from 'react'
import './profile.css'
import Header from '../../components/Header/Header'
import Titles from '../../components/Titles/Titles'
import profileicon from '../../assets/profileicon.svg'
import profiledp from '../../assets/profile.png';
import { useUser } from '../../context/UserContext/UserContext';
import supabase from '../../../supabase_config';
import { useState,useRef } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
function Profile() {

  const [prof,setProf] = useState([]);
  const [part,setPart] = useState([]);
  const [loading,setLoading] = useState(false);
  const {user,logout} = useUser();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const fetchingRef = useRef(false);


  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      fetchProf();
    }
    // Removed `prof` from dependencies to prevent infinite re-renders
  }, [user]); 
  

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  const fetchProf = async () => {

    if (fetchingRef.current) return; // Prevent multiple calls
  fetchingRef.current = true;

    setLoading(true);

    const loaderOne = messageApi.open({
      type: 'loading',
      content: 'Fetching Profile',
      duration: 0,
    });

    console.log(user?.id)
    const {data : dataT,error : errorT} = await supabase.from('team_details').select('team_name,project_name ,team_id').eq('leader_id', user?.id).single();
    if (errorT){
      console.log("Failed brinigng data !",errorT);
    }
    else
    setProf(dataT);

    const {data : dataP,error : errorP} = await supabase.from('participant').select('name').eq('team_id',dataT.team_id);

    if (errorP)
    {
      console.log("Participants fetching failed");
    }
    else{
      setPart(dataP);
    }
    loaderOne();
    setLoading(false);
    fetchingRef.current = false;
  // console.log(prof);
  }
  // if (loading)
  // {
  //   return(<div className="amme"><Header/>
  //     <Titles title="Profile" sub="It’s all about you !"/><div className="container"><div class="loader"></div></div></div>)
  // }
  return (
    <div>
      {contextHolder}
        <Header/>
        <Titles title="Profile" sub="It’s all about you !"/>
        <div className='profilesection'>
          <img src={profiledp} alt=""  />
          <h1>{prof.team_name}</h1>
          <h2>{prof.project_name}</h2>
        </div>
        <h1 className='member'>Members</h1>
        <div className="memberssection">
         
  <div className="sec1">
    {part.slice(0, 2).map((item, index) => (
      <div key={index} className="indmember">
        <img src={profileicon} alt="" />
        <p>{item.name}</p>
      </div>
    ))}
  </div>
  {part.length > 2 && (
    <div className="sec2">
      {part.slice(2).map((item, index) => (
        <div key={index} className="indmember">
          <img src={profileicon} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )}
</div>


        <button className='vannit' onClick={handleLogout} >logout</button>
    </div>
  )
}

export default Profile
