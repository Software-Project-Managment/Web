import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

function CoordinatorLoginPage({FirstInput,entry,type}) {
  const [username,setName]=useState("")
  const [password,setPassword]=useState("")
  //const logBy = window.location.pathname.split("/").slice(-1)[0];
  const role="coordinator"

  const {login,isLoading,error} = useLogin()
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    await login(username,password,type,role)
   
    
  }




  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/assets/merkez-yerleske-13.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "12.5%",
          backgroundColor: "#121e2d",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            backgroundColor: "#121e2d",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Uskudar University Logo"
            style={{ width: "50px", marginRight: "1rem" }}
          />
          <h1 style={{color:"white",fontFamily:'montserrat', margin: 0 }}>Üsküdar University</h1>
        </div>
        <div
        style={{
            display: "flex",
            flexDirection: "column"
        }}>
        <p
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: "bold",
            color: "white"
            
          }}
        >
          Automated Internship Application System
          
        </p>
        <p style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
          }}>
            {entry}
        </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          maxWidth: "500px",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <h2>Login</h2>
        {error && <p style={{color:'red'}}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: "21px" }}>
        
            {FirstInput}
            <input
              type="text"
              value={username}
              onChange={e=>setName(e.target.value)}
            />
          </label>
          <br />
          <label style={{ fontSize: "21px" }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" disabled={isLoading}>Login</button>
          <button type="button"  ><Link style={{color:'white',textDecoration:'none'}} to='https://teksifre.uskudar.edu.tr/' >Forgot Password?</Link></button>
        </form>
      </div>
    </div>
  );
}

export default CoordinatorLoginPage;
