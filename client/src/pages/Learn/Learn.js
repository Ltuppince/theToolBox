import React from "react"
import Jumbotron from "../../components/Jumbotron"
import LearnCards from "../../Card/LearnCards";


function LearnPage() {
    return(
        <>
        <div className="container">
        <Jumbotron />
        <LearnCards />
        </div>
        </>
    )
}

export default LearnPage;