import React from "react"
import Jumbotron from "../../components/Jumbotron"
import EmployeeList from "../../components/EmployeeList"

function Directory({ employeeData }) {
    console.log(employeeData)
    const paragraph = "Company paragraph goes here."
    return (
        <>
           <Jumbotron title={employeeData.company_name} paragraph={paragraph} />
          <div className="container">
            <ul>
            { employeeData.employees.map((emp, i) => <EmployeeList emp={emp} listKey={i} key={i} />)}
            </ul>
          </div>
        </>
    )
}

export default Directory;