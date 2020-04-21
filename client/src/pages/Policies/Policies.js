import React, { useState, useEffect, useContext } from "react"
import UserContext from "../../utils/UserContext"
import Jumbotron from "../../components/Jumbotron"
import PoliciesList from "../../components/PoliciesList"


function PoliciesPage({ policiesData }) {
    console.log(policiesData)
    const paragraph = "Company paragraph goes here."
    const [ company, setCompany ] = useState(null)
    const { _uId } = useContext(UserContext)

    const getCompanyData = async () => {
      const url = `api/users/company/${_uId}` 
      const res = await (await fetch(url)).json()
      setCompany({ companyName: res.companyName, policies: res.policies })
      console.log(`COMPANY DATA: ${company}`)
    }

    useEffect( () => {
      console.log(`USER UID: ${_uId}`)
      getCompanyData()
    }, [])

    return (
        <>
        <h1>Policy data</h1>
           <Jumbotron title={company && company.companyName } paragraph={paragraph} />
          <div className="container">
            <ul>
            {company && company.policies.map((policy, i) => <PoliciesList policies={policy} listKey={i} key={i} />)}
            </ul>
          </div>
        </>
    )
}

export default PoliciesPage;