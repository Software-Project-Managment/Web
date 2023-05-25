import React from 'react'
import SecondBar from '../SecondBar'
import { useNavigate } from 'react-router-dom';

const UpperMessage = () => {
  const history = useNavigate()
  return (
    <>
      <SecondBar userType="student" />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', margin: '20px 0 0 20px', marginRight: '1500px' }}>
          <h2>My Messages</h2>
          <text onClick={()=>history('/student/message')} style={{ fontSize: "1.5rem",borderRadius: "60px",width: "350px", height: "50px" }}>New Message</text>
          <br/>
          
          <text onClick={()=>history('/student/incoming')} style={{ fontSize: "1.5rem",marginTop: "5rem",borderRadius: "10px",width: "350px", height: "50px" }}>Incoming Message</text>
          <br></br>
          <text style={{ fontSize: "1.5rem",marginTop: "5rem",borderRadius: "10px",width: "1000px", height: "50px" }}>Unread Message</text>
          <br></br>
          <text style={{ fontSize: "1.5rem",marginTop: "5rem",borderRadius: "10px",width: "350px", height: "50px" }}>Read Message</text>
          <br></br>
          <text style={{ fontSize: "1.5rem",marginTop: "5rem",borderRadius: "10px",width: "350px", height: "50px" }}>Outgoing Message</text>
        </div>
       
         
         
             
            </div>
        
       
   
    </>
  )
}

export default UpperMessage