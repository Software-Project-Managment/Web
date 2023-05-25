import React from 'react'
import SecondBar from '../SecondBar'

const Notification = () => {
  return (
    <>
    <SecondBar  userType={"student"}/>
   <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/assets/logo.png")',
          backgroundSize: "500px 500px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(5px)",
          zIndex: -1,
        }}
      ></div>
    </>
  )
}

export default Notification