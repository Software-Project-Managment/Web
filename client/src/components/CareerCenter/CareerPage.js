import React from 'react'

import { useNavigate } from 'react-router-dom';
import Navbar3 from '../Navbar3';


const CareerPage = () => {
  const history = useNavigate()
  return ( 
   <>
   
   <Navbar3 userType={"career"}/>
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
        }} onClick={()=>history('/career/approvedforms')} >Student's Approved Internship App Forms</button>
       
          
        
      
       
      </div>
   </>
  )
}

export default CareerPage