import React from "react";
// import img1 from "../assets/Image 2-10-20 at 6.44 PM.jpeg";
import "./card-style.css";

const Card = props => {
    return(
        <div className="card text-center shadow">
            {/* <div className="overflow">
                <img src= {props.imgsrc} alt="Image1" className="card-img-top"/>
            </div> */}
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary"> {props.text}</p>
                
                <a target="_blank" href={props.href} className="btn btn-outline-info">more info</a>
            </div>
        </div>
    );
};

export default Card;