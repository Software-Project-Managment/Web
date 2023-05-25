import React from 'react'
import { useNavigate,useLocation,NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { useLogout } from '../../hooks/useLogout';
const NewStudent = () => {
  const history = useNavigate()
  const location = useLocation()
  const {logout}=useLogout() 

  const handleClick = ()=>{
    logout()
    history('/')
  }
  return (
    <div>
        <div>
        <nav style={{width:"100vw",height:"7vh",backgroundColor:"#8C949D",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{marginLeft:"5vw"}} >
            <NavLink to='/student'>LOGO</NavLink>
            </div>
            <div style={{marginRight:"10px"}}>
                ICONS
            </div>
        </nav>
        <div style={{display:"flex"}}>

            <div style={{width:"6vw",height:"90vh",backgroundColor:"#8C949D" }}>
                <div style={{   height:"97%", display:"flex",flexDirection:"column"  , alignItems:"center" , justifyContent:"space-between"}}>

                    <div  style={{display:"flex" ,flexDirection:"column"}}>
                    <NavLink to= "/student" style={({isActive})=>({
                          cursor:"pointer",
                          border:(isActive && location.pathname==="/student" )  ? '1px solid black' : '',
                          backgroundColor:(isActive && location.pathname==="/student" )  ? 'white' : '',
                          borderRadius:(isActive && location.pathname==="/student" ) ? '10px' : '',
                          fontSize:"2.5rem",
                          marginTop:"50px",
                          color:"black"
                     })}>
 
                         <FontAwesomeIcon icon={faHome } />
                         
                     </NavLink>
                    
                     <NavLink to= "/student/deneme2" style={({isActive})=>({
                          cursor:"pointer",
                          border:(isActive && location.pathname==="/student/deneme2" )  ? '1px solid black' : '',
                          backgroundColor:(isActive && location.pathname==="/student/deneme2" )  ? 'white' : '',
                          borderRadius:(isActive && location.pathname==="/student/deneme2" ) ? '10px' : '',
                          fontSize:"2.5rem",
                          marginTop:"50px",
                          color:"black"
                     })}>
 
                         <FontAwesomeIcon  icon={faHome } />
                         
                     </NavLink>
                     
                     <NavLink to= "/student/deneme3" style={({isActive})=>({
                          cursor:"pointer",
                          border:(isActive && location.pathname==="/student/deneme3" )  ? '1px solid black' : '',
                          backgroundColor:(isActive && location.pathname==="/student/deneme3" )  ? 'white' : '',
                          borderRadius:(isActive && location.pathname==="/student/deneme3" ) ? '10px' : '',
                          fontSize:"2.5rem",
                          marginTop:"50px",
                          color:"black"
                     })}>
 
                         <FontAwesomeIcon  icon={faHome } />
                         
                     </NavLink>
                    
                    </div>
                    
                  

                   
                   <FontAwesomeIcon icon={faHome }  onClick={handleClick} 
                    style={{cursor:"pointer" , fontSize:"2.5rem",color:"black" ,marginTop:"50px"}} />
                   
          
                   
              
                   
                    
                </div>
            </div>


            <div  style={{display:"flex" , alignItems:"center",justifyContent:"center",  width:"92vw"}}>
                BURASI DEĞİŞECEK OLAN CONTENT
            </div>

         


        </div>

        </div>
        <footer style={{width:"100vw",height:"3vh",backgroundColor:"#8C949D"}}>
            
        </footer>
        
    </div>
  )
}

export default NewStudent