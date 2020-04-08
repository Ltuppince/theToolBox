import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../utils/UserContext"
// import { response } from "express";

export default function Login () {

  const [_email, _setEmail] = useState("")
  const [_password, _setPassword] = useState("")
  // const [loginErrors, setLoginErrors] = useState("")
  const { handleUpdate, test } = useContext(UserContext)

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
        //   if (response.data.logged_in) {
        //     this.props.handleSuccessfulAuth(response.data);
        //   }
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
