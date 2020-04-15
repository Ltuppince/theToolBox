import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../utils/UserContext"

function NavTabs(props) {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  console.log(props)

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      
      {props.isLoggedIn ?
      <li className="nav-item">
      <Link
        to="/directory"
        className={location.pathname === "/directory" ? "nav-link disabled" : "nav-link"}
      >
        Directory
      </Link>
    </li> : ""}
      <li className="nav-item">
        <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li>
      {props.isLoggedIn ?
      <li className="nav-item">
      <Link
        to="/portal"
        className={location.pathname === "/portal" ? "nav-link disabled" : "nav-link"}
      >
        Portal
      </Link>
    </li> : ""}
      {
        !props.isLoggedIn ?
        (
          <>
            <li className="nav-item">
              <Link
                to="/registration"
                className={location.pathname === "/registration" ? "nav-link active" : "nav-link"}
              >
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
              >
                Login
              </Link>
            </li>
          </>
        ) : ""
      }
      {props.isLoggedIn && props.email ?(
        <li className="nav-item" style={{marginLeft: "auto"}}>
          <div style={{display: "flex", alignItems: "center"}}>
          Welcome,
          <Link
            to={`user/${props.uid}`}
            className="nav-link"
            style={{paddingLeft: 0, paddingRight: 0}}
          >
           { props.email }
          </Link>
          !
          </div>
        </li>
      ) : ""}
    </ul>
  );
}

export default NavTabs;
