import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'


const SecondBar = ({userType}) => {
    const history = useNavigate()
  return (
    <div style={{
        display:"flex",
        height:"100px"
    }}>
  <div
        style={{
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
            backgroundColor: "turquoise",
            display: "flex",
            alignItems: "center",
          }}
        >
         <FontAwesomeIcon icon={faArrowLeftLong}  style={{cursor:"pointer" , fontSize:"2.5rem",marginLeft:"1.2rem"  }}  onClick={()=>history(`/${userType}`)}/>
        </div  >
          <div style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"space-around"
  
          }}>
           
          <div
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems:"center",
            marginRight:"2rem",
            
            
        }}>
        <p
          style={{
            margin: 0,
            fontSize: "2.2rem",
            fontWeight: "medium",
            color: "black",
            marginRight:"0.8rem",
            cursor:"pointer"
          }}
        >
         TR
           
        </p>
        <p style={{
            margin: 0,
            fontSize: "2.2rem",
            fontWeight: "medium",
            color: "black",
            marginBottom:"0.5rem",
            
            
          }}>|</p>
        <p style={{
            margin: 0,
            fontSize: "2.2rem",
            fontWeight: "medium",
            color: "black",
            marginLeft:"0.8rem",
            cursor:"pointer"
            
          }}>
            EN 
        </p>
        
        
        </div>
          </div>
        
  
        
      </div>
    sdasd
    </div>
  )
}

export default SecondBar