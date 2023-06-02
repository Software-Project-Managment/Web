import React from "react";
import { useNavigate, useLocation, NavLink,Link} from "react-router-dom";
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
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";
const NewStudent = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();

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
                src="assets/logo.png"
                style={{
                  width: "50px",
                  marginLeft: "-3.5rem",
                  marginTop: "0.5rem",
                }}
              />
            </NavLink> <div style={{position: "fixed",top: "0%",left: "12%",transform: "translate(-50%, 50%)"}}>2022/2023 Fall Semester</div> 
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "200px",
            }}
          >
            <FontAwesomeIcon icon={faBell} style={{ fontSize: "1.5rem" }} />
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
            <NavLink to='/student/profile'><FontAwesomeIcon icon={faUser} style={{ fontSize: "1.5rem" , color:"black"}} /></NavLink>
            
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
                  <FontAwesomeIcon icon={faHouse}style={{fontSize:'2rem',}} />
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
                  <FontAwesomeIcon icon={faEnvelope}style={{fontSize:'2rem'}} />
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
                  <FontAwesomeIcon icon={faUpload}style={{fontSize:'2rem'}} />
                </NavLink>
              </div>

              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                onClick={handleClick}
                style={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  color: "black",
                  marginTop: "50px",
                }}
              />
            </div>
          </div>
          {/* Burada */}
          <div
            style={{
              paddingTop: "2rem",
              alignItems: "center",
              justifyContent: "center",
              width: "92vw",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "rgba(63, 167, 144, 0.75)",
                alignItems: "center",
                justifyContent: "center",
                // justifySelf: "center",
                // textJustify: "center",
                width: "86%",
                boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                borderRadius: "0.5rem",
                marginLeft: "5.7rem",
              }}
            >
              {" "}
              <div>
                <h3> Dear students, </h3>
                <p>
                  Intership regardless of your current education level or
                  desired career path: Is is very important for your
                  professional development and acquiring new skills. As Üsküdar
                  University . We wish success to all our students in this
                  process.
                </p>
              </div>
            </div>

            <div
              style={{
                paddingTop: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "1px",
                  backgroundColor: "rgba(240, 212, 117, 0.75)",

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
                  icon={faGraduationCap}
                  style={{
                    cursor: "pointer",
                    fontSize: "2rem",
                    color: "black",
                  }}
                />{" "}
                Education Information Software Engineering (English) 3.Class
              </div>

              <div
                style={{
                  padding: "4rem",
                  alignItems: "center",
                  marginRight: "5rem",
                  width: "200px",
                  height: "1px",
                  backgroundColor: "rgba(101, 185, 166, 0.75)",
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{
                    cursor: "pointer",
                    fontSize: "2.5rem",
                    color: "black",
                  }}
                />
                Internship Coordinator: Kristin Surpuhi Benli
              </div>
              <div
                style={{
                  padding: "4rem",

                  width: "200px",
                  height: "1px",
                  backgroundColor: "rgba(2, 149, 169, 0.75)",
                  overflow: "hidden",
                  display: "flex",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                }}
              >
                <FontAwesomeIcon
                  icon={faFileCircleCheck}
                  style={{
                    cursor: "pointer",
                    fontSize: "2.5rem",
                    color: "black",
                  }}
                />
                Compulsory Internship 1/2 Voluntarily Internship 0
              </div>
            </div>
          </div>
          <div
              style={{
                position: "fixed",
                bottom: "27%",
                left: "45%",
                transform: "translate(-50%, 50%)",
                display: "flex",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                flexDirection: "column",
                width: "78.7%",
                height: "20rem",
                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",
                borderRadius: "0.5rem",
                marginLeft: "5.7rem",
                marginTop: "3rem",
              }}
            >
              <h3 style={{position: "fixed",bottom: "88%",left: "8%",transform: "translate(-50%, 50%)"}}> Internship Options </h3>
              <Link to="https://www.ox.ac.uk">
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.5rem",
                    marginLeft: "1.5rem",
                    backgroundColor: "#E5E5E6",
                    color: "black",
                    marginBottom: "1rem",
                    marginTop: "2.5rem",
                    width: "70rem",
                    height: "4rem",
                  }}
                >
                  Internship Application as Frontend Developer on Oxford
                  Last Date for Application 07/05/2023
                  
                </button>
              </Link>
              
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  marginLeft: "1.5rem",
                  backgroundColor: "#E5E5E6",
                  color: "black",
                  marginBottom: "1rem",
                  width: "70rem",
                  height: "4rem",
                }}
                
              >
                +
              </button>
              
              
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  marginLeft: "1.5rem",
                  backgroundColor: "#E5E5E6",
                  color: "black",
                  marginBottom: "1rem",
                  width: "70rem",
                  height: "4rem",
                }}
              >
                +
              </button>
              
            </div>
        </div>
      </div>
      <footer
        style={{ width: "100vw", height: "3vh", backgroundColor: "#8C949D" }}
      ></footer>
    </div>
  );
};

export default NewStudent;
