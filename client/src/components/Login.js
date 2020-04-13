import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import UserContext from "../utils/UserContext"
import AppLandingPage from "../pages/PortalPage/Portal"
// import { response } from "express";

export default function Login () {

  const [_email, _setEmail] = useState("")
  const [_password, _setPassword] = useState("")

  // use the custom handleUpdate method from UserContext.Provider in App component to update App state
  const { handleUpdate } = useContext(UserContext)

  // use the useHistory hook to programmatically navigate to a route
  const history = useHistory()

  const handleChange = (event) => {
    switch(event.target.name) {
      case 'email':
        _setEmail(event.target.value)
        break;
      case 'password':
        _setPassword(event.target.value)
        break;
    }
  }

  const handleSubmit = (event) => {
    axios
      .post(
        "api/users/login",
        {
          user: {
            email: _email,
            password: _password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        const { _id, email } = response.data
        console.log("res from login", response);
        
        handleUpdate({
          _isLoggedIn: true,
          _uId: _id,
          _email: email
        })

        history.push("/portal")
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={_email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={_password}
          onChange={handleChange}
          required
        />
        {/* <p style={{color: this.state.login.success ? "green" : "red"}}>{this.state.login.log}</p> */}
        <button className="btn btn-info" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
