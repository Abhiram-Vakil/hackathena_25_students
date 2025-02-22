import React from 'react'
import "./Idcard.css"
import Header from '../../components/Header/Header'
import tag from "../../assets/idtag.svg"
import idh from "../../assets/idheader.svg"
import sqimg from "../../assets/idsqui.png"
import alan from "../../assets/aluuu.png"
import { useLocation, useNavigate } from "react-router-dom";
import back from "../../assets/backbtn.svg"

function Idcard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { content1, content2 } = location.state || {};
  return (
    <div>
      <Header/>
     
      <div className='icard'>
        <div className='maincard'>
            <img src={idh} alt="" className='idh' />
            <div className='ota'></div>
            <h1 className='idname'>{content1}</h1>
            <img src={sqimg} alt="" />
            <img src={alan} alt="" className='profilephoto'/>
            <h2 className='teamname'>{content2}</h2>
        </div>
      </div>
      <div  className='idtag'>
      <img src={tag} alt="" />
      </div>
      <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
  <img src={back} alt="Go Back" className="backbtn" />
</div>
      <div className='veruthe'></div>
      
    </div>
  )
}

export default Idcard
