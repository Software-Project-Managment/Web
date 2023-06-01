import {useState,useEffect} from "react";
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
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";
import axios from 'axios'
const CoordinatorInbox = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const [coords,setCoords]=useState([])
  const [msg,setMsg]=useState("")
  const [selectedCoord,setselectedCoord]=useState('')
  const [file,setFile]=useState()
  const [subject,setSubject]=useState('')




  const getCoordinators= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/api/users/getstudents`)
      
      setCoords(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }


  const handleClick = () => {
    logout();
    history("/");
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
   
  };

  
  const handleSubmit = (e)=>{
    try {
    const data =new FormData()
  
    data.append("gonderenID",user.data._id)
    data.append("aliciID",selectedCoord)
    data.append("subject",subject)
    data.append("message",msg)
    if(file){
      data.append("file",file)
    }
    
  
    
     console.log(data);
     const res =axios.post('http://localhost:3000/student/upload/message',data)
     console.log(res);
     alert('Message has been sent')
   
    } catch (error) {
      console.log(error);
    }
    

  }
  useEffect(()=>{
    getCoordinators()
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
              <NavLink to="/coordinator/outgoingMessage" style={{ color: "black" }}>
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
            <div
              style={{
                height: "80vh",
                width: "60vW",
              }}
            >
              <p>Contact (Search with Student ID)</p>
           
              <form>
                <label
                 
                >
                  {/* <input type="text" /> */}
                  <select style={{
                    fontSize: "15px",
                    fontWeight: "normal",
                    marginBottom: "0px",
                    display: "block",
                    width:"100%",
                    height:"35px",
                    outline:"none"
                  }} id='a' value={selectedCoord} onChange={(e)=>setselectedCoord(e.target.value)}>
            <option value="" key="1">Select</option>
            { coords && coords.map((coord)=>(
              <option value={coord._id} key={coord._id}>{coord.name.toUpperCase()} {coord.surname.toUpperCase()}</option>
            ))}
          
        </select>
                </label>

                <label
                  style={{
                    fontSize: "15px",
                    marginTop: "7px",
                    display: "block",
                    marginBottom: "0rem",
                  }}
                >
                  <p>Regard</p>
                  <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                </label>
                <p>Message</p>
                {/* <input
                  type="text"
                  style={{ height: "10rem", lineHeight: "normal" }}
                /> */}
                <textarea name="message" id="message" style={{width:"100%" , height:"10rem"}} placeholder="Your message" value={msg} onChange={(e)=>setMsg(e.target.value)} ></textarea>
              </form>


                <div style={{
               marginTop:"4rem"
               
              }}>
                <div style={{fontSize:"1.2rem"}}>File (Adding files is not mandatory) </div>
                <div
              style={{
                alignSelf: "center",
                alignItems: "center",
                alignContent: "center",
                display: "flex",
                padding: "0.5rem",
                backgroundColor: "#D9D9D9",
                borderRadius: "8px",
               
              }}
            >
              {/* <button type="file"
                style={{
                  height: "2.5rem",
                  width: "20%",
                  border: "none",
                  borderRadius: "2rem",
                  backgroundColor: "#0295A9",
                  fontSize: "22px",
                 
                  
                }}
              >
                
                File
              </button> */}
              <div style={{ height: "2.5rem",
                  width: "20%",
                  border: "none",
                  borderRadius: "2rem",
                  backgroundColor: "#0295A9",
                  fontSize: "22px",
                  textAlign:"center",
                 
                 
                  


                  }}>
  <label htmlFor="file-input" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}} className="btn">File</label>
  <input id="file-input" style={{visibility:"hidden"}} type="file"  onChange={handleFileChange} />
</div>

              
              
            </div>

            <button
              style={{
                marginTop: "2rem",
                position: "fixed",
                left: "86%",
                transform: "translate(-100% ,-50%)",
                height: "2.5rem",
                width: "20%",
                border: "none",
                borderRadius: "2rem",
                backgroundColor: "#65B9A6",
                fontSize: "22px",
              }} 
            onClick={handleSubmit}
            >
              Send
            </button>
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

export default CoordinatorInbox;
