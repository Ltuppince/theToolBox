import React from "react"


function PoliciesList({ policies, listKey }) {
    return (
      <li>
        <h3><strong> Policy Name: {policies.policyName}</strong></h3>
        <ul>
          <li key={`${listKey}-1`}>Policy Detail: {policies.policyDetails}</li>
          
        </ul>
      </li>
    )
  }
  
  export default PoliciesList;
  