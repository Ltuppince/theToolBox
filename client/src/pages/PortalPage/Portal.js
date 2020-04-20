import React from "react"
import Jumbotron from "../../components/Jumbotron";
import SearchForm from "../../components/SearchForm"
import PortalCards from "../../Card/PortalCards"

let changeValue = ""

function handleChange(event){
    console.log("changeValue", event.target.value)
    changeValue = (event.target.value)
    
}


function Portal() {
    return(
        <>
        <div>
            <Jumbotron></Jumbotron>
        </div>
           
        <div className="container">
          <SearchForm handleChange={handleChange} value={changeValue}/>
          <PortalCards></PortalCards>
          
        </div>
        
        </>
        
    )
}

export default Portal;