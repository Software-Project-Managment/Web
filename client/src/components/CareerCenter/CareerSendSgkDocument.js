import  { useState,useEffect } from "react";
import { useNavigate, useLocation, NavLink,useParams } from "react-router-dom";
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

const CareerSendSgkDocument = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const [file,setFile]=useState()

  const {id} = useParams()

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
   
  };


  const handleSubmit = (e)=>{
    try {
    const data =new FormData()
  
    data.append("gonderenID",user.data._id)
    data.append("aliciID",id)
    data.append("subject","SGK")
    data.append("file",file)
    
    
  
    
     console.log(data);
     const res =axios.post('http://localhost:3000/student/upload/message',data)
     console.log(res);
     alert('Message has been sent')
   
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
          {/* buradan */}
          <div
            style={{
              position: "relative",
              textAlign: "start",
              justifyContent: "center",
              marginLeft: "5%",
            }}
          >
            <p>Career Center Student Information Pdf,jpg,zip</p>
            <div
              style={{
                background: "#D9D9D9",
                width: "80vw",
                padding: "2rem",
              }}
            >

              <div
                style={{
                  display: "flex",
                  background: "#E5E5E6",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontSize: "20px" }}>Send SGK Document</p>
              </div>
              <div style={{ height: "2.5rem",
                  width: "20%",
                  border: "none",
                  borderRadius: "2rem",
                  backgroundColor: "#0295A9",
                  fontSize: "22px",
                  textAlign:"center",
                
                 
                  


                  }}>
  <label htmlFor="file-input" style={{  cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}} className="btn">SGK Document</label>
  <input id="file-input" style={{visibility:"hidden"}} type="file" onChange={handleFileChange} />
</div>
            </div>
            <div style={{ textAlign: "end" }}></div>
            <button
              style={{
                marginTop: "2rem",
                position: "fixed",
                left: "95%",
                transform: "translate(-100% ,-50%)",
                height: "2.5rem",
                width: "20%",
                border: "none",
                borderRadius: "2rem",
                backgroundColor: "#65B9A6",
                fontSize: "22px",
                cursor:"pointer"
              }} 
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>

          {/* buraya */}
        </div>
      </div>

      <footer
        style={{ width: "100vw", height: "3vh", backgroundColor: "#8C949D" }}
      ></footer>
    </div>
  );
};

export default CareerSendSgkDocument;
