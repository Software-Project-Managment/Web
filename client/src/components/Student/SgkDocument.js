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
import axios from 'axios'
const SgkDocument = () => {
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const user = JSON.parse(localStorage.getItem('user'))
  const [items,setItems]=useState([])
  const [file,setFile]=useState()


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
   
  };

  const handleClick = () => {
    logout();
    history("/");
  };

  const handleSubmit = (e)=>{
    try {
    const data =new FormData()
    const allFormsData =new FormData()
    data.append("file",file)
    data.append("id",user.data._id)
    data.append("name",user.data.name)
    data.append("surname",user.data.surname)
    data.append("no",user.data.username)

    allFormsData.append("file",file)
    allFormsData.append("id",user.data._id)
    allFormsData.append("FileName","SGK Document")

     console.log(data);
     const res =axios.post('http://localhost:3000/student/upload/sgk',data)
     const res2 =axios.post('http://localhost:3000/student/upload/studentuploadeds',allFormsData)
     console.log(res);
     console.log(res2);
     alert('file upload successful')
     

   
    } catch (error) {
      console.log(error);
    }
    

  }



  const getItems= async ()=>{
    try {
      const res = await axios.get(`http://localhost:3000/coordinator/sgk`)
      
      setItems(res.data)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  }


  const downloadFile = async (id)=>{
    try {
       const res = await axios.get(`http://localhost:3000/coordinator/sgk/download/${id}` , {responseType:'blob'})
  
       
       console.log(res);
       const blob = new Blob([res.data],{type:res.data.type})
       const link = document.createElement('a')
       link.href=window.URL.createObjectURL(blob)
       link.download=`${items[0].fileName}`
       link.click()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getItems()
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
              width: "80vw",
              position: "fixed",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h2
              style={{
                textDecoration: "underline",
                textAlign: "start",
              }}
            >
              Sgk Document
            </h2>
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
                left: "100%",
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
            {items && items.map((item)=>(
          
        
        
          
          <button style={{
              marginTop: "2rem",
              position: "fixed",
              right: "100%",
              transform: "translate(100% ,-50%)",
              height: "2.5rem",
              width: "20%",
              border: "none",
              borderRadius: "2rem",
              backgroundColor: "#65B9A6",
              fontSize: "22px",
            }}  onClick={()=>downloadFile(item.CoordinatorID)}>Download file</button>
       
       
       
      )

       ) }
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

export default SgkDocument;
