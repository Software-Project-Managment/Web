import React from "react";
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
const NewCoordinator = () => {
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
            <NavLink to="/student">
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
          <div style={{ marginRight: "9px" }}>
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: "2.5rem", marginRight: "10rem" }}
            />
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
                  to="/coordinator"
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
                  to="/coordinator/inbox"
                  style={({ isActive }) => ({
                    cursor: "pointer",
                    border:
                      isActive && location.pathname === "/coordinator/inbox"
                        ? "0px solid black"
                        : "",
                    backgroundColor:
                      isActive && location.pathname === "/coordinator/inbox"
                        ? "#8C949D"
                        : "",
                    borderRadius:
                      isActive && location.pathname === "/coordinator/inbox"
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
                  to="/coordinator/studentInformation"
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
                backgroundColor: "pink",
                alignItems: "center",
                justifyContent: "start",
                justifySelf: "center",
                textJustify: "center",
                width: "80%",
                boxShadow: "0 4px 4px  0 rgba(0, 0, 0, 0.25) inset",
              }}
            >
              {" "}
              <FontAwesomeIcon
                icon={faBell}
                style={{ paddingRight: "1rem", fontSize: "2.5rem" }}
              />
              <p>2 New SGK request!</p>
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
              {" "}
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ paddingRight: "1rem", fontSize: "2.5rem" }}
              />
              <p>
                Please be sure that the Student fill the Intership Report
                rightly and correct befor you sent the SGK Document !!!
              </p>
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

export default NewCoordinator;
