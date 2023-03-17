
import React from 'react'
import  Header  from "../Components/Header"
import ReactPlayer from 'react-player'



function Videos() {
  return (
    <>
      < Header />
      <div className="container video-container">
          <ReactPlayer url="https://youtu.be/tVCYa_bnITg"/>
      </div>
      <div className="container video-container">
          <ReactPlayer url="https://youtu.be/-LFjnY1PEDA"/>
      </div>
      <div className="container video-container">
          <ReactPlayer url="https://youtu.be/g1C40tDP0Bk"/>
      </div>
      <div className="container video-container">
          <ReactPlayer url="https://youtu.be/s1XVfm5mIuU"/>
      </div>
      <div className="container video-container">
          <ReactPlayer url="https://youtu.be/NiLUGy1Mh4U"/>
      </div>
      </>
  )
}

export default Videos