import {useState,useEffect} from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faTriangleExclamation,
  faPerson,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";
import axios from 'axios'
const NewCoordinator = () => {
  const user = JSON.parse(localStorage.getItem('user'))
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
    history("/");
  };

  useEffect(()=>{
    getStudents()
  },[])
  return (
    <div>
      <div>
        <nav
          style={{
            width: "100vw",
            height: "7vh",
            backgroundColor: "#8C949D",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "5vw" }}>
            <NavLink to="/coordinator">
              <img
                src="../assets/logo.png"
                style={{
                  width: "50px",
                  marginLeft: "-3.5rem",
                  marginTop: "0.5rem",
                }}
              />
            </NavLink>
          </div>
          <div style={{  display:"flex" , alignItems:"center",justifyContent:"space-around",width:"200px"}}>
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: "2.5rem",fontWeight:"lighter" }}
            />
               <div
        style={{
          fontFamily:'montserrat',
            display: "flex",
            flexDirection: "column"
        }}>
          
        <p
          style={{
            color:"black",
            fontFamily:'montserrat',
            margin: 0,
            fontFamily:'montserrat',
            fontSize: "1.3rem",
            color:"black",
            textTransform:"capitalize"
          }}
        >
          {user.data.name} {user.data.surname}
           
        </p>
        <p style={{
            fontFamily:'montserrat',
            margin: 0,
            fontSize: "1.3rem",
            color:"black",
            
          }}>

           {user.data.role==="student" && user.data.username}
        </p>
        
        
        </div>
            
            <FontAwesomeIcon icon={faUser} style={{ fontSize: "2.5rem" }} />
          </div>
        </nav>
        <div style={{ display: "flex" }}>
          <div
            style={{ width: "6vw", height: "90vh", backgroundColor: "#8C949D" }}
          >
            <div
              style={{
                height: "97%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              >
              <div
                style={{
                  width: "200px",
                  height: "30px",
                  backgroundColor: "#65B9A6",
                  position: 'fixed',
                  top: '35%',
                  left: '28%',
                  transform: 'translate(-50%, -50%)',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "5rem",
                  padding: "4rem",
                  borderRadius: "10PX",
                  boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                  overflow: "hidden",
                }}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{
                    cursor: "pointer",
                    fontSize: "2.5rem",
                    color: "black",
                  }}
                />{" "}
                Active Students:{students.length}
              </div>
              
              <div
                style={{
                  width: "200px",
                  height: "30px",
                  backgroundColor: "#0295A9",
                  position: 'fixed',
                  top: '35%',
                  left: '53%',
                  transform: 'translate(-50%, -50%)',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "5rem",
                  padding: "4rem",
                  borderRadius: "10PX",
                  boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                  overflow: "hidden",
                }}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faFileCircleCheck}
                  style={{
                    cursor: "pointer",
                    fontSize: "2.5rem",
                    color: "black",
                  }}
                />{" "}
                Internship Coordinator: Kristin Surpuhi Benli
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <NavLink
                  to="/coordinator"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive && location.pathname === "/coordinator"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/coordinator"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/coordinator"
                        ? "10px"
                        : "",
                    fontSize: "2.5rem",
                    marginTop: "50px",
                    color: "black",
                  })}
                >
                  <FontAwesomeIcon icon={faHome} />
                </NavLink>

                <NavLink
                  to="/Coordinator/CoordinatorInbox"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive && location.pathname === "/Coordinator/CoordinatorInbox"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/Coordinator/CoordinatorInbox"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/Coordinator/CoordinatorInbox"
                        ? "10px"
                        : "",
                    fontSize: "2.5rem",
                    marginTop: "50px",
                    color: "black",
                  })}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>

                <NavLink
                  to="/coordinator/NewStudentInformation"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive &&
                      location.pathname === "/coordinator/studentInformation"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive &&
                      location.pathname === "/coordinator/studentInformation"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive &&
                      location.pathname === "/coordinator/studentInformation"
                        ? "10px"
                        : "",
                    fontSize: "2.5rem",
                    marginTop: "50px",
                    color: "black",
                  })}
                >
                  <FontAwesomeIcon icon={faUserGraduate} />
                </NavLink>
              </div>

              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                onClick={handleClick}
                style={{
                  cursor: "pointer",
                  fontSize: "2.5rem",
                  color: "black",
                  marginTop: "50px",
                }}
              />
            </div>
          </div>
      
          {/* Burada */}
          <div
            style={{
              textAlign: "center",
              paddingTop: "2rem",
              alignItems: "end",
              justifyContent: "end",
              width: "92vw",
              position: "fixed",
              left: "17%",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "pink",
                alignItems: "center",
                justifyContent: "start",
                justifySelf: "center",
                textJustify: "center",
                width: "80%",
                boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                borderRadius:"10px"
              }}
            >
              {" "}
              
              
              <p>Dear Internship Coordinator please ensure that all students fill out the forms correctly and turn them on time.</p>
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                backgroundColor: "rgba(63, 167, 144, 0.75)",
                alignItems: "center",
                justifyContent: "start",
                justifySelf: "start",
                textJustify: "start",
                width: "80%",
                boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
              }}
            >

            </div>
          </div>
     

          {/* Buraya */}
        </div>
      </div>
      <footer
        style={{ width: "100vw", height: "3vh", backgroundColor: "#8C949D" }}
      ></footer>
    </div>
  );
};

export default NewCoordinator;
