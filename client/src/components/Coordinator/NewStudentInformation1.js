import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation, NavLink,useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUsers,
  faGraduationCap,
  faFileCircleCheck,
  faArrowRightFromBracket,
  faEnvelope,
  faUpload,
  faBell,
  faUser,
  faSearch, 
  faTriangleExclamation,
  faPerson,
  faUserGraduate,
 
} from '@fortawesome/free-solid-svg-icons';
import {

  faCircleUser
} from '@fortawesome/free-regular-svg-icons';

import { useLogout } from '../../hooks/useLogout';
import axios from 'axios'

const NewStudentInformation1 = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const [student,setStudent] = useState([])
  const [transcriptItems,setTranscriptItems] = useState([])
  const [sgkItems,setSGKItems] = useState([])
  const [reportItems,setReportItems] = useState([])
  const [internshipItems,setInternshipItems] = useState([])
  const handleClick = () => {
    logout();
    history('/');
  };

  
  
  const {id} = useParams()

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search functionality
  };

  const getStudent= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/api/users/${id}`)
      
      setStudent(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }

  
  const getTranscriptItems= async (id)=>{
    try {
      const res = await axios.get(`http://localhost:3000/student/transcript/${id}`)
      
      setTranscriptItems(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }

  const getSGKItems= async (id)=>{
    try {
      const res = await axios.get(`http://localhost:3000/student/sgk/${id}`)
      
      setSGKItems(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }

  const getInternshipItems= async (id)=>{
    try {
      const res = await axios.get(`http://localhost:3000/student/internship/${id}`)
      
      setInternshipItems(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }

  const getReportItems= async (id)=>{
    try {
      const res = await axios.get(`http://localhost:3000/student/reporttemplate/${id}`)
      
      setReportItems(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }
  
  const downloadTranscriptFile = async (id)=>{
    try {
       const res = await axios.get(`http://localhost:3000/student/transcript/download/${id}` , {responseType:'blob'})
  
       
       console.log(res);
       const blob = new Blob([res.data],{type:res.data.type})
       const link = document.createElement('a')
       link.href=window.URL.createObjectURL(blob)
       link.download=`${transcriptItems[0].studentName} ${transcriptItems[0].studentSurname} Transcript`
       link.click()
    } catch (error) {
      console.log(error);
    }
  }

    
  const downloadSGKFile = async (id)=>{
    try {
       const res = await axios.get(`http://localhost:3000/student/sgk/download/${id}` , {responseType:'blob'})
  
       
       console.log(res);
       const blob = new Blob([res.data],{type:res.data.type})
       const link = document.createElement('a')
       link.href=window.URL.createObjectURL(blob)
       link.download=`${sgkItems[0].studentName} ${sgkItems[0].studentSurname} SGK`
       link.click()
    } catch (error) {
      console.log(error);
    }
  }

  const downloadInternshipFile = async (id)=>{
    try {
       const res = await axios.get(`http://localhost:3000/student/internship/download/${id}` , {responseType:'blob'})
  
       
       console.log(res);
       const blob = new Blob([res.data],{type:res.data.type})
       const link = document.createElement('a')
       link.href=window.URL.createObjectURL(blob)
       link.download=`${internshipItems[0].studentName} ${internshipItems[0].studentSurname} Internship Form`
       link.click()
    } catch (error) {
      console.log(error);
    }
  }

  const downloadReportFile = async (id)=>{
    try {
       const res = await axios.get(`http://localhost:3000/student/reporttemplate/download/${id}` , {responseType:'blob'})
  
       
       console.log(res);
       const blob = new Blob([res.data],{type:res.data.type})
       const link = document.createElement('a')
       link.href=window.URL.createObjectURL(blob)
       link.download=`${reportItems[0].studentName} ${reportItems[0].studentSurname} Report Template`
       link.click()
    } catch (error) {
      console.log(error);
    }
  }
  const requestSGK = async (id)=>{
    try {
      const res = await axios.post(`http://localhost:3000/student/sgk/request/${id}` , {responseType:'blob'})
      alert('REQUEST SENT')
     
      console.log('button clicked');
      console.log(res);
      
   } catch (error) {
     console.log(error);
   }
  }

  useEffect(()=>{
    getStudent()
    getTranscriptItems(id)
    getSGKItems(id)
    getInternshipItems(id)
    getReportItems(id)
   
  },[])

  return (
    <div>
      <div>
        <nav
          style={{
            width: '100vw',
            height: '7vh',
            backgroundColor: '#8C949D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ marginLeft: '5vw' }}>
            <NavLink to="/coordinator">
              <img
                src="../../assets/logo.png"
                style={{
                  width: '50px',
                  marginLeft: '-3.5rem',
                  marginTop: '0.5rem',
                }}
              />
            </NavLink>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '200px' }}>
            <FontAwesomeIcon icon={faBell} style={{ fontSize: '2.5rem', fontWeight: 'lighter' }} />
            <div
              style={{
                fontFamily: 'montserrat',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                style={{
                  color: 'black',
                  fontFamily: 'montserrat',
                  margin: 0,
                  fontFamily: 'montserrat',
                  fontSize: '1.3rem',
                  color: 'black',
                  textTransform: 'capitalize',
                }}
              >
                {user.data.name} {user.data.surname}
              </p>
              <p
                style={{
                  fontFamily: 'montserrat',
                  margin: 0,
                  fontSize: '1.3rem',
                  color: 'black',
                }}
              >
                {user.data.role === 'student' && user.data.username}
              </p>
            </div>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '2.5rem' }} />
          </div>
        </nav>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '6vw', height: '90vh', backgroundColor: '#8C949D' }}>
            <div
              style={{
                height: '97%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <NavLink
                  to="/coordinator"
                  style={({ isActive }) => ({
                    cursor: 'pointer',
                    border: isActive && location.pathname === '/coordinator' ? '0px solid black' : '',
                    backgroundColor: isActive && location.pathname === '/coordinator' ? '#8C949D' : '',
                    borderRadius: isActive && location.pathname === '/coordinator' ? '10px' : '',
                    fontSize: '2.5rem',
                    marginTop: '50px',
                    color: 'black',
                  })}
                >
                  <FontAwesomeIcon icon={faHome} />
                </NavLink>

                <NavLink
                  to="/Coordinator/CoordinatorInbox"
                  style={({ isActive }) => ({
                    cursor: 'pointer',
                    border:
                      isActive && location.pathname === '/Coordinator/CoordinatorInbox' ? '0px solid black' : '',
                    backgroundColor:
                      isActive && location.pathname === '/Coordinator/CoordinatorInbox' ? '#8C949D' : '',
                    borderRadius:
                      isActive && location.pathname === '/Coordinator/CoordinatorInbox' ? '10px' : '',
                    fontSize: '2.5rem',
                    marginTop: '50px',
                    color: 'black',
                  })}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>

                <NavLink
                  to="/coordinator/NewStudentInformation"
                  style={({ isActive }) => ({
                    cursor: 'pointer',
                    border:
                      isActive && location.pathname === '/coordinator/studentInformation' ? '0px solid black' : '',
                    backgroundColor:
                      isActive && location.pathname === '/coordinator/studentInformation' ? '#8C949D' : '',
                    borderRadius:
                      isActive && location.pathname === '/coordinator/studentInformation' ? '10px' : '',
                    fontSize: '2.5rem',
                    marginTop: '50px',
                    color: 'black',
                  })}
                >
                  <FontAwesomeIcon icon={faUserGraduate} />
                </NavLink>
              </div>

              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                onClick={handleClick}
                style={{
                  cursor: 'pointer',
                  fontSize: '2.5rem',
                  color: 'black',
                  marginTop: '50px',
                }}
              />
            </div>
          </div>
          <div
            style={{
              textAlign: 'center',
              paddingTop: '2rem',
              width: '92vw',
              position: 'fixed',
              left: '9%',
            }}
          >
            <div
              style={{
                display: 'flex',
                backgroundColor: '#D9D9D9',
                alignItems: 'center',
                justifyContent: 'start',
                justifySelf: 'start',
                textJustify: 'start',
                width: '85%',
                height: '25vh',
                boxShadow: '0 4px 4px  0 rgba(0, 0, 0, 0.24) inset',
                borderRadius:'20px'
              }}
            >
              <FontAwesomeIcon icon={faCircleUser}  style={{fontSize:"6rem",marginLeft:"2rem",fontWeight:"lighter"}} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem',}}>

                  <div style={{width: '70rem', borderRadius: '4px', padding: '1rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'flex-start',marginBottom:'0.2rem',marginLeft:'1rem',}}>
                 <span style={{fontFamily:'Montserrat',fontSize:'22px',marginRight:'99px'}}>Student Name</span>
                 <span style={{fontFamily:'Montserrat',fontSize:'22px',marginRight:'30px',textTransform:"uppercase" }}>:{student.name} {student.surname}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom:'0.2rem',alignItems: 'center' ,marginLeft:'1rem'}}>
                <span style={{fontFamily:'Montserrat',fontSize:'22px',marginRight:'128px' }}>Student ID</span>
                <span style={{fontFamily:'Montserrat',fontSize:'22px', marginRight:'30px'}}>:{student.username}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start',marginBottom:'0.2rem',marginLeft:'1rem'}}>
                 <span style={{fontFamily:'Montserrat',fontSize:'22px',marginRight:'120px'}}>Department</span>{'   '}
                 <span style={{fontFamily:'Montserrat',fontSize:'22px',marginRight:'30px' }}>:Software Engineering</span>
                 
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' ,marginBottom:'0.2rem',marginLeft:'1rem'}}>
                <span style={{fontFamily:'Montserrat',fontSize:'22px',marginRight:'20px' }}>Compulsory Internship</span>
                <span style={{fontFamily:'Montserrat',fontSize:'22px', marginRight:'30px'}}>:1/2</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' ,marginBottom:'1rem',marginLeft:'1rem'}}>
                <span style={{fontFamily:'Montserrat',fontSize:'22px',marginRight:'30px' }}>Voluntarily Internship</span>
                <span style={{fontFamily:'Montserrat',fontSize:'22px', marginRight:'30px'}}>:0</span>
                </div>
                
                <div style={{position:'absolute', top:"100%", right:"12%", }}>
                <div
  style={{
    paddingTop: "2rem",
    display: "flex",
    alignItems: "center",
    marginRight:"1rem",
    width:'100%',
    
    
  }}
>
  <div
    style={{
      width: "100px",
      height: "5px",
      backgroundColor: "rgba(240, 212, 117, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "5rem",
      padding: "2.2rem",
      borderRadius: "20px",
      boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
      overflow: "hidden",
      fontSize:"0.9rem",
      cursor:"pointer"
    }}
    onClick={()=>downloadTranscriptFile(id)}
    
  >
    View Transcript
  </div>
  <div
    style={{
      padding: "2rem",
      alignItems: "center",
      marginRight: "5rem",
      width: "100px",
      height: "5px",
      backgroundColor: "rgba(240, 212, 117, 0.75)",
      display: "flex",
      justifyContent: "center",
      boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
      overflow: "hidden",
      borderRadius: "20px",
      fontSize:"0.9rem",
      cursor:"pointer"

    }}

    onClick={()=>downloadSGKFile(id)}
  >
    View SGK  
  </div>
  <div
    style={{
      padding: "2rem",
      alignItems: "center",
      marginRight: "5rem",
      width: "100px",
      height: "5px",
      backgroundColor: "rgba(240, 212, 117, 0.75)",
      display: "flex",
      justifyContent: "center",
      boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
      overflow: "hidden",
      borderRadius: "20px",
      fontSize:"0.9rem",
      cursor:"pointer"

    }}
    onClick={()=>downloadInternshipFile(id)}
  >
    View Internship Formular 
  </div>
  <div
    style={{
      padding: "2rem",
      alignItems: "center",
      marginRight: "5rem",
      width: "100px",
      height: "5px",
      backgroundColor: "rgba(240, 212, 117, 0.75)",
      display: "flex",
      justifyContent: "center",
      boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
      overflow: "hidden",
      borderRadius: "20px",
      fontSize:"0.9rem",
      cursor:"pointer"

    }}
    onClick={()=>downloadReportFile(id)}

  >
    View Report Template 
  </div>
  <div
    style={{
      padding: "2rem",
      width: "100px",
      height: "5px",
      backgroundColor: "rgba(240, 212, 117, 0.75)",
      overflow: "hidden",
      display: "flex",
      borderRadius: "20px",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
            fontSize:"0.9rem",
            cursor:"pointer"

    }}
    onClick={()=>requestSGK(id)}
  >
    Send Request For SGK Document to Career Center  
  </div>             
</div>
            </div>
            

                      {/* Diğer öğrencilerin listesi */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ width: '100vw', height: '3vh', backgroundColor: '#8C949D' }}></footer>
    </div>
  );
};

export default NewStudentInformation1;