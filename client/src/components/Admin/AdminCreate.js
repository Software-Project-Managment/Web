import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink,Link } from "react-router-dom";
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
import axios from "axios";

const AdminCreate = () => {
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
            <NavLink to="/admin">
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
              
              <div style={{ display: "flex", flexDirection: "column" }}>
                <NavLink
                  to="/admin"
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
                  to="/admin/admincreate"
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
            {/* Burada */}
            <div
  style={{
    display: "flex",
    backgroundColor: "#DFE3E7",
    alignItems: "center",
    flexDirection: "column", 
    width: "82%",
    height: "37rem",
    boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",
    borderRadius: "0.5rem",
    marginLeft: "0.2rem",
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  }}
>
  <h3> Name of the Internship </h3>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.5rem",
      marginLeft: "0.5rem",
      backgroundColor: "#C8C8C5",
      color: "black",
      marginBottom: "1rem", 
      width: "60rem",
      height: "3rem",
    }}
  >
   
  </div>
  <h3> Position of the Internship </h3>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.5rem",
      marginLeft: "0.5rem",
      backgroundColor: "#C8C8C5",
      color: "black",
      marginBottom: "1rem", 
      width: "60rem",
      height: "3rem",
    }}
  >
    
  </div>
  <h3> How many students can apply </h3>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.5rem",
      marginLeft: "0.5rem",
      backgroundColor: "#C8C8C5",
      color: "black",
      marginBottom: "1rem", 
      width: "60rem",
      height: "3rem",
    }}
  >
    
  </div>
  <h3> Last application date </h3>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.5rem",
      marginLeft: "0.5rem",
      backgroundColor: "#C8C8C5",
      color: "black",
      marginBottom: "1rem", 
      width: "60rem",
      height: "3rem",
    }}
  >
    
  </div>
  <h3> Url link of the Internship</h3>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.5rem",
      marginLeft: "0.5rem",
      backgroundColor: "#C8C8C5",
      color: "black",
      marginBottom: "1rem", 
      width: "60rem",
      height: "3rem",
    }}
  >
    
  </div>
  <button style={{display:'flex',alignItems:'self-end',justifyContent:'right',marginLeft:'67rem',fontSize:'23px',borderRadius:'10px',backgroundColor:'#65B9A6'}}>Save</button>
</div>
            {/* Buraya */}
          </div>
        </div>
      </div>
      <footer
        style={{ width: "100vw", height: "3vh", backgroundColor: "#8C949D" }}
      ></footer>
    </div>
  );
};

export default AdminCreate;