import React from "react"
import Jumbotron from "../../components/Jumbotron"
import LearnCards from "../../Card/LearnCards";


function LearnPage() {
    return(
        <>
        <Jumbotron />
        <div className="container">
        <LearnCards />
        </div>
        </>
    )
}

export default LearnPage;