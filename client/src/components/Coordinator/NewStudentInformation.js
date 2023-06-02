import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
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
import { useLogout } from '../../hooks/useLogout';
import axios from 'axios'

const NewStudentInformation = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const [students,setStudents]=useState([])




  const getStudents= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/api/users/getstudents`)
      
      setStudents(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }
  const handleClick = () => {
    logout();
    history('/');
  };

  useEffect(()=>{
    getStudents()
  },[])

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search functionality
  };

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
                src="../assets/logo.png"
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
                  marginTop: '51px',
                }}
              />
            </div>
          </div>
          <div
            style={{
              textAlign: 'center',
              paddingTop: '2rem',
              alignItems: 'end',
              justifyContent: 'end',
              width: '92vw',
              position: 'fixed',
              left: '17%',
            }}
          ><div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem', width: '40rem', borderRadius: '4px',justifyContent:'center',    position: 'fixed',
          top: '11%',
          left: '57%',
          transform: 'translate(-50%, -50%)',}}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            style={{ marginRight: '0.5rem', borderRadius: '1rem' }}
          />
          <FontAwesomeIcon icon={faSearch }  onClick={()=>handleSearch} style={{cursor:'pointer'}} />
        </div>
            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                backgroundColor:'#E5E5E6',
                alignItems: 'center',
                justifyContent: 'start',
                justifySelf: 'start',
                textJustify: 'start',
                width: '85%',
                boxShadow: '0 4px 4px  0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,backgroundColor:'#E5E5E6'}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,backgroundColor:'#E5E5E6'}}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem',backgroundColor:'#E5E5E6' }}>

                  <div style={{width: '70rem', border: '1px solid #ccc', borderRadius: '4px', padding: '1rem',backgroundColor:'#E5E5E6' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem',border:'2px solid black',borderRadius:'20px' ,backgroundColor:'#E5E5E6'}}>
                 <span style={{ flex: 1,fontFamily:'Montserrat',fontSize:'25px' }}>Student Name</span>
                 <span style={{ flex: 1,fontFamily:'Montserrat',fontSize:'25px' }}>Student ID</span>
                </div>
              {students && students.map((student,idx)=>(
                <NavLink to={`/coordinator/NewStudentInformation1/${student._id}`} style={{textDecoration:"none", color:"black",backgroundColor:'#E5E5E6'}}>
                <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',border:'1px solid gray',borderRadius:'20px',backgroundColor:'#E5E5E6' }}>
                <div style={{ flex: 1,fontFamily:'Montserrat',fontSize:'25px' , display:"flex" , textTransform:"capitalize",backgroundColor:'#E5E5E6' }}><FontAwesomeIcon icon ={faUserGraduate} style={{marginLeft:"13rem" , marginRight:"10px"}}/>{student.name} {student.surname}</div>
                <span style={{ flex: 1,fontFamily:'Montserrat',fontSize:'25px',backgroundColor:'#E5E5E6' }}>190209018</span>
  </div>
                </NavLink>
              ))}
                
                
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

export default NewStudentInformation;