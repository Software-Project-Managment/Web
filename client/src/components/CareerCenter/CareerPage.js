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
const CareerPage = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const [student,setStudent] = useState([])


  
  const getRequstStudent= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/api/users/getrequeststudents`)
      
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

  useEffect(()=>{
    getRequstStudent()
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
            <NavLink to="/career">
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

           
        </p>
        <p style={{
            fontFamily:'montserrat',
            margin: 0,
            fontSize: "1.3rem",
            color:"black",
            
          }}>


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
                  to="/career/CareerIncomingmessage"
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
                  to="/career/CareerStudent"
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
                backgroundColor: "#FF8975",
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
              
              
              <p style={{fontSize:'1.5rem'}}><FontAwesomeIcon icon = {faBell}/> {student.length} new SGK Request</p>
            </div>
            <div
              style={{
                marginTop:'1.5rem',
                display: "flex",
                backgroundColor: "#65B9A6",
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
              
              
              <p style={{fontSize:'1.5rem'}}><FontAwesomeIcon icon={faTriangleExclamation}/> Please be sure that the student fill the Internship Report rightly and correct before you sent the SGK Document</p>
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

export default CareerPage;
