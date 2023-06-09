import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink,useParams} from "react-router-dom";
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
  faSearch,
  faTriangleExclamation,
  faPerson,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import axios from 'axios'

import { useLogout } from "../../hooks/useLogout";

const CareerStudentInformation = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const [student,setStudent] = useState([])


  const {id} = useParams()

  const getStudent= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/api/users/${id}`)
      
      setStudent(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }
  const handleClick = () => {
    logout();
    history("/");
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Handle search functionality
  };

  useEffect(()=>{
    getStudent()
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
                src="../../assets/logo.png"
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
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: "2.5rem", fontWeight: "lighter" }}
            />
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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <NavLink
                  to="/career"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive && location.pathname === "/career"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/career"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/career" ? "10px" : "",
                    fontSize: "2.5rem",
                    marginTop: "50px",
                    color: "black",
                  })}
                >
                  <FontAwesomeIcon icon={faHome} />
                </NavLink>

                <NavLink
                  to="/career/CareerInbox"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive && location.pathname === "/career/CareerInbox"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/Career/CareerInbox"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/career/CareerInbox"
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
                  to="/career/CareerStudent"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive &&
                      location.pathname === "/career/studentInformation"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive &&
                      location.pathname === "/career/studentInformation"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive &&
                      location.pathname === "/career/studentInformation"
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
          <div
            style={{
              textAlign: "center",
              paddingTop: "2rem",
              width: "92vw",
              position: "fixed",
              left: "9%",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                justifyContent: "start",
                justifySelf: "start",
                textJustify: "start",
                width: "85%",
                height: "25vh",
                boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.24) inset",
                borderRadius: "20px",
              }}
            >
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{
                  fontSize: "6rem",
                  marginLeft: "2rem",
                  fontWeight: "lighter",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "2rem",
                    }}
                  >
                    <div
                      style={{
                        width: "70rem",
                        borderRadius: "4px",
                        padding: "1rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          marginBottom: "0.2rem",
                          marginLeft: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "99px",
                          }}
                        >
                          Student Name
                        </span>
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "30px",
                          }}
                        >
                          :{student.name} {student.surname}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          marginBottom: "0.2rem",
                          alignItems: "center",
                          marginLeft: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "128px",
                          }}
                        >
                          Student ID
                        </span>
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "30px",
                          }}
                        >
                          :{student.username}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          marginBottom: "0.2rem",
                          marginLeft: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "120px",
                          }}
                        >
                          Department
                        </span>
                        {"   "}
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "30px",
                          }}
                        >
                          :Software Engineering
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          marginBottom: "0.2rem",
                          marginLeft: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "20px",
                          }}
                        >
                          Compulsory Internship
                        </span>
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "30px",
                          }}
                        >
                          :1/2
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          marginBottom: "0.2rem",
                          marginLeft: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "30px",
                          }}
                        >
                          Voluntarily Internship
                        </span>
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "30px",
                          }}
                        >
                          :0
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          marginBottom: "1rem",
                          marginLeft: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "22px",
                          }}
                        >
                           Internship Coordinator
                        </span>
                        <span
                          style={{
                            fontFamily: "Montserrat",
                            fontSize: "22px",
                            marginRight: "30px",
                          }}
                        >
                          :Kristin Surpuhi BENLİ
                        </span>
                      </div>

                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: "25%",
                        }}
                      >
                        <div
                          style={{
                            paddingTop: "2rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <NavLink to={`/career/viewSgkDocument/${student._id}`} style={{textDecoration:"none" , color:"black"}}>
                            <div
                              style={{
                                height: "5px",
                                backgroundColor: "#65B9A6",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "5rem",
                                padding: "2.2rem",
                                borderRadius: "20px",
                                boxShadow:
                                  "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                                overflow: "hidden",
                                fontSize: "0.9rem",
                              }}
                            >
                              <div style={{color:'black'}}>View SGK Documents</div>
                            </div>
                          </NavLink>
                          <NavLink to={`/career/intershipApplicationForm/${student._id}`} style={{textDecoration:"none" , color:"black"}}>
                            <div
                              style={{
                                padding: "2rem",
                                alignItems: "center",
                                marginRight: "5rem",

                                height: "5px",
                                backgroundColor: "#65B9A6",

                                display: "flex",
                                justifyContent: "center",
                                boxShadow:
                                  "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                                overflow: "hidden",
                                borderRadius: "20px",
                                fontSize: "0.9rem",
                              }}
                            >
                              <div style={{color:'black'}}>Intershit Application Form</div>
                            </div>
                          </NavLink>
                          <NavLink to={`/career/sendSgkDocument/${student._id}`} style={{textDecoration:"none" , color:"black"}}>
                            <div
                              style={{
                                padding: "2rem",
                                alignItems: "center",
                                marginRight: "5rem",

                                height: "5px",
                                backgroundColor: "#65B9A6",

                                display: "flex",
                                justifyContent: "center",
                                boxShadow:
                                  "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                                overflow: "hidden",
                                borderRadius: "20px",
                                fontSize: "0.9rem",
                              }}
                            >
                              <div style={{color:'black'}}>Send SGK Document</div>
                            </div>
                          </NavLink>
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
      <footer
        style={{ width: "100vw", height: "3vh", backgroundColor: "#8C949D" }}
      ></footer>
    </div>
  );
};

export default CareerStudentInformation;
