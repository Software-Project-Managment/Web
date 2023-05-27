import React, { useState, useEffect } from "react";
import Navbar2 from "../Navbar2";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import {
  faHome,
  faArrowRightFromBracket,
  faEnvelope,
  faArrowUpFromBracket,
  faBars,
  faGraduationCap,
  faUser,
  faUsers,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StudentPage = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
    history("/");
  };
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar'ın açık/kapalı durumunu tutan state
  const history = useNavigate();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Sidebar'ın durumunu tersine çevir
    setButtonColor("white");
  };
  function handleMouseLeave() {
    setTimeout(() => {
      {
        void toggleSidebar; // burada gecikmeli olarak çalışmasını istediğiniz kodları yazın
      }
    }, 5000); // 1000 milisaniye (1 saniye) gecikme
  }
  useEffect(() => {
    // Component yüklendiğinde sidebar'ı açık olarak ayarla
    setSidebarOpen(true);
  }, []);
  const [buttonColor, setButtonColor] = useState("white");
  return (
    <>
      <Navbar2 userType={"student"} />

      <div
        style={{
          position: "cover",
          width: "25%",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginTop: "0rem",
        }}
      >
        {sidebarOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#929AA3",
              border: "1px solid black",
              borderTop: "none",
              flexGrow: "1",
              width: "12rem",
            }}
          >
            <button
              style={{
                height: "3rem",
                padding: "0.5rem",
                fontSize: "1rem",
                marginTop: "5rem",
                border: "none",
                backgroundColor: "#929AA3",
                textAlign: "start",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "gray";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#929AA3";
              }}
              onClick={() => history("/student  ")}
            >
              <FontAwesomeIcon
                icon={faHome}
                style={{
                  cursor: "pointer",
                  fontSize: "2.5rem",
                  color: "black",
                }}
              />{" "}
              HomePage
            </button>
            <button
              style={{
                height: "3rem",
                padding: "0.5rem",
                fontSize: "1rem",
                marginTop: "1rem",
                border: "none",
                backgroundColor: "#929AA3",
                textAlign: "start",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "gray";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#929AA3";
              }}
              onClick={() => history("/student/uppermessage")}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  cursor: "pointer",
                  fontSize: "2.5rem",
                  color: "black",
                }}
              />{" "}
              Messages
            </button>
            <button
              style={{
                height: "3rem",
                padding: "0.5rem",
                fontSize: "1rem",
                marginTop: "1rem",
                border: "none",
                backgroundColor: "#929AA3",
                textAlign: "start",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "gray";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#929AA3";
              }}
              onClick={() => history("/student/uptranscript")}
            >
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                style={{
                  cursor: "pointer",
                  fontSize: "2.5rem",
                  color: "black",
                }}
              />{" "}
              Upload
            </button>
            <button
              style={{
                height: "3rem",
                padding: "0.5rem",
                fontSize: "1rem",
                marginTop: "1rem",
                border: "none",
                textAlign: "start",
                backgroundColor: "#929AA3",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "gray";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#929AA3";
              }}
            >
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                onClick={handleClick}
                style={{
                  cursor: "pointer",
                  fontSize: "2.5rem",
                  color: "black",
                }}
              />{" "}
              Logout
            </button>
          </div>
        )}
      </div>

      <p>
        Dear Students,
        <br />
        Internship regardless of your current education level or desired career
        path; It is very important for your professional development and
        acquiring new skills. As Üsküdar University, we wish success to all our
        students in this process.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1100px",
            marginLeft: "8rem",
            marginBottom: "12rem",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "30px",
              backgroundColor: "rgba(240, 212, 117, 0.75)",
              marginBottom: "100rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "5rem",
              padding: "4rem",
              borderRadius: "20PX",
              boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
              overflow: "hidden",
            }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ cursor: "pointer", fontSize: "2.5rem", color: "black" }}
            />{" "}
            Education Information Software Engineering (English) 3.Class
          </div>

          <div
            style={{
              padding: "4rem",
              alignItems: "center",
              marginRight: "5rem",
              width: "200px",
              height: "30px",
              backgroundColor: "rgba(101, 185, 166, 0.75)",
              display: "flex",
              justifyContent: "center",
              marginTop: "-100rem",
              boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <FontAwesomeIcon
              icon={faUsers}
              style={{ cursor: "pointer", fontSize: "2.5rem", color: "black" }}
            />
            Internship Coordinator: Kristin Surpuhi Benli
          </div>
          <div
            style={{
              padding: "4rem",
              width: "200px",
              height: "30px",
              backgroundColor: "rgba(2, 149, 169, 0.75)",
              overflow: "hidden",
              display: "flex",
              borderRadius: "20px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-100rem",
              boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
            }}
          >
            <FontAwesomeIcon
              icon={faFileCircleCheck}
              style={{ cursor: "pointer", fontSize: "2.5rem", color: "black" }}
            />
            Compulsory Internship 1/2 Voluntarily Internship 0
          </div>
        </div>
      </div>

      <button
        style={{
          backgroundColor: "#929AA3",
          marginLeft: "0rem",
          position: "absolute",
          top: "7.45rem",
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={toggleSidebar}
        onMouseEnter={toggleSidebar}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon
          icon={faBars}
          style={{ cursor: "pointer", fontSize: "2.5rem", color: "black" }}
        />
      </button>
    </>
  );
};
export default StudentPage;
