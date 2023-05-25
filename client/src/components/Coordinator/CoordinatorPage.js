import React from 'react'

import { useNavigate } from 'react-router-dom';
import Navbar3 from '../Navbar3';


const CoordinatorPage = () => {
  const history = useNavigate()
  return ( 
   <>
   
   <Navbar3 userType={"coordinator"}/>
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
   <div style={{
         
         width: "25%",
         height: "86.7vh",
         backgroundColor:"rgba(73, 60, 67, 0.23)",
         display:"flex",
         flexDirection:"column",
         justifyContent:"center"
        
         
         

      }}>
        
        <button style={{
          padding:"2rem",
          fontSize:"2rem",
          borderRadius:"100px",
          cursor:"pointer",
          border:"1px solid black"
        }} onClick={()=>history('/coordinator/studentsforms')} >Student's Internship App Forms</button>
        <button style={{
          padding:"2rem",
          fontSize:"1.9rem",
          borderRadius:"100px", 
          marginTop:"4rem",
          cursor:"pointer",
          border:"1px solid black"
        }}  onClick={()=>history('/coordinator/uploadform')} >Coordinator Upload Internship Form</button>
        <button style={{
          padding:"2rem",
          fontSize:"1.9rem",
          borderRadius:"100px", 
          marginTop:"4rem",
          cursor:"pointer",
          border:"1px solid black"
        }}  onClick={()=>history('/coordinator/viewtranscript')} >View Transcript</button>  
        
      
       
      </div>
   </>
  )
}

export default CoordinatorPage