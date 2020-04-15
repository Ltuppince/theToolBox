import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import UserContext from "../utils/UserContext"
import AppLandingPage from "../pages/PortalPage/Portal"
// import { response } from "express";

export default function Login () {

  const [_email, _setEmail] = useState("")
  const [_password, _setPassword] = useState("")
  const [_isLoggedIn, _setIsLoggedIn] = useState(false)
  const [_log, _setLog] = useState("")

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
        if (response.data.status === 422) {
          throw response.data
        }
        const { _id, email } = response.data
        console.log("res from login", response);
        
        handleUpdate({
          _isLoggedIn: true,
          _uId: _id,
          _email: email
        })

        _setIsLoggedIn(true)
        _setLog("Login successful! Redirecting...")

        history.push("/portal")
      })
      .catch((err) => {
        const { error, message="There was an error. Check server logs.", status=422} = err
        console.error(`Status: ${status} \nMessage: ${message}\nError: ${JSON.stringify(error, null, 4)}`);
        _setIsLoggedIn(false)
        _setLog(message)
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
        <p style={{color: _isLoggedIn ? "green" : "red"}}>{_log}</p>
        <button className="btn btn-info" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
