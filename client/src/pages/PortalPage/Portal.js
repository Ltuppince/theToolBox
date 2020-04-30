import React,{useState} from "react";
import Jumbotron from "../../components/Jumbotron";
import SearchForm from "../../components/SearchForm";
import PortalCards from "../../Card/PortalCards";
import $ from "jquery"; 

let changeValue = ""
let names = [
"codeacademy","skillsoft","pluralsight","udemy","reacttrainingvideo", "merntrainingvideo",
"slack","linkedinlearning","smartsheet","zoom","payroll","policiesprocedures"];
function handleChange(event){
    console.log("changeValue", event.target.value);
    changeValue = (event.target.value);
    for(let i = 0; i<names.length; i++){
        if(names[i].startsWith(changeValue.toLocaleLowerCase())){
            console.log(names[i]);
            $(`#${names[i]}`).show();
        }
        else{
            console.log("..."+names[i]);
            $(`#${names[i]}`).hide();
        }
    }
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