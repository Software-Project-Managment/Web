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
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";
import axios  from "axios"
const UploadedDocument = () => {
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const [files,setFiles]=useState()
  const user = JSON.parse(localStorage.getItem('user'))

  const handleClick = () => {
    logout();
    history("/");
  };

  const getItems= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/student/uploadeds/${user.data._id}`)
      
      setFiles(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }

  const downloadFile = async (id,idx)=>{
    try {
       const res = await axios.get(`http://localhost:3000/student/uploadeds/download/${id}/${idx}` , {responseType:'blob'})
  
       
       console.log(res);
       const blob = new Blob([res.data],{type:res.data.type})
       const link = document.createElement('a')
       link.href=window.URL.createObjectURL(blob)
       link.download=`${files[idx].FileName}`
       link.click()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
  
      getItems()
    
   
  },[])
const date = new Date("2023-05-30T21:18:38.026+00:00")
const d = date.getDate()
const m = date.getMonth()+1
const y = date.getFullYear()

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
                  to="/student/inbox"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive && location.pathname === "/student/inbox"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/student/inbox"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/student/inbox"
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
             
              display:"flex",
              flexDirection:"column",
              marginLeft:"1.5rem",
              width: "90vw",
              // position: "fixed",
              top: "20%",
              left: "50%",
              // transform: "translate(-50%, -50%)",
            }}
          >
            <h2
              style={{
                textDecoration: "underline",
                textAlign: "start",
              }}
            >
              Uploaded Documents
            </h2>

            <div style={{
              
                display: "flex",
                flexDirection:"column"

              }}>

              {files && files.map((file)=>(
                <div
                style={{
              
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.5rem",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "8px",
                  textAlign: "center",
                  marginBottom:"1rem"
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                  }}
                >
                  { 
                  <>
                  {d} {m} {y}
                  
                  </>
               
                  }
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                  }}
                >
                  {file.FileName}
                </p>
                <button
                  style={{
                    height: "2.5rem",
                    width: "20%",
                    border: "none",
                    borderRadius: "2rem",
                    backgroundColor: "#65B9A6",
                    fontSize: "22px",
                  }}
                  onClick={()=>downloadFile(file.studentId,file.itemIndex)}
                >
                  Download
                </button>
              </div>
              ))}

            {/* <div
              style={{
            
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem",
                backgroundColor: "#D9D9D9",
                borderRadius: "8px",
                textAlign: "center",
                marginBottom:"1rem"
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                Date
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                Uploaded Transcript
              </p>
              <button
                style={{
                  height: "2.5rem",
                  width: "20%",
                  border: "none",
                  borderRadius: "2rem",
                  backgroundColor: "#65B9A6",
                  fontSize: "22px",
                }}
              >
                Download
              </button>
            </div> */}

       

        
            
            
            </div>
            {/* <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem",
                backgroundColor: "#D9D9D9",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                Date
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                Uploaded Transcript
              </p>
              <button
                style={{
                  height: "2.5rem",
                  width: "20%",
                  border: "none",
                  borderRadius: "2rem",
                  backgroundColor: "#65B9A6",
                  fontSize: "22px",
                }}
              >
                Download
              </button>
            </div> */}
            
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

export default UploadedDocument;
