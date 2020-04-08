import React from "react"
import Jumbotron from "../../components/Jumbotron"
import Registration from "../../components/auth/Registration"


function RegistrationPage() {
  return (
    <>
      <Jumbotron></Jumbotron>
      <div className="container">
          <p>
              Register New Employee Account
          </p>
          <Registration></Registration>
      </div>
    </>
  );
}

export default RegistrationPage;