import { useState,useEffect} from "react";
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



const CareerIntershipApplicationForm = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const [internshipItems,setInternshipItems] = useState([])

  const {id} = useParams()

  const getInternshipItems= async (id)=>{
    try {
      const res = await axios.get(`http://localhost:3000/student/internship/${id}`)
      
      setInternshipItems(res.data)
      console.log(res.data);
      
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




  const handleClick = () => {
    logout();
    history("/");
  };

  useEffect(()=>{

    getInternshipItems(id)
  
   
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
          {/* buradan */}
          <div
            style={{
              textAlign: "start",
              justifyContent: "center",
              marginLeft: "5%",
            }}
          >
            <p>Intership Application Form</p>
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
                  background: "grey",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  borderRadius: "8px",
                }}
              >
                <p>Intership Application Form 25.04.2023</p>
                <div style={{ justifyContent: "center" }}>
                  <NavLink>
                    <button
                      style={{
                        backgroundColor: "yellow",
                        height: "35px",
                        borderRadius: "8px",
                        width: "10rem",
                      }}
                      onClick={()=>downloadInternshipFile(id)}
                    >
                      View
                    </button>
                  </NavLink>
                  <NavLink>
                    <button
                      style={{
                        backgroundColor: "pink",
                        marginLeft: "2.5rem",
                        height: "35px",
                        borderRadius: "8px",
                        width: "10rem",
                      }}
                    >
                      Send Again
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
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

export default CareerIntershipApplicationForm;
