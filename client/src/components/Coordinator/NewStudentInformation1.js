import React, { useState } from 'react';
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
import {

  faCircleUser
} from '@fortawesome/free-regular-svg-icons';

import { useLogout } from '../../hooks/useLogout';

const NewStudentInformation1 = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
    history('/');
  };

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
                boxShadow: '0 4px 4px  0 rgba(0, 0, 0, 0.25) inset',
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
                 <span style={{fontFamily:'Montserrat',fontSize:'22px',marginRight:'30px' }}>:Selin Bekar</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom:'0.2rem',alignItems: 'center' ,marginLeft:'1rem'}}>
                <span style={{fontFamily:'Montserrat',fontSize:'22px',marginRight:'128px' }}>Student ID</span>
                <span style={{fontFamily:'Montserrat',fontSize:'22px', marginRight:'30px'}}>:2048044</span>
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
      fontSize:"0.9rem"
    }}
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
      fontSize:"0.9rem"

    }}
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
      fontSize:"0.9rem"

    }}
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
      fontSize:"0.9rem"

    }}
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
            fontSize:"0.9rem"

    }}
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