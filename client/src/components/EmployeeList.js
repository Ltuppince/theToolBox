import React from "react";
// import data from "/api/users/data"

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return (
    <li>
       <li> <strong>Department: {props.value.department}</strong></li>
      <ul>
        <li>First Name: {props.value.firstName}</li>
        <li>Last Name: {props.value.lastName}</li>
        <li>Title: {props.value.title}</li>
        <li>Office: {props.value.office}</li>
        <li>Mobile: {props.value.mobile}</li>
      </ul>
    </li>
  );
}

function EmployeeList(props) {
  console.log(props);
  const employees = props.companyData.employees;
  const listItems = employees.map((employee, i) => (
    <ListItem value={employee} key={i} />
  ));
  return <ul>{listItems}</ul>;
}

export default EmployeeList;
