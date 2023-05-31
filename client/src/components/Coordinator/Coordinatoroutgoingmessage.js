import React from "react";
import { useNavigate, useLocation, NavLink, Link } from "react-router-dom";
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
  faPerson,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";
const CoordinatoroutgoingMessage = () => {
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const user = JSON.parse(localStorage.getItem('user'))

  const handleClick = () => {
    logout();
    history("/");
  };
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
            <NavLink to="/student">
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
          <div style={{ marginRight: "9px" }}>
          <div style={{  display:"flex" , alignItems:"center",justifyContent:"space-around",width:"200px"}}>
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: "2.5rem" }}
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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <NavLink
                  to="/coordinator"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive && location.pathname === "/student"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/student"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/student"
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
                  to="/coordinator/CoordinatorInbox"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive && location.pathname === "/student/newMessage"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/student/newMessage"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/student/newMessage"
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
                      isActive && location.pathname === "/student/uploaded"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/student/uploaded"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/student/uploaded"
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
              display: "flex",
            }}
          >
            <div
              style={{
                height: "80vh",
                width: "20vW",
                textAlign: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  textDecoration: "underline",
                  marginTop: "4rem",
                  fontSize: "2.5rem",
                }}
              >
                My Messages
              </p>
              <NavLink to="/coordinator/CoordinatorInbox" style={{ color: "black" }}>
                <p
                  style={{
                    marginTop: "2rem",
                    fontSize: "20px",
                  }}
                >
                  New Message
                </p>
              </NavLink>
              <NavLink to="/coordinator/incomingMessage" style={{ color: "black" }}>
                <p
                  style={{
                    marginTop: "2rem",
                    fontSize: "20px",
                  }}
                >
                  Incoming Message
                </p>
              </NavLink>
              <NavLink to="/student/outgoingMessage" style={{ color: "black" }}>
                <p
                  style={{
                    marginTop: "2rem",
                    fontSize: "20px",
                  }}
                >
                  Outgoing Message
                </p>
              </NavLink>
            </div>
            <div>
              <p style={{ fontSize: "2rem" }}>Outgoing Messages</p>
              <input
                style={{
                  width: "60vw",
                  height: "2rem",
                  fontSize: "2rem",
                }}
                placeholder="Ara"
              ></input>
              <div style={{ height: "4rem" }}></div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#8C949D",
                  justifyContent: "space-between",
                  width: "70vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#8C949D",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ fontSize: "2.5rem" }}
                  />
                  <p style={{ fontSize: "1.5rem" }}>Mert Yomralıoğlu</p>
                </div>
                <p style={{ fontSize: "1.5rem" }}>190209051</p>
              </div>
              <div style={{ height: "2rem" }}></div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#8C949D",
                  justifyContent: "space-between",
                  width: "70vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#8C949D",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ fontSize: "2.5rem" }}
                  />
                  <p style={{ fontSize: "1.5rem" }}>Mert Yomralıoğlu</p>
                </div>
                <p style={{ fontSize: "1.5rem" }}>190209051</p>
              </div>
              <div style={{ height: "2rem" }}></div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#8C949D",
                  justifyContent: "space-between",
                  width: "70vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#8C949D",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ fontSize: "2.5rem" }}
                  />
                  <p style={{ fontSize: "1.5rem" }}>Mert Yomralıoğlu</p>
                </div>
                <p style={{ fontSize: "1.5rem" }}>190209051</p>
              </div>
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

export default CoordinatoroutgoingMessage;
