import React from "react"
import Jumbotron from "../../components/Jumbotron"
import PoliciesList from "../../components/PoliciesList"


function PoliciesPage({ policiesData }) {
    console.log(policiesData)
    const paragraph = "Company paragraph goes here."
    return (
        <>
        <h1>Policy data</h1>
           <Jumbotron title={policiesData.company_name} paragraph={paragraph} />
          <div className="container">
            <ul>
            { policiesData.policies.map((policies, i) => <PoliciesList policies={policies} listKey={i} key={i} />)}
            </ul>
          </div>
        </>
    )
}

export default PoliciesPage;