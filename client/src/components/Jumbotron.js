import React from "react";


function Jumbotron(props){
    const { title = null, paragraph = null } = props
    return(
        <>
            <div className="jumbotron jumbotron-fluid">
               <div className="container">
                  <h1 className="display-4">{title ? title : "THE TOOL BOX"}</h1>
                  <p className="lead">{paragraph ? paragraph : "Your centralized work space for the resources needed to get the job done."}</p>
               </div>
            </div>
        </>    
    )
}

export default Jumbotron;