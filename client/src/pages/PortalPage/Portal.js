import React from "react"
import Jumbotron from "../../components/Jumbotron";
import SearchForm from "../../components/SearchForm"
import Cards from "../../Card/Cards"

function Portal() {
    return(
        <>
        <div>
            <Jumbotron></Jumbotron>
        </div>
           
        <div className="container">
          <SearchForm></SearchForm>
          <Cards></Cards>
          
        </div>
        
        </>
        
    )
}

export default Portal;