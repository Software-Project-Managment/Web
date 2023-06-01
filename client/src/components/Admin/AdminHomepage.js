import React from "react";
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
  faBullhorn,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";
const AdminDeneme = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();

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
            <NavLink to="/admin">
              <img
                src="assets/logo.png"
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
            <FontAwesomeIcon icon={faBell} style={{ fontSize: "2.5rem" }} />
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
                Admin
              </p>
            </div>
            <NavLink to="/student/profile">
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: "2.5rem", color: "black" }}
              />
            </NavLink>
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
                  to="/admin"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive && location.pathname === "/admin"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/admin"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/admin" ? "10px" : "",
                    fontSize: "2.5rem",
                    marginTop: "50px",
                    color: "black",
                  })}
                >
                  <FontAwesomeIcon icon={faHome} />
                </NavLink>

                <NavLink
                  to="/admin/preAddCoordinator"
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
                  <FontAwesomeIcon icon={faUsers} />
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
                  <FontAwesomeIcon icon={faBullhorn} />
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
              paddingTop: "2rem",
              alignItems: "center",
              justifyContent: "center",
              width: "92vw",
            }}
          >
            <div
              style={{
                paddingTop: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NavLink to="/admin/students">
                <div
                  style={{
                    width: "250px",
                    height: "30px",
                    backgroundColor: "rgba(240, 212, 117, 0.75)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "5rem",
                    padding: "4rem",
                    borderRadius: "10PX",
                    boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faGear}
                    style={{
                      cursor: "pointer",
                      fontSize: "2.5rem",
                      color: "black",
                    }}
                  />{" "}
                  Manage Students and Student Page
                </div>
              </NavLink>

              <NavLink to="/admin/coordinators">
                <div
                  style={{
                    padding: "4rem",
                    alignItems: "center",
                    marginRight: "5rem",
                    width: "300px",
                    height: "30px",
                    backgroundColor: "rgba(101, 185, 166, 0.75)",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faGear}
                    style={{
                      cursor: "pointer",
                      fontSize: "2.5rem",
                      color: "black",
                    }}
                  />
                  Manage Coordinators and Coordinator Page
                </div>
              </NavLink>
              <NavLink to="/career">
                <div
                  style={{
                    padding: "4rem",

                    width: "300px",
                    height: "30px",
                    backgroundColor: "rgba(2, 149, 169, 0.75)",
                    overflow: "hidden",
                    display: "flex",
                    borderRadius: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faGear}
                    style={{
                      cursor: "pointer",
                      fontSize: "2.5rem",
                      color: "black",
                    }}
                  />
                  Manage Career Center
                </div>
              </NavLink>
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "#DFE3E7",
                alignItems: "center",
                flexDirection: "column",
                width: "86%",
                height: "20rem",
                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",
                borderRadius: "0.5rem",
                marginLeft: "5.7rem",
                marginTop: "3rem",
              }}
            >
              <h3> Active Internships for Students </h3>
              <Link to="https://www.ox.ac.uk">
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.5rem",
                    marginLeft: "1.5rem",
                    backgroundColor: "#C8C8C5",
                    color: "black",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                    width: "70rem",
                    height: "4rem",
                  }}
                >
                  Internship Application as Frontend Developer on Oxford
                  https://www.ox.ac.uk
                </button>
              </Link>
              <NavLink to="/admin/AdminCreate">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  marginLeft: "1.5rem",
                  backgroundColor: "#C8C8C5",
                  color: "black",
                  marginBottom: "1rem",
                  width: "70rem",
                  height: "4rem",
                }}
                
              >
                +
              </button>
              </NavLink>
              <NavLink to="/admin/AdminCreate">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  marginLeft: "1.5rem",
                  backgroundColor: "#C8C8C5",
                  color: "black",
                  marginBottom: "1rem",
                  width: "70rem",
                  height: "4rem",
                }}
              >
                +
              </button>
              </NavLink>
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

export default AdminDeneme;
