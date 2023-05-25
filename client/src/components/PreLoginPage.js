import React from "react";
import { useNavigate } from "react-router-dom";

function PreLoginPage() {
  const history = useNavigate();
  return (
    <div
      style={{
        fontFamily: "montserrat",
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("/assets/merkez-yerleske-13.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          fontFamily: "montserrat",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",

          backgroundSize: "500px 500px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(5px)",
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          fontFamily: "montserrat",
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
          padding: "0 2rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: "montserrat",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Uskudar University Logo"
            style={{ width: "50px", marginRight: "1rem" }}
          />
          <h1
            style={{
              color: "black ",
              fontFamily: "Sagoe UI",
              margin: 0,
              fontSize: 18,
            }}
          >
            Üsküdar University
          </h1>
        </div>
        <p
          style={{
            fontFamily: "montserrat",
            margin: 0,
            fontSize: "18px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Internship Application System
        </p>
      </div>

      <div
        style={{
          fontFamily: "montserrat",
          justifyContent: "center",
          marginTop: "0.5rem",
        }}
      >
        <button
          style={{
            fontFamily: "montserrat",
            width: "250px",
            height: "40px",
            fontSize: "15px",
            backgroundColor: "#929AA3",
            border: "none",
            opacity: "0.8",
            borderRadius: "8px 0 0 0",
          }}
        >
          English
        </button>
        <button
          style={{
            fontFamily: "montserrat",
            width: "250px",
            height: "40px",
            fontSize: "15px",
            backgroundColor: "#929AA3",
            border: "none",
            opacity: "0.8",
            borderRadius: "0 8px 0 0",
          }}
        >
          Turkish
        </button>
      </div>

      <div
        style={{
          fontFamily: "montserrat",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          onClick={() => history("/login/admin")}
          style={{
            fontFamily: "montserrat",
            border: "none",
            cursor: "pointer",
            width: "500px",
            height: "50px",
            fontSize: "20px",
            backgroundColor: "#F5F5F5",
            opacity: "0.8",
          }}
        >
          Admin Entry
        </button>
        <button
          onClick={() => history("/login/student")}
          style={{
            fontFamily: "montserrat",
            cursor: "pointer",
            width: "500px",
            height: "50px",
            fontSize: "20px",
            backgroundColor: "#F5F5F5",
            opacity: "0.8",

            border: "none",
          }}
        >
          Student Entry
        </button>
        <button
          onClick={() => history("/login/coordinator")}
          style={{
            fontFamily: "montserrat",
            cursor: "pointer",
            width: "500px",
            height: "50px",
            fontSize: "20px",
            backgroundColor: "#F5F5F5",
            opacity: "0.8",

            border: "none",
          }}
        >
          Coordinator Entry
        </button>
        <button
          onClick={() => history("/login/career")}
          style={{
            fontFamily: "montserrat",
            cursor: "pointer",
            width: "500px",
            height: "50px",
            fontSize: "20px",
            backgroundColor: "#F5F5F5",
            opacity: "0.8",
            borderRadius: "0 0 8px 8px",
            border: "none",
          }}
        >
          Career Center Entry
        </button>
      </div>
      <footer
        style={{
          position: "absolute",
          height: 40,
          left: "0",
          backgroundColor: "#929AA3",
          top: Window.height - 40,
          width: Window.width,
        }}
      ></footer>
    </div>
  );
}

export default PreLoginPage;
