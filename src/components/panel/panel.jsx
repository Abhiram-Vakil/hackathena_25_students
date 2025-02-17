import React from 'react'
import bell from '../../assets/bellbutton.svg'
function panel({head,para,time}) {
  return (
    <>
      <div>
      <img src={bell} alt="" />
      <div>
      </div>
      <div>
      <h1>{head}</h1>
      <p>{para}</p>
      <p>{time}</p>
      </div>
      </div>
    </>
  )
}

export default panel
