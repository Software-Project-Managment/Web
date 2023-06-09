import React from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from '@fortawesome/free-regular-svg-icons';
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
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";
import axios from 'axios'
const NewUploaded = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();

  const handleOfficalLetterSubmit = (e)=>{
    try {
    const data =new FormData()
   
    const name = `${user.data.name} ${user.data.surname}`

    data.append("name",user.data.name)
    data.append("aliciID",'6450a8cf78e1c39f474b033a')
    data.append("subject",'Offical Letter')

    const obje = {
      "name" : `${user.data.name} ${user.data.surname}`,
      "aliciID" : "6450a8cf78e1c39f474b033a",
      "subject" : "Offical Letter"
    }
 

     console.log(data);
     const res =axios.post('http://localhost:3000/student/upload/notification',obje)
  
     

     console.log(res);
     alert('REQUEST SENT')


   
    } catch (error) {
      console.log(error);
    }
    

  }



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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "200px",
            }}
          >
            <FontAwesomeIcon icon={faBell} style={{ fontSize: "2.5rem" }} />
            <div
              style={{
                fontFamily: "montserrat",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  color: "black",
                  fontFamily: "montserrat",
                  margin: 0,
                  fontFamily: "montserrat",
                  fontSize: "1.3rem",
                  color: "black",
                  textTransform: "capitalize",
                }}
              >
                {user.data.name} {user.data.surname}
              </p>
              <p
                style={{
                  fontFamily: "montserrat",
                  margin: 0,
                  fontSize: "1.3rem",
                  color: "black",
                }}
              >
                {user.data.role === "student" && user.data.username}
              </p>
            </div>

            <NavLink to='/student/profile'><FontAwesomeIcon icon={faUser} style={{ fontSize: "2.5rem" , color:"black"}} /></NavLink>
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
                  to="/student"
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
                  to="/student/newMessage"
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
                  to="/student/uploaded"
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
                  <FontAwesomeIcon icon={faUpload} />
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
              width: "80vh",
              position: "fixed",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#D9D9D9",
              justifyContent: "center",
              padding: "3rem",
            }}
          >
            <div
              style={{
                textAlign: "Center",
                alignItems: "start",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  textDecoration: "underline",
                }}
              >
                Intership Application Form
              </p>
              <NavLink to="/student/intershipApplicationForm">
                <button
                  to="/student"
                  style={{
                    backgroundColor: "#65B9A6",
                    width: "120px",
                    height: "40px",
                    borderRadius: "32px",
                    border: "none",
                    fontSize: "18px",
                    cursor:"pointer"

                  }}
                >
                  File
                </button>
              </NavLink>
            </div>
            <div
              style={{
                textAlign: "Center",
                alignItems: "start",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  textDecoration: "underline",
                }}
              >
                Intership Report Template
              </p>
              <NavLink to="/student/intershipReportTemplate">
                <button
                  style={{
                    backgroundColor: "#65B9A6",
                    width: "120px",
                    height: "40px",
                    borderRadius: "32px",
                    border: "none",
                    fontSize: "18px",
                    cursor:"pointer"

                  }}
                >
                  File
                </button>
              </NavLink>
            </div>{" "}
            <div
              style={{
                textAlign: "Center",
                alignItems: "start",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  textDecoration: "underline",
                }}
              >
                Upload Transcript
              </p>
              <NavLink to="/student/uploadTranscript">
                <button
                  style={{
                    backgroundColor: "#65B9A6",
                    width: "120px",
                    height: "40px",
                    borderRadius: "32px",
                    border: "none",
                    fontSize: "18px",
                    cursor:"pointer"

                  }}
                >
                  File
                </button>
              </NavLink>
            </div>{" "}
            <div
              style={{
                textAlign: "Center",
                alignItems: "start",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  textDecoration: "underline",
                }}
              >
                SGK Document
              </p>
              <NavLink to="/student/sgkDocument">
                <button
                  style={{
                    backgroundColor: "#65B9A6",
                    width: "120px",
                    height: "40px",
                    borderRadius: "32px",
                    border: "none",
                    fontSize: "18px",
                    cursor:"pointer"

                  }}
                >
                  File
                </button>
              </NavLink>
            </div>
            <div
              style={{
                textAlign: "Center",
                alignItems: "start",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  textDecoration: "underline",
                }}
              >
                Offical Letter
              </p>
              <NavLink to="">
                <button
                  style={{
                    backgroundColor: "#65B9A6",
                    width: "120px",
                    height: "40px",
                    borderRadius: "32px",
                    border: "none",
                    fontSize: "18px",
                    cursor:"pointer"
                  }}
                  onClick={handleOfficalLetterSubmit}
                >
                  Request 
                </button>
              </NavLink>
            </div>
            <div
              style={{
                textAlign: "Center",
                alignItems: "start",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  textDecoration: "underline",
                }}
              >
                Uploaded Documents
              </p>
              <NavLink to="/student/uploadedDocuments">
                <button
                  style={{
                    backgroundColor: "#65B9A6",
                    width: "120px",
                    height: "40px",
                    borderRadius: "32px",
                    border: "none",
                    fontSize: "18px",
                    cursor:"pointer"

                  }}
                >
                  File
                </button>
              </NavLink>
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

export default NewUploaded;
