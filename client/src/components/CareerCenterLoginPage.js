import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

function CareerCenterLoginPage({FirstInput,entry,type}) {
  const [username,setName]=useState("")
  const [password,setPassword]=useState("")
  //const logBy = window.location.pathname.split("/").slice(-1)[0];
  const role="career"

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
          height: "7%",
          backgroundColor: "#929AA3",
          opacity: "0.9",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Uskudar University Logo"
            style={{ width: "50px", marginRight: "1rem" }}
          />
          <h1 style={{color: "black",
              fontFamily: "montserrat",
              margin: 0,
              fontSize: "18px", }}>Üsküdar University</h1>
        </div>
        <div
        style={{
            display: "flex",
            flexDirection: "column"
        }}>
        <p
          style={{
            margin: 0,
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
          }}
        >
          Automated Internship Application System
          
        </p>
        <p style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "bold",
            color: "black",
          }}>
            {entry}
        </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(146, 154, 163, 0.6)",
          padding: "2rem",
          borderRadius: "1rem",

          maxWidth: "500px",
          width: "100%",
          marginTop: "0rem",
        }}
      >
        <h2>Login</h2>
        {error && <p style={{fontSize: "24px", fontWeight: "initial"}}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: "15px", fontWeight: "normal",marginBottom:'0px',display:'block' }}>
        
            {FirstInput}
            <input
              type="text"
              value={username}
              onChange={e=>setName(e.target.value)}
            />
          </label>
          <br />
          <label style={{ fontSize: "15px" ,marginTop:'7px',display:'block',marginBottom:'0rem' }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </label>
          <br />
          <Link
  style={{ color: "black", textDecoration: "none", cursor: "pointer",marginTop:'0px'}}
  to="https://teksifre.uskudar.edu.tr/"
>
  <span style={{  }}>Forgot Password?</span>
</Link>
          <button

            style={{ justifyContent: "flex-end",marginLeft:'24rem',fontSize:'20px',backgroundColor:'#0e7f94',borderRadius:'40px',width:'125px', }}
            type="submit"
            disabled={isLoading}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default CareerCenterLoginPage;
