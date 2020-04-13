import React from "react"
import Jumbotron from "../../components/Jumbotron"
import EmployeeList from "../../components/EmployeeList"
import EmployeeData from "../someCompany"

function Directory() {
    return (
        <>
           <Jumbotron></Jumbotron>
          <div className="container">
            <EmployeeList companyData={EmployeeData}></EmployeeList>
          </div>
        </>
    )
}

export default Directory;