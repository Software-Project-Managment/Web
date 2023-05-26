import React from 'react'
import { useNavigate,useLocation,NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<<<<<<< HEAD
import { faHome, faUsers,faGraduationCap,faFileCircleCheck,faArrowRightFromBracket,faEnvelope, faUpload, faBell, faUser} from '@fortawesome/free-solid-svg-icons'
=======
import { faHome, faUsers,faGraduationCap,faFileCircleCheck,faArrowRightFromBracket,faEnvelope,faUser} from '@fortawesome/free-solid-svg-icons'
>>>>>>> aa3da2c4ab208e097295eebd6a620b045755e6e6
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
            <NavLink to='/student'><img src="assets/logo.png"style={{width:'50px',marginLeft:'-3.5rem',marginTop:'0.5rem'}}/></NavLink>
            </div>
            <div style={{marginRight:"9px"}}>
<<<<<<< HEAD
            <FontAwesomeIcon icon={faBell } style={{fontSize:'2.5rem',marginRight:'10rem'}}/><FontAwesomeIcon icon={faUser } style={{fontSize:'2.5rem',}}/>
=======
                ICONS
                <FontAwesomeIcon icon={faUser } style={{fontSize:"2.5rem"}} />
>>>>>>> aa3da2c4ab208e097295eebd6a620b045755e6e6
            </div>
        </nav>
        <div style={{display:"flex"}}>

            <div style={{width:"6vw",height:"90vh",backgroundColor:"#8C949D" }}>
                <div style={{   height:"97%", display:"flex",flexDirection:"column"  , alignItems:"center" , justifyContent:"space-between"}}>

                    <div  style={{display:"flex" ,flexDirection:"column"}}>
                    <NavLink to= "/student" style={({isActive})=>({
                          cursor:"pointer",
                          border:(isActive && location.pathname==="/student" )  ? '0px solid black' : '',
                          backgroundColor:(isActive && location.pathname==="/student" )  ? '#8C949D' : '',
                          borderRadius:(isActive && location.pathname==="/student" ) ? '10px' : '',
                          fontSize:"2.5rem",
                          marginTop:"50px",
                          color:"black"
                     })}>
 
                         <FontAwesomeIcon icon={faHome } />
                         
                     </NavLink>
                    
                     <NavLink to= "/student/deneme2" style={({isActive})=>({
                          cursor:"pointer",
                          border:(isActive && location.pathname==="/student/deneme2" )  ? '0px solid black' : '',
                          backgroundColor:(isActive && location.pathname==="/student/deneme2" )  ? '#8C949D' : '',
                          borderRadius:(isActive && location.pathname==="/student/deneme2" ) ? '10px' : '',
                          fontSize:"2.5rem",
                          marginTop:"50px",
                          color:"black"
                     })}>
 
                         <FontAwesomeIcon  icon={faEnvelope } />
                         
                     </NavLink>
                     
                     <NavLink to= "/student/deneme3" style={({isActive})=>({
                          cursor:"pointer",
                          border:(isActive && location.pathname==="/student/deneme3" )  ? '0px solid black' : '',
                          backgroundColor:(isActive && location.pathname==="/student/deneme3" )  ? '#8C949D' : '',
                          borderRadius:(isActive && location.pathname==="/student/deneme3" ) ? '10px' : '',
                          fontSize:"2.5rem",
                          marginTop:"50px",
                          color:"black"
                     })}>
 
                         <FontAwesomeIcon  icon={faUpload } />
                         
                     </NavLink>
                    
                    </div>
                    
                  

                   
                    <FontAwesomeIcon icon={faArrowRightFromBracket } onClick={handleClick}  style={{cursor:"pointer" , fontSize:"2.5rem",color:"black",marginTop:"50px" }} />
                    
                   
          
                   
              
                   
                    
                </div>
            </div>


            <div  style={{display:"flex" , alignItems:"center",justifyContent:"center",  width:"92vw"}}>
            <div
      style={{
        width: '200px',
        height: '75px',
        backgroundColor: "rgba(240, 212, 117, 0.75)",
        marginTop: '-35rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:'20PX',
        boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
        overflow:'hidden',
      }}
    > <FontAwesomeIcon icon={faGraduationCap} 
    style={{cursor:"pointer" , fontSize:"2.5rem",color:"black" }} /> aaaaa
      
    </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
              
    <div
      style={{
        width: '200px',
        height: '30px',
        backgroundColor: "rgba(240, 212, 117, 0.75)",
        marginTop: '-15rem',
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
<<<<<<< HEAD
=======
        marginTop: '-15rem',
>>>>>>> aa3da2c4ab208e097295eebd6a620b045755e6e6
        boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
        overflow:'hidden',
        borderRadius:'20px',
        marginTop: '-15rem',
      }}
    ><FontAwesomeIcon icon={faUsers} 
    style={{cursor:"pointer" , fontSize:"2.5rem",color:"black" }} />
      Internship Coordinator:
      Kristin Surpuhi Benli
    </div>
    <div
      style={{
        padding:'4rem',
        marginTop: '-15rem',
        width: '200px',
        height: '30px',
        backgroundColor: "rgba(2, 149, 169, 0.75)",
        overflow:'hidden',
        display: 'flex',
        borderRadius:'20px',
        alignItems: 'center',
        justifyContent: 'center',
<<<<<<< HEAD
=======
        marginTop: '-15rem',
>>>>>>> aa3da2c4ab208e097295eebd6a620b045755e6e6
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