import React from "react"
import Jumbotron from "../../components/Jumbotron";
import  Login from "../../components/Login"


function LoginPage() {
    return (
        <>
           <Jumbotron></Jumbotron>
          <div className="container">
            <p>Employee Login </p>
              <Login></Login>
          </div>
        </>
    )
}

export default LoginPage;