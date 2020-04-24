import React, { useState, useEffect, useContext } from "react"
import UserContext from "../../utils/UserContext"
import Jumbotron from "../../components/Jumbotron"
import PoliciesList from "../../components/PoliciesList"


function PoliciesPage({ policiesData }) {
  console.log(policiesData)
  const paragraph = "Innovation and Excellence"
  const [ company, setCompany ] = useState(null)
  const { _uId } = useContext(UserContext)
  const getCompanyData = async () => {
    // const url = `api/users/company/${_uId}` 
    console.log(`${_uId}`)
    const url = `api/users/company/5e9e4fb29caa2570655c4a9d`
    console.log(url)
    const res = await (await fetch(url)).json()
    console.log(res)
      setCompany({ companyName: res.companyName, policies: res.policies })
      console.log(res.companyName)
      console.log(`COMPANY DATA: ${company}`)
      
  }
    
    useEffect( () => {
      console.log(`USER UID: ${_uId}`)
      console.log("getCompanyData")
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