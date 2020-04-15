import React from "react"

function EmployeeList({ emp, listKey }) {
  return (
    <li>
      <h3><strong>Department: {emp.department}</strong></h3>
      <ul>
        <li key={`${listKey}-0`}>First Name: {emp.firstName}</li>
        <li key={`${listKey}-1`}>Last Name: {emp.lastName}</li>
        <li key={`${listKey}-2`}>Title: {emp.title}</li>
        <li key={`${listKey}-3`}>Office: {emp.office}</li>
        <li key={`${listKey}-4`}>Mobile: {emp.mobile}</li>
      </ul>
    </li>
  )
}

export default EmployeeList;
