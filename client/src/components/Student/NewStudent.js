import React from 'react'
import { useNavigate,useLocation,NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers,faGraduationCap,faFileCircleCheck,faArrowRightFromBracket,faEnvelope} from '@fortawesome/free-solid-svg-icons'
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
            <div style={{marginRight:"9px"}}>
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
                    
                  

                   
                    <FontAwesomeIcon icon={faArrowRightFromBracket } onClick={handleClick}  style={{cursor:"pointer" , fontSize:"2.5rem",color:"black",marginTop:"50px" }} />
                    
                   
          
                   
              
                   
                    
                </div>
            </div>


            <div  style={{display:"flex" , alignItems:"center",justifyContent:"center",  width:"92vw"}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
    <div
      style={{
        width: '200px',
        height: '30px',
        backgroundColor: "rgba(240, 212, 117, 0.75)",
        marginBottom: '101rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:'5rem',
        padding:'4rem',
        borderRadius:'20PX',
        boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
        overflow:'hidden',
      }}
    > <FontAwesomeIcon icon={faGraduationCap} 
    style={{cursor:"pointer" , fontSize:"2.5rem",color:"black" }} /> Education Information
    Software Engineering (English)
    3.Class
      
    </div>
    
    <div
      style={{
        padding:'4rem',
        alignItems: 'center',
        marginRight:'5rem',
        width: '200px',
        height: '30px',
        backgroundColor: "rgba(101, 185, 166, 0.75)",
        display: 'flex',
        justifyContent: 'center',
        marginTop:'-100rem',
        boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
        overflow:'hidden',
        borderRadius:'20px',
      }}
    ><FontAwesomeIcon icon={faUsers} 
    style={{cursor:"pointer" , fontSize:"2.5rem",color:"black" }} />
      Internship Coordinator:
      Kristin Surpuhi Benli
    </div>
    <div
      style={{
        padding:'4rem',
        width: '200px',
        height: '30px',
        backgroundColor: "rgba(2, 149, 169, 0.75)",
        overflow:'hidden',
        display: 'flex',
        borderRadius:'20px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'-100rem',
        boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
      }}
    ><FontAwesomeIcon icon={faFileCircleCheck} 
    style={{cursor:"pointer" , fontSize:"2.5rem",color:"black" }} />
      Compulsory Internship 1/2
      Voluntarily Internship 0 
    </div>
  </div>
            </div>

         


        </div>

        </div>
        <footer style={{width:"100vw",height:"3vh",backgroundColor:"#8C949D"}}>
            
        </footer>
        
    </div>
  )
}

export default NewStudent