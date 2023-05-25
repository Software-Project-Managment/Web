import React from 'react'
import {  useNavigate } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {  faBell ,faMessage} from '@fortawesome/free-regular-svg-icons'



const Navbar3 = ({userType}) => {
  const history = useNavigate()
  const {logout}=useLogout() 
  const user = JSON.parse(localStorage.getItem('user'))
  const handleClick = ()=>{
    logout()
    history('/')
  }
  return (
    <div style={{
      fontFamily:'montserrat',
        display:"flex",
        height:"100px"
    }}>
<div
        style={{
          fontFamily:'montserrat',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "12.5%",
          backgroundColor: "turquoise",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily:'montserrat',
            backgroundColor: "turquoise",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Uskudar University Logo"
            style={{ width: "50px", marginRight: "1rem" }}
          />
          <h1 style={{fontFamily:'montserrat', margin: 0 }}>Üsküdar University</h1>
        </div  >
          <div style={{
            fontFamily:'montserrat',
            display: "flex",
            alignItems:"center",
            justifyContent:"space-around"

          }}>
            <div style={{
               fontFamily:'montserrat',
                marginRight:"50px",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                
            }}>


          <FontAwesomeIcon icon={faBell }  onClick={()=>history(`/${userType}/notifications`)} 
          style={{cursor:"pointer" , fontSize:"2.5rem" }} />
 
          <FontAwesomeIcon icon={faMessage} onClick={()=>history(`/${userType}/message`)} 
          style={{cursor:"pointer" , fontSize:"2.5rem" ,marginLeft:"1.2rem"}} />

          <FontAwesomeIcon icon={faCircleUser} onClick={()=>history(`/${userType}/profile`)} 
          style={{cursor:"pointer" , fontSize:"2.5rem",marginLeft:"1.2rem"}} />
          <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={handleClick} 
          style={{cursor:"pointer" , fontSize:"2.5rem",marginLeft:"1.2rem"}} />
          

          
            </div>
          
          <div
        style={{
          fontFamily:'montserrat',
            display: "flex",
            flexDirection: "column"
        }}>
          
        <p
          style={{
            fontFamily:'montserrat',
            margin: 0,
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "black",
            textTransform:"capitalize"
          }}
        >
          {user.data.name} {user.data.surname}
           
        </p>
        <p style={{
           fontFamily:'montserrat',
            margin: 0,
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "black",
            
          }}>

           {user.data.role==="student" && user.data.username}
        </p>
        
        
        </div>
        
          </div>
        

        
      </div>
    
    </div>
    
      
  )
}

export default Navbar3