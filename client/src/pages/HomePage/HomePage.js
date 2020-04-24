import React from "react"
import Jumbotron from "../../components/Jumbotron"
import toolbox from "../../assets/toolbox logo.jpeg"
import "./style.css"

function HomePage() {
  const paragraph = ""
  return (
    <>
    <Jumbotron title={"Welcome To The Tool Box"} paragraph={paragraph}/>
    <div className="center-container">
    <img className="toolbox" src={toolbox} alt="toolbox logo"></img>
    </div>
    
    </>
  );
}

export default HomePage;
